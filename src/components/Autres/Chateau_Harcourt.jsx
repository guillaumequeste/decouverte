import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Chateau_Harcourt extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/chateau_harcourt"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Château d'Harcourt</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/chateau_harcourt/chateau_harcourt.jpg")} alt="chateau_harcourt" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chateau_Harcourt