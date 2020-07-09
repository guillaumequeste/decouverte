import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Boulogne extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/boulogne"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Boulogne-sur-Mer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/boulogne/boulogne01.jpg")} alt="boulogne01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/boulogne/boulogne02.jpg")} alt="boulogne02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/boulogne/boulogne03.jpg")} alt="boulogne03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Boulogne