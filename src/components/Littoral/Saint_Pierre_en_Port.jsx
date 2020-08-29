import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Saint_Pierre_en_Port extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/saint-pierre-en-port"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Saint-Pierre-en-Port</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/saint-pierre-en-port/spenport01.jpg")} alt="spenport01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport02.jpg")} alt="spenport02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport03.jpg")} alt="spenport03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport04.jpg")} alt="spenport04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport05.jpg")} alt="spenport05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport06.jpg")} alt="spenport06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport07.jpg")} alt="spenport07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport08.jpg")} alt="spenport08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-pierre-en-port/spenport09.jpg")} alt="spenport09" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Pierre_en_Port