import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Caudebec extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/caudebec"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Caudebec-en-Caux</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/caudebec/caudebec01.jpg")} alt="caudebec01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec02.jpg")} alt="caudebec02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec03.jpg")} alt="caudebec03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec04.jpg")} alt="caudebec04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec05.jpg")} alt="caudebec05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec06.jpg")} alt="caudebec06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/caudebec/caudebec07.jpg")} alt="caudebec07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Caudebec