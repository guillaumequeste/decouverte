import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Plan_eau_Canada extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/plan_eau_canada"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Plan d'eau du Canada</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada01.jpg")} alt="plan_eau_canada01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada02.jpg")} alt="plan_eau_canada02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada03.jpg")} alt="plan_eau_canada03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada04.jpg")} alt="plan_eau_canada04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada05.jpg")} alt="plan_eau_canada05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/plan_eau_canada/plan_eau_canada06.jpg")} alt="plan_eau_canada06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plan_eau_Canada