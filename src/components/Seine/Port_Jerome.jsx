import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Port_Jerome extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/port-jerome"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Port-Jérôme-sur-Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/port-jerome/port-jerome01.jpg")} alt="port-jerome01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/port-jerome/port-jerome02.jpg")} alt="port-jerome02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/port-jerome/port-jerome03.jpg")} alt="port-jerome03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Port_Jerome