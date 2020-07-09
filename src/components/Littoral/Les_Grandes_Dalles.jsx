import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Les_Grandes_Dalles extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/les_grandes_dalles"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Les Grandes Dalles</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/les_grandes_dalles/lgdalles01.jpg")} alt="lgdalles01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles02.jpg")} alt="lgdalles02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles03.jpg")} alt="lgdalles03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles04.jpg")} alt="lgdalles04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles05.jpg")} alt="lgdalles05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles06.jpg")} alt="lgdalles06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_grandes_dalles/lgdalles07.jpg")} alt="lgdalles07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Les_Grandes_Dalles