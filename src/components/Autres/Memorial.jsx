import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Memorial extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/memorial"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Mémorial du 19 août 1942</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/memorial/memorial01.jpg")} alt="memorial01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/memorial/memorial02.jpg")} alt="memorial02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Memorial