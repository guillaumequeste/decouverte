import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Chateau_Dieppe extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/chateau_dieppe"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Château de Dieppe</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/chateau_dieppe/chateau_dieppe.jpg")} alt="chateau_dieppe" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chateau_Dieppe