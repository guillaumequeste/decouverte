import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Notre_Dame extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/notre_dame"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Notre Dame</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/notre_dame/notre_dame01.jpg")} alt="notre_dame01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/notre_dame/notre_dame02.jpg")} alt="notre_dame02" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notre_Dame