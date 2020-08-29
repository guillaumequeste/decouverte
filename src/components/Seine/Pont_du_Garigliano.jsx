import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Pont_du_Garigliano extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_du_garigliano"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Pont du Garigliano</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_du_garigliano/pont_du_garigliano01.jpg")} alt="pont_du_garigliano01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_du_Garigliano