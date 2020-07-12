import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Panorama_XXL extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/panorama_xxl"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Panorama XXL</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/panorama_xxl/panorama_xxl.jpg")} alt="panorama_xxl" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panorama_XXL