import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Manoir_Ango extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/manoir_ango"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Mémorial du 19 août 1942</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/manoir_ango/manoir_ango.jpeg")} alt="manoir_ango" className="photo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Manoir_Ango