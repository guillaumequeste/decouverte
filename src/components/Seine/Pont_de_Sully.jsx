import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Pont_de_Sully extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_de_Sully"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Pont de Sully</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_de_sully/pont_de_sully01.jpg")} alt="pont_de_sully01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_de_sully/pont_de_sully02.jpg")} alt="pont_de_sully02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_de_Sully