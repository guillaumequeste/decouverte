import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Cathedrale_Rouen extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/cathedrale_rouen"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Cathédrale Notre-Dame de Rouen</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/cathedrale_rouen/cathedrale_rouen01.jpg")} alt="cathedrale_rouen01" className="photoGrosHorloge"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cathedrale_Rouen