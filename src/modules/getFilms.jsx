import React, { Component } from 'react'
import _ from "underscore";

export default class GetFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {films: []};
        this.getUrlFilm();
    }

    getNameFilm(n) {
        return new Promise(function(resolve, reject) {
            const url = n; 
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText).title);
                    } else {
                        reject("Erro na requisição");
                    }
                }
            }
        });
    }
    getUrlFilm() {
        const url = this.props.url;
        const that = this;

        if (!url == '' || !url == undefined) {
            for (let i = 0; i < url.length; i++) {
                this.getNameFilm(url[i])
                .then(function(response) {
                    that.setState({
                        films: [...that.state.films, response]
                    });
                })
                .catch(function(error) {
                    that.setState({films: error});
                });
            }
        }
    }

    render() {
        return (
            <ul>
                {this.state.films.map((item,i) => <li key={i}>{item}</li>)}
            </ul>
        ) 
    }
}