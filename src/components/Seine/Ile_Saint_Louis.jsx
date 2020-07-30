import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Ile_Saint_Louis extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/ile_saint_louis"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Ile Saint-Louis</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis01.jpg")} alt="ile_saint-louis01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis02.jpg")} alt="ile_saint-louis02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis03.jpg")} alt="ile_saint-louis03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis04.jpg")} alt="ile_saint-louis04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis05.jpg")} alt="ile_saint-louis05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/ile_saint-louis/ile_saint-louis06.jpg")} alt="ile_saint-louis06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ile_Saint_Louis