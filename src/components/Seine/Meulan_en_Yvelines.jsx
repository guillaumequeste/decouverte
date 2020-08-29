import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Meulan_en_Yvelines extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/meulan-en-yvelines"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Meulan-en-Yvelines</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines01.jpg")} alt="meulan-en-yvelines01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines02.jpg")} alt="meulan-en-yvelines02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines03.jpg")} alt="meulan-en-yvelines03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines04.jpg")} alt="meulan-en-yvelines04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines05.jpg")} alt="meulan-en-yvelines05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines06.jpg")} alt="meulan-en-yvelines06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines07.jpg")} alt="meulan-en-yvelines07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines08.jpg")} alt="meulan-en-yvelines08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines09.jpg")} alt="meulan-en-yvelines09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/meulan-en-yvelines/meulan-en-yvelines10.jpg")} alt="meulan-en-yvelines10" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meulan_en_Yvelines