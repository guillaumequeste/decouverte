import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Heurteauville extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/heurteauville"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Heurteauville</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/heurteauville/heurteauville01.jpg")} alt="heurteauville01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/heurteauville/heurteauville02.jpg")} alt="heurteauville02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/heurteauville/heurteauville03.jpg")} alt="heurteauville03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/heurteauville/heurteauville04.jpg")} alt="heurteauville04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/heurteauville/heurteauville05.jpg")} alt="heurteauville05" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Heurteauville