import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Les_Petites_Dalles extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/les_petites_dalles"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Les Petites Dalles</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/les_petites_dalles/lpdalles01.jpg")} alt="lpdalles01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles02.jpg")} alt="lpdalles02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles03.jpg")} alt="lpdalles03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles04.jpg")} alt="lpdalles04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles05.jpg")} alt="lpdalles05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles06.jpg")} alt="lpdalles06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles07.jpg")} alt="lpdalles07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles08.jpg")} alt="lpdalles08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles09.jpg")} alt="lpdalles09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles10.jpg")} alt="lpdalles10" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/les_petites_dalles/lpdalles11.jpg")} alt="lpdalles11" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Les_Petites_Dalles