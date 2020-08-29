import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Musee_Emma_Bovary extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/musee_emma_bovary"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Galerie Bovary - Musée d'automates</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary01.jpg")} alt="musee_emma_bovary01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary02.jpg")} alt="musee_emma_bovary02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary03.jpg")} alt="musee_emma_bovary03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary04.jpg")} alt="musee_emma_bovary04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary05.jpg")} alt="musee_emma_bovary05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/musee_emma_bovary/musee_emma_bovary06.jpg")} alt="musee_emma_bovary06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Musee_Emma_Bovary