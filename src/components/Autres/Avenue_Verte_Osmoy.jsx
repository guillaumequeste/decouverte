import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Avenue_Verte_Osmoy extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/avenue_verte_osmoy"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye verte Osmoy-Saint-Valéry</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy01.jpg")} alt="avenue_verte_osmoy01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy02.jpg")} alt="avenue_verte_osmoy02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy03.jpg")} alt="avenue_verte_osmoy03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_osmoy/avenue_verte_osmoy04.jpg")} alt="avenue_verte_osmoy04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avenue_Verte_Osmoy