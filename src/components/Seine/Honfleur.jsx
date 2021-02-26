import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Honfleur extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Honfleur Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/honfleur"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Honfleur</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/honfleur/honfleur01.jpg")} alt="honfleur01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/honfleur/honfleur02.jpg")} alt="honfleur02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/honfleur/honfleur03.jpg")} alt="honfleur03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/honfleur/honfleur04.jpg")} alt="honfleur04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Honfleur