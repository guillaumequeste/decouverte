import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Chateau_Pierrefonds extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/chateau_pierrefonds"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Château de Pierrefonds</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/chateau_pierrefonds/chateau_pierrefonds.jpg")} alt="chateau_pierrefonds" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chateau_Pierrefonds