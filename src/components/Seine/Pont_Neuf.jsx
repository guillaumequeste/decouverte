import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Pont_Neuf extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_neuf"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Pont Neuf</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_neuf/pont_neuf01.jpg")} alt="pont_neuf01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_neuf/pont_neuf02.jpg")} alt="pont_neuf02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_neuf/pont_neuf03.jpg")} alt="pont_neuf03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_neuf/pont_neuf04.jpg")} alt="pont_neuf04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_Neuf