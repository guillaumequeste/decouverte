import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Chateau_Dieppe extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/chateau_dieppe"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Château de Dieppe</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/chateau_dieppe/chateau_dieppe.jpg")} alt="chateau_dieppe" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Installé dans un château fort édifié à partir du XIVe, le Musée de Dieppe présente l'histoire de cette ville à travers ses objets et ses représentations. Il possède une collection pluridisciplinaire de 25000 objets, dont 2000 environ sont exposés dans une quinzaine de salles. Elle illustre au sens le plus large la richesse de l'histoire maritime de la ville et de son port.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="https://www.dieppe.fr/mini-sites/musee-de-dieppe" target="_blank">Ville de Dieppe - Musée de Dieppe</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chateau_Dieppe