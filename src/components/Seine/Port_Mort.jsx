import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'

class Port_Mort extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/port-mort"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Port-Mort</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/port-mort/port-mort01.jpg")} alt="port-mort01" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Port_Mort