import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Abbaye_Mortemer extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/abbaye_mortemer"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye de Mortemer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/abbaye_mortemer/abbaye_mortemer.jpg")} alt="abbaye_mortemer" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abbaye_Mortemer