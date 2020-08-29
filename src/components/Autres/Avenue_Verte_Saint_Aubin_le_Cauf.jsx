import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Avenue_Verte_Saint_Aubin_le_Cauf extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/avenue_verte_saint-aubin-le-cauf"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Abbaye verte Saint-Aubin-le-Cauf</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf01.jpg")} alt="avenue_verte_saint-aubin-le-cauf01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/avenue_verte_saint-aubin-le-cauf/avenue_verte_saint-aubin-le-cauf02.jpg")} alt="avenue_verte_saint-aubin-le-cauf02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avenue_Verte_Saint_Aubin_le_Cauf