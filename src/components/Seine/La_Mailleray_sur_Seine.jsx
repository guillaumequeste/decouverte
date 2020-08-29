import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class La_Mailleray_sur_Seine extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/la_mailleray-sur-seine"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">La Mailleray-sur-Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine01.jpg")} alt="la_mailleray-sur-seine01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine02.jpg")} alt="la_mailleray-sur-seine02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine03.jpg")} alt="la_mailleray-sur-seine03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine04.jpg")} alt="la_mailleray-sur-seine04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine05.jpg")} alt="la_mailleray-sur-seine05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine06.jpg")} alt="la_mailleray-sur-seine06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/la_mailleray-sur-seine/la_mailleray-sur-seine07.jpg")} alt="la_mailleray-sur-seine07" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default La_Mailleray_sur_Seine