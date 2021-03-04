import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Versailles extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/versailles"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Château de Versailles</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/versailles/versailles01.jpg")} alt="versailles01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Le château de Versailles est un château et un monument historique français qui se situe à Versailles, dans les Yvelines, en France. Il fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI. Le roi et la cour y résidèrent de façon permanente du 6 mai 1682 au 6 octobre 1789, à l'exception des années de la Régence de 1715 à 1723. Situés au sud-ouest de Paris, ce château et son domaine visaient à glorifier la monarchie française.
                        Le château est constitué d'une succession d'éléments ayant une harmonie architecturale. Il s'étale sur 63 154 m2, répartis en 2 300 pièces, dont, actuellement, 1 000 pièces de musée1.
                        Le parc du château de Versailles s'étend sur 815 ha, contre plus de 8 000 ha avant la Révolution françaisenote 1, dont 93 ha de jardins. Il comprend de nombreux éléments, dont le Petit et le Grand Trianon (qui fut également résidence de Napoléon Ier, Louis XVIII, Charles X, Louis-Philippe Ier, et Napoléon III), le hameau de la Reine, le Grand et le Petit Canal, une ménagerie (aujourd’hui détruite), une orangerie et la pièce d'eau des Suisses.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="http://www.chateauversailles.fr/" target="_blank">Château de Versailles</a></p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles02.jpg")} alt="versailles02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles03.jpg")} alt="versailles03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles04.jpg")} alt="versailles04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles05.jpg")} alt="versailles05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles06.jpg")} alt="versailles06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/versailles/versailles07.jpg")} alt="versailles07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Versailles