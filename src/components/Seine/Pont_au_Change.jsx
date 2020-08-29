import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Pont_au_Change extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_au_change"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Pont au Change</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_au_change/pont_au_change01.jpg")} alt="pont_au_change01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_au_change/pont_au_change02.jpg")} alt="pont_au_change02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_au_Change