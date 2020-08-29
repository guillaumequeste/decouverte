import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Mesnil_Val extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/mesnil_val"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Mesnil Val Plage</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/mesnil_val/mesnil_val01.jpg")} alt="mesnil_val01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val02.jpg")} alt="mesnil_val02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val03.jpg")} alt="mesnil_val03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val04.jpg")} alt="mesnil_val04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val05.jpg")} alt="mesnil_val05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val06.jpg")} alt="mesnil_val06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val07.jpg")} alt="mesnil_val07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val08.jpg")} alt="mesnil_val08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val09.jpg")} alt="mesnil_val09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val10.jpg")} alt="mesnil_val10" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val11.jpg")} alt="mesnil_val11" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val12.jpg")} alt="mesnil_val12" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val13.jpg")} alt="mesnil_val13" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/mesnil_val/mesnil_val14.jpg")} alt="mesnil_val14" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mesnil_Val