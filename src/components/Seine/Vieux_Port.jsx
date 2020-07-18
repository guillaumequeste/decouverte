import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Vieux_Port extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/vieux-port"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Vieux-Port</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/vieux-port/vieux-port01.jpg")} alt="vieux-port01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vieux-port/vieux-port02.jpg")} alt="vieux-port02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vieux-port/vieux-port03.jpg")} alt="vieux-port03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vieux-port/vieux-port04.jpg")} alt="vieux-port04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vieux-port/vieux-port05.jpg")} alt="vieux-port05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vieux-port/vieux-port06.jpg")} alt="vieux-port06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vieux_Port