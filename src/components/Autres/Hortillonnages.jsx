import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Hortillonnages extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/hortillonnages"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Hortillonnages d'Amiens</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/hortillonnages/hortillonnages01.jpg")} alt="hortillonnages01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages02.jpg")} alt="hortillonnages02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages03.jpg")} alt="hortillonnages03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages04.jpg")} alt="hortillonnages04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages05.jpg")} alt="hortillonnages05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages06.jpg")} alt="hortillonnages06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/hortillonnages/hortillonnages07.jpg")} alt="hortillonnages07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hortillonnages