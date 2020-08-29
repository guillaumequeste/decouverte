import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Biomarine extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/biomarine"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Biomarine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/biomarine/biomarine01.jpg")} alt="biomarine01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/biomarine/biomarine02.jpg")} alt="biomarine02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/biomarine/biomarine03.jpg")} alt="biomarine03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/biomarine/biomarine04.jpg")} alt="biomarine04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/biomarine/biomarine05.jpg")} alt="biomarine05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/biomarine/biomarine06.jpg")} alt="biomarine06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Biomarine