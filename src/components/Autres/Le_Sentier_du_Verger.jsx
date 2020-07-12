import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Le_Sentier_du_Verger extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/le_sentier_du_verger"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Le Sentier du Verger</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger01.jpg")} alt="le_sentier_du_verger01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger02.jpg")} alt="le_sentier_du_verger02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger03.jpg")} alt="le_sentier_du_verger03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger04.jpg")} alt="le_sentier_du_verger04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger05.jpg")} alt="le_sentier_du_verger05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger06.jpg")} alt="le_sentier_du_verger06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger07.jpg")} alt="le_sentier_du_verger07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger08.jpg")} alt="le_sentier_du_verger08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger09.jpg")} alt="le_sentier_du_verger09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_sentier_du_verger/le_sentier_du_verger10.jpg")} alt="le_sentier_du_verger10" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Le_Sentier_du_Verger