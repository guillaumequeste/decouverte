import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Porcheville extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/porcheville"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Porcheville</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/porcheville/porcheville01.jpg")} alt="porcheville01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/porcheville/porcheville02.jpg")} alt="porcheville02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/porcheville/porcheville03.jpg")} alt="porcheville03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Porcheville