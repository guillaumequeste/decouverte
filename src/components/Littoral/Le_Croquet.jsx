import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Le_Croquet extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/le_croquet"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Le Croquet</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/le_croquet/le_croquet01.jpg")} alt="le_croquet01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_croquet/le_croquet02.jpg")} alt="le_croquet02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_croquet/le_croquet03.jpg")} alt="le_croquet03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_croquet/le_croquet04.jpg")} alt="le_croquet04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/le_croquet/le_croquet05.jpg")} alt="le_croquet05" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Le_Croquet