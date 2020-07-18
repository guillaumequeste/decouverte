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
                    <div className="container">
                        <p>L'abbaye Saint-Georges de Boscherville se situe dans la commune de Saint-Martin-de-Boscherville, dans le département de la Seine-Maritime. L'église abbatiale est presque intégralement de style roman.
                        L'église fait l’objet de multiples protections au titre des monuments historiques1 : classement de l'église par la liste de 1840, classement du cloître en 1862, classement de la salle capitulaire en 1875, inscription de parcelles cadastrales en 1987 et classement de divers vestiges enfouis ainsi que divers bâtiments subsistants en 1989.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.abbaye-saint-georges.com/" target="_blank">Abbaye Romane Saint Georges de Boscherville</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abbaye_Saint_Georges_Boscherville