import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Les_Petites_Dalles extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/les_petites_dalles"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Les Petites Dalles</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/les_petites_dalles/lpdalles01.jpg")} alt="lgdalles01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles02.jpg")} alt="lgdalles02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles03.jpg")} alt="lgdalles03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles04.jpg")} alt="lgdalles04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles05.jpg")} alt="lgdalles05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles06.jpg")} alt="lgdalles06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles07.jpg")} alt="lgdalles07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles08.jpg")} alt="lgdalles08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles09.jpg")} alt="lgdalles09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles10.jpg")} alt="lgdalles10" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles11.jpg")} alt="lgdalles11" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Les_Petites_Dalles