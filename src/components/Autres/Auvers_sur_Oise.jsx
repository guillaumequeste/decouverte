import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Auvers_sur_Oise extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/auvers-sur-oise"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Auvers-sur-Oise</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise01.jpg")} alt="auvers-sur-oise01" className="photoGrosHorloge"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise02.jpg")} alt="auvers-sur-oise02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise03.jpg")} alt="auvers-sur-oise03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise04.jpg")} alt="auvers-sur-oise04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise05.jpg")} alt="auvers-sur-oise05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise06.jpg")} alt="auvers-sur-oise06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise07.jpg")} alt="auvers-sur-oise07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise08.jpg")} alt="auvers-sur-oise08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise09.jpg")} alt="auvers-sur-oise09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/auvers-sur-oise/auvers-sur-oise10.jpg")} alt="auvers-sur-oise10" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auvers_sur_Oise