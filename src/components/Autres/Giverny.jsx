import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Giverny extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/giverny"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Fondation Claude Monet (Giverny)</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/giverny/giverny.jpg")} alt="giverny01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>La Fondation Claude Monet présente les jardins et la maison de Claude Monet à Giverny (Eure). Avec 530 000 visiteurs par an en 2010, elle est le deuxième lieu le plus visité en Normandie après le Mont-Saint-Michel1. Depuis cette date, la fréquentation augmente atteignant 570 000 en 2012 puis 580 000 en 2013 pour atteindre 627 000 visiteurs en 2014, ce qui conforte sa deuxième place de site touristique de Normandie2.
                        La maison et les jardins ont reçu respectivement les labels « Maison des Illustres en 2012 »3 et Logo affichant deux demies silhouettes d'arbre Jardin remarquable en 2011. La propriété fait l’objet d’une inscription au titre des monuments historiques depuis le 26 avril 1976.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="https://fondation-monet.com/" target="_blank">Fondation Claude Monet</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Giverny