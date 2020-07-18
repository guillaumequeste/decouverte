import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Basilique_Lisieux extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/basilique_lisieux"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Basilique Sainte-Thérèse de Lisieux</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux01.jpg")} alt="basilique_lisieux01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux02.jpg")} alt="basilique_lisieux02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux03.jpg")} alt="basilique_lisieux03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux04.jpg")} alt="basilique_lisieux04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux05.jpg")} alt="basilique_lisieux05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/basilique_lisieux/basilique_lisieux06.jpg")} alt="basilique_lisieux06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Basilique_Lisieux