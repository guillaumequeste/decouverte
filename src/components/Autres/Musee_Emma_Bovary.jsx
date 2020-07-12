import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Musee_Emma_Bovary extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/musee_emma_bovary"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Galerie Bovary - Musée d'automates</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary01.jpg")} alt="musee_emma_bovary01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Musee_Emma_Bovary