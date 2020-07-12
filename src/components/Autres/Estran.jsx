import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Estran extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/estran"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Estran Cité de la Mer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/estran/estran.jpeg")} alt="estran01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Estran