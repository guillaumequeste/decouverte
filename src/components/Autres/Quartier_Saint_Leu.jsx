import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Quartier_Saint_Leu extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/quartier_saint-leu"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Quartier Saint-Leu</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu01.jpg")} alt="quartier_saint-leu01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu02.jpg")} alt="quartier_saint-leu02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu03.jpg")} alt="quartier_saint-leu03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu04.jpg")} alt="quartier_saint-leu04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu05.jpg")} alt="quartier_saint-leu05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/quartier_saint-leu/quartier_saint-leu06.jpg")} alt="quartier_saint-leu06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quartier_Saint_Leu