import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class La_Roche_Guyon extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/la_roche-guyon"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">La Roche-Guyon</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon01.jpg")} alt="la_roche-guyon01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon02.jpg")} alt="la_roche-guyon02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon03.jpg")} alt="la_roche-guyon03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon04.jpg")} alt="la_roche-guyon04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon05.jpg")} alt="la_roche-guyon05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_roche-guyon/la_roche-guyon06.jpg")} alt="la_roche-guyon06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default La_Roche_Guyon