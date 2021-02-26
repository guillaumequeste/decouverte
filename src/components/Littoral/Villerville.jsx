import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Villerville extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Villerville Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/villerville"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Villerville</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/villerville/villerville01.jpg")} alt="villerville01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/villerville/villerville02.jpg")} alt="villerville02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/villerville/villerville03.jpg")} alt="villerville03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/villerville/villerville04.jpg")} alt="villerville04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/villerville/villerville05.jpg")} alt="villerville05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/villerville/villerville06.jpg")} alt="villerville06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Villerville