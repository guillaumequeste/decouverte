import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Pont_National extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/pont_national"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Pont National</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/pont_national/pont_national01.jpg")} alt="pont_national01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_national/pont_national02.jpg")} alt="pont_national02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_national/pont_national03.jpg")} alt="pont_national03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/pont_national/pont_national04.jpg")} alt="pont_national04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pont_National