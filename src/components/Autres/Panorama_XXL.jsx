import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Panorama_XXL extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_xxl"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Panorama XXL</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/panorama_xxl/panorama_xxl.jpg")} alt="panorama_xxl" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Le Panorama XXL est un panorama qui propose de voir des œuvres géantes et panoramiques de l'artiste Yadegar Asisi. Grâce à un mélange original de photographies numériques, de peintures et de dessins, l'artiste redonne vie et modernise les panoramas, genre artistique incontournable du xixe siècle. Le visiteur est entouré de l'œuvre qu'il peut observer grâce à une tour centrale, lui donnant vraiment l'impression d'entrer dans l'œuvre. Le Panorama XXL se situe sur les quais, en bord de Seine, face à l'avenue Pasteur et l'église Sainte-Madeleine.
                        Le Panorama est ouvert depuis décembre 2014, sur le modèle du Panomètre de Leipzig.
                        Alors que le panorama devait chercher une nouvelle implantation à l'horizon 2021, la décision est finalement prise par la Métropole Rouen Normandie de cesser son fonctionnement en octobre 2021.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.panoramaxxl.com/" target="_blank">Panorama XXL</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_XXL