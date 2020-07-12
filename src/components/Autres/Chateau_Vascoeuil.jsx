import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Chateau_Vascoeuil extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/chateau_vascoeuil"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Château de Vascoeuil</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/chateau_vascoeuil/chateau_vascoeuil.jpg")} alt="chateau_vascoeuil" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chateau_Vascoeuil