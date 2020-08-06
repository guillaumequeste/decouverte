import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Mezy_sur_Seine extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/mezy-sur-seine"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Mézy-sur-Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/mezy-sur-seine/mezy-sur-seine01.jpg")} alt="mezy-sur-seine01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/mezy-sur-seine/mezy-sur-seine02.jpg")} alt="mezy-sur-seine02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/mezy-sur-seine/mezy-sur-seine03.jpg")} alt="mezy-sur-seine03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mezy_sur_Seine