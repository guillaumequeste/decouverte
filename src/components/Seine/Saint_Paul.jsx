import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Saint_Paul extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/saint-paul"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Saint-Paul</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/saint-paul/saint-paul01.jpg")} alt="saint-paul01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul02.jpg")} alt="saint-paul02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul03.jpg")} alt="saint-paul03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul04.jpg")} alt="saint-paul04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul05.jpg")} alt="saint-paul05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul06.jpg")} alt="saint-paul06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-paul/saint-paul07.jpg")} alt="saint-paul07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Paul