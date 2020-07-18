import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Lillebonne extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/lillebonne"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Théâtre romain de Lillebonne</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/lillebonne/lillebonne01.jpg")} alt="lillebonne01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/lillebonne/lillebonne02.jpg")} alt="lillebonne02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/lillebonne/lillebonne03.jpg")} alt="lillebonne03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lillebonne