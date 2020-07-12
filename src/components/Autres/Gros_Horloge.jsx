import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Gros_Horloge extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/gros-horloge"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Le Gros-Horloge</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/gros-horloge/gros-horloge.jpg")} alt="gros-horloge" className="photoGrosHorloge"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gros_Horloge