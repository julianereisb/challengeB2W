import React, { Component } from 'react'
import Films from '../modules/getFilms'

export default class RandomPlanet extends Component {
    constructor(props) {
        super(props)
        this.getPlanet = this.getPlanet.bind(this)

        this.state =  {
            planet: ''
        }

        this.getPlanet();
    }

    getPlanet() {
        const that = this;
        this.getURLplanet()
        .then(function(response) {
            that.setState({planet: response});
        })
        .catch(function(error) {
            that.setState({planet: error});
        });
    }

    getURLplanet() {
        const that = this;

        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            let url = 'https://swapi.co/api/planets/'+ (Math.floor(Math.random() * 60) + 1)  +'/';

            xhr.open('GET', url);
            xhr.send(null);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        error("Erro na requisição");
                    }
                }
            }
        });
    }

    render() {
        return (
            <div id="randomPlanet">
                <button onClick={this.getPlanet} >Conhecer mais planetas</button>
               <table>
                   <tr>
                       <th className="namePlanet" colSpan="5"> Planeta {this.state.planet.name}</th>
                   </tr>
                   <tr>
                       <th className="th-climate">Clima</th>
                       <th className="th-terrain">Terreno</th>
                       <th className="th-films">Filmes</th>
                       <th className="th-period">Período de rotação</th>
                       <th className="th-period">Perído de translação</th>
                   </tr>
                   <tr>
                        <td>{this.state.planet.climate}</td>
                        <td>{this.state.planet.terrain}</td>
                        <td>{this.state.planet.films !== undefined && this.state.planet.films.length > 0 ? <Films url={this.state.planet.films} /> : "-"}</td>
                        <td>{this.state.planet.rotation_period}</td>
                        <td>{this.state.planet.orbital_period}</td>
                   </tr>
               </table>
               {/* console log afim de verificação das informações com o request */}
               {console.log('planet: ', this.state.planet)}
            </div>
        )
    }
}
