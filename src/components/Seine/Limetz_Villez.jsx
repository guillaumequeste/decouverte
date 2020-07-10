import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Limetz_Villez extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/limetz-villez"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Limetz-Villez</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/limetz-villez/limetz-villez01.jpg")} alt="llimetz-villez01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/limetz-villez/limetz-villez02.jpg")} alt="limetz-villez02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Limetz_Villez