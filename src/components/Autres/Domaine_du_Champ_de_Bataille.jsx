import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Domaine_du_Champ_de_Bataille extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/domaine_du_champ_de_bataille"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Domaine_du_Champ_de_Bataille</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/domaine_du_champ_de_bataille/domaine_du_champ_de_bataille.jpg")} alt="domaine_du_champ_de_bataille" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Domaine_du_Champ_de_Bataille