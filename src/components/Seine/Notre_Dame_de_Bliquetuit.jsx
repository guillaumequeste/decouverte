import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Notre_Dame_de_Bliquetuit extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/notre-dame-de-bliquetuit"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Notre-Dame-de-Bliquetuit</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit01.jpg")} alt="notre-dame-de-bliquetuit01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit02.jpg")} alt="notre-dame-de-bliquetuit02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit03.jpg")} alt="notre-dame-de-bliquetuit03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/notre-dame-de-bliquetuit/notre-dame-de-bliquetuit04.jpg")} alt="notre-dame-de-bliquetuit04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notre_Dame_de_Bliquetuit