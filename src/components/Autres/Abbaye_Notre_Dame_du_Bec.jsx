import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Abbaye_Notre_Dame_du_Bec extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/abbaye_notre-dame_du_bec"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye Notre-Dame du Bec</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec01.jpg")} alt="abbaye_notre-dame_du_bec01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>L’abbaye Notre-Dame du Bec est une abbaye catholique bénédictine faisant aujourd'hui partie de la congrégation de Sainte-Marie du Mont-Olivet et située au Bec-Hellouin, près de Brionne, dans le département de l’Eure, en Normandie. Elle a été fondée en 1034 par Herluin, ou Helloin, d'où son nom, chevalier du comte Gilbert de Brionne.</p>
                        <p className="lienSiteOfficiel">Site officiel : <a href="https://abbayedubec.org/" target="_blank">Abbaye de Notre-Dame du Bec</a></p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec02.jpg")} alt="abbaye_notre-dame_du_bec02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec03.jpg")} alt="abbaye_notre-dame_du_bec03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec04.jpg")} alt="abbaye_notre-dame_du_bec04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec05.jpg")} alt="abbaye_notre-dame_du_bec05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec06.jpg")} alt="abbaye_notre-dame_du_bec06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/abbaye_notre-dame_du_bec/abbaye_notre-dame_du_bec07.jpg")} alt="abbaye_notre-dame_du_bec07" className="photoGrosHorloge"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abbaye_Notre_Dame_du_Bec