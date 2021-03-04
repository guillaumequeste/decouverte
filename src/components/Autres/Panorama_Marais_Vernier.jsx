import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Panorama_Marais_Vernier extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_evreux"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Panorama du Marais Vernier</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/panorama_marais_vernier/panorama_marais_vernier01.jpg")} alt="panorama_marais_vernier01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_marais_vernier/panorama_marais_vernier02.jpg")} alt="panorama_marais_vernier02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_marais_vernier/panorama_marais_vernier03.jpg")} alt="panorama_marais_vernier03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_Marais_Vernier