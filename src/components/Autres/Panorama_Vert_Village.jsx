import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Panorama_Vert_Village extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_vert_village"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Panorama du Vert Village</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/panorama_vert_village/panorama_vert_village01.jpg")} alt="panorama_vert_village01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_vert_village/panorama_vert_village02.jpg")} alt="panorama_vert_village02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/panorama_vert_village/panorama_vert_village03.jpg")} alt="panorama_vert_village03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_Vert_Village