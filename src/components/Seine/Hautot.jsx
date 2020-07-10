import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Hautot extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/hautot"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Hautot-sur-Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/hautot/hautot01.jpg")} alt="hautot01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/hautot/hautot02.jpg")} alt="hautot02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/hautot/hautot03.jpg")} alt="hautot03" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hautot