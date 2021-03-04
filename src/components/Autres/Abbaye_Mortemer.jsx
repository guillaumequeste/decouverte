import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Abbaye_Mortemer extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/abbaye_mortemer"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Abbaye de Mortemer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/abbaye_mortemer/abbaye_mortemer.jpg")} alt="abbaye_mortemer" className="photo"/>
                    </div>
                    <div className="container">
                        <p>L'abbaye Notre-Dame de Mortemer est une ancienne abbaye d'hommes cistercienne fondée en 1134 par le roi Henri Beauclerc entre Lyons-la-Forêt et Lisors dans l'Eure. Elle fut la première abbaye cistercienne de Normandie. La plupart des bâtiments d'origine datant des xiie et xiiie siècles sont à l'état de ruine et ont fait l'objet d’un classement au titre des monuments historiques en date du 20 décembre 19663. Le grand logis est une bâtisse du xviie siècle en bon état qui abrite le musée de l'abbaye.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.abbaye-de-mortemer.fr/" target="_blank">Abbaye de Mortemer</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abbaye_Mortemer