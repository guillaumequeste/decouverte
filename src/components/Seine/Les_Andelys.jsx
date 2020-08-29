import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Les_Andelys extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/les_andelys"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Les Andelys</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/les_andelys/les_andelys01.jpg")} alt="les_andelys01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys02.jpg")} alt="les_andelys02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys03.jpg")} alt="les_andelys03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys04.jpg")} alt="les_andelys04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys05.jpg")} alt="les_andelys05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys06.jpg")} alt="les_andelys06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/les_andelys/les_andelys07.jpg")} alt="les_andelys07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Les_Andelys