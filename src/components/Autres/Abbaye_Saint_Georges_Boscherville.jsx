import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Abbaye_Saint_Georges_Boscherville extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/abbaye_saint_georges_boscherville"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye Romane Saint Georges de Boscherville</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/abbaye_saint_georges_boscherville/abbaye_saint_georges_boscherville.jpg")} alt="abbaye_saint_georges_boscherville" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abbaye_Saint_Georges_Boscherville