import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Pont_Charles_de_Gaulle extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_charles_de_gaulle"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Pont Charles de Gaulle</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_charles_de_gaulle/pont_charles_de_gaulle01.jpg")} alt="pont_charles_de_gaulle01" className="photoGrosHorloge"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_Charles_de_Gaulle