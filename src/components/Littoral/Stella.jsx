import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Stella extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/stella"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Stella-Plage</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/stella/stella01.jpg")} alt="stella01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/stella/stella02.jpg")} alt="stella02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/stella/stella03.jpg")} alt="stella03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/stella/stella04.jpg")} alt="stella04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stella