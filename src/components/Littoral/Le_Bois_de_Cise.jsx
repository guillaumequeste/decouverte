import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Le_Bois_de_Cise extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/le_bois_de_cise"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Le Bois de Cise</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/le_bois_de_cise/le_bois_de_cise01.jpg")} alt="le_bois_de_cise01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_bois_de_cise/le_bois_de_cise02.jpg")} alt="le_bois_de_cise02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_bois_de_cise/le_bois_de_cise03.jpg")} alt="le_bois_de_cise03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Le_Bois_de_Cise