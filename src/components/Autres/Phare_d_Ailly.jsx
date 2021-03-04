import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Phare_d_Ailly extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/phare_d_ailly"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="titleAutres">Phare d'Ailly</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/phare_d_ailly/phare_d_ailly01.jpg")} alt="phare_d_ailly01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/phare_d_ailly/phare_d_ailly02.jpg")} alt="phare_d_ailly02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Phare_d_Ailly