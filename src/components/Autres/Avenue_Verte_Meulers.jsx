import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Avenue_Verte_Meulers extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/avenue_verte_meulers"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye verte Meulers</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers01.jpg")} alt="avenue_verte_meulers01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers02.jpg")} alt="avenue_verte_meulers02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers03.jpg")} alt="avenue_verte_meulers03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers04.jpg")} alt="avenue_verte_meulers04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers05.jpg")} alt="avenue_verte_meulers05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers06.jpg")} alt="avenue_verte_meulers06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_meulers/avenue_verte_meulers07.jpg")} alt="avenue_verte_meulers07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avenue_Verte_Meulers