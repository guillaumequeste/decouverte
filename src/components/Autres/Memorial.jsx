import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Memorial extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/memorial"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Mémorial du 19 août 1942</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/memorial/memorial01.jpg")} alt="memorial01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Le Mémorial du 19 août 1942, dédié à la mémoire des soldats tués lors de l'opération Jubilee, est hébergé depuis 2002, au Petit Théâtre de Dieppe, théâtre à l'italienne construit en 1826.
                        Documents, objets, maquettes, en hommage aux soldats, marins et aviateurs alliés ayant participé au Raid, ainsi que la projection d'un film sur l'opération "Jubilee".</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="https://www.dieppe.fr/mini-sites/19-aout-1942/les-lieux-de-memoire-181/le-memorial-du-19-aout-1942-636" target="_blank">Mémorial du 19 août 1942</a></p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/memorial/memorial02.jpg")} alt="memorial02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Memorial