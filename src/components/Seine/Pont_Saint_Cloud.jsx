import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Pont_Saint_Cloud extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_saint-cloud"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Pont de Saint-Cloud</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_saint-cloud/pont_saint-cloud01.jpg")} alt="pont_saint-cloud01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_Saint_Cloud