import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Le_Bec_Hellouin extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/le_bec-hellouin"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Le Bec-Hellouin</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin01.jpg")} alt="le_bec-hellouin01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin02.jpg")} alt="le_bec-hellouin02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin03.jpg")} alt="le_bec-hellouin03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin04.jpg")} alt="le_bec-hellouin04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin05.jpg")} alt="le_bec-hellouin05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin06.jpg")} alt="le_bec-hellouin06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin07.jpg")} alt="le_bec-hellouin07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin08.jpg")} alt="le_bec-hellouin08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/le_bec-hellouin/le_bec-hellouin09.jpg")} alt="le_bec-hellouin09" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Le_Bec_Hellouin