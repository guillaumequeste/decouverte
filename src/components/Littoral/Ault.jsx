import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'

class Ault extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/ault"} />
                <Header />
                <h2>Ault works</h2>
            </div>
        )
    }
}

export default Ault