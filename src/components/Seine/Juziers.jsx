import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Juziers extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/juziers"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Juziers</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/juziers/juziers01.jpg")} alt="juziers01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/juziers/juziers02.jpg")} alt="juziers02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/juziers/juziers03.jpg")} alt="juziers03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/juziers/juziers04.jpg")} alt="juziers04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Juziers