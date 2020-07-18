import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Giverny extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/giverny"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Fondation Claude Monet (Giverny)</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/giverny/giverny.jpg")} alt="giverny01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Giverny