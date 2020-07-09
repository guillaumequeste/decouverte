import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Etaples extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/etaples"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Etaples</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/etaples/etaples01.jpg")} alt="etaples01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/etaples/etaples02.jpg")} alt="etaples02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Etaples