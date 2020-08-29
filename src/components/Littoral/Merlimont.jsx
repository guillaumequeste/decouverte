import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Merlimont extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/merlimont"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Merlimont-Plage</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/merlimont/merlimont01.jpg")} alt="merlimont01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont02.jpg")} alt="merlimont02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont03.jpg")} alt="merlimont03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont04.jpg")} alt="merlimont04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont05.jpg")} alt="merlimont05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont06.jpg")} alt="merlimont06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/merlimont/merlimont07.jpg")} alt="merlimont07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Merlimont