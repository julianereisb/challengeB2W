import 'modules/font-awesome/css/font-awesome.min.css'
import '../assets/scss/index.scss'

import React from 'react'

import Header from '../template/pageHeader'
import RandomPlanet from '../modules/randomPlanet'

export default props => (
    <div className="content">
        <Header />
        <RandomPlanet />
    </div>
)