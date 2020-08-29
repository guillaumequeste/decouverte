import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Estran extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/estran"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Estran Cité de la Mer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/estran/estran.jpeg")} alt="estran01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>L'Estran Cité de la Mer est un centre de culture scientifique et technique associatif sur le thème du littoral haut-normand situé à Dieppe. Il a été créé en mai 1987 par l'association E.S.T.R.A.N. qui a pour objectif principal la vulgarisation de la culture scientifique et technique de la mer et de la pêche.
                        Ouvert au public toute l'année, il présente à travers 1 600 m2 d'exposition la construction navale, les techniques de pêche, l'environnement littoral et la faune de la Manche à travers deux salles de grands aquariums.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.estrancitedelamer.fr/" target="_blank">Estran Cité de la Mer</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Estran