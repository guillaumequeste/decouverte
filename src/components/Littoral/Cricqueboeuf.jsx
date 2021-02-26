import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Cricqueboeuf extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Cricqueboeuf Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/cricqueboeuf"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Cricqueboeuf</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/cricqueboeuf/cricqueboeuf01.jpg")} alt="cricqueboeuf01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cricqueboeuf/cricqueboeuf02.jpg")} alt="cricqueboeuf02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cricqueboeuf/cricqueboeuf03.jpg")} alt="cricqueboeuf03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cricqueboeuf/cricqueboeuf04.jpg")} alt="cricqueboeuf04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cricqueboeuf/cricqueboeuf05.jpg")} alt="cricqueboeuf05" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cricqueboeuf