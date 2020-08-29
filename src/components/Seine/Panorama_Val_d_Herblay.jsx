import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Panorama_Val_d_Herblay extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_val_d_herblay"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Panorama Val d'Herblay et la Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/panorama_val_d_herblay/panorama_val_d_herblay01.jpg")} alt="panorama_val_d_herblay01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/panorama_val_d_herblay/panorama_val_d_herblay02.jpg")} alt="panorama_val_d_herblay02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/panorama_val_d_herblay/panorama_val_d_herblay03.jpg")} alt="panorama_val_d_herblay03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_Val_d_Herblay