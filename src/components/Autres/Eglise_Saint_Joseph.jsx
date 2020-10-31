import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Eglise_Saint_Joseph extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/eglise_saint-joseph"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Eglise Saint-Joseph du Havre</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph01.jpg")} alt="eglise_saint-joseph01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>L'église Saint-Joseph est un édifice emblématique du centre-ville reconstruit du Havre. C'est le premier monument que l'on voit en arrivant par la mer.
                        Le renouveau de l’art sacré, l’abstraction lyrique des années 1950, ainsi que les modifications liturgiques à l’origine des réformes de Vatican II sont des clés pour comprendre l’édifice.
                        Cette église de la Reconstruction a été inscrite au titre des monuments historiques le 11 mai 1965 alors qu'elle avait moins de dix ans d'existence. Son classement est intervenu le 29 janvier 2018.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://unesco.lehavre.fr/fr/decouvrir/leglise-saint-joseph" target="_blank">Eglise Saint-Joseph</a></p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph02.jpg")} alt="eglise_saint-joseph02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph03.jpg")} alt="eglise_saint-joseph03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph04.jpg")} alt="eglise_saint-joseph04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph05.jpg")} alt="eglise_saint-joseph05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph06.jpg")} alt="eglise_saint-joseph06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Eglise_Saint_Joseph