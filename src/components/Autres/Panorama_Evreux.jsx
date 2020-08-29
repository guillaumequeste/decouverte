import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Panorama_Evreux extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_evreux"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Panorama d'Evreux</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/panorama_evreux/panorama_evreux01.jpg")} alt="panorama_evreux01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_evreux/panorama_evreux02.jpg")} alt="panorama_evreux02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_evreux/panorama_evreux03.jpg")} alt="panorama_evreux03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_evreux/panorama_evreux04.jpg")} alt="panorama_evreux04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_Evreux