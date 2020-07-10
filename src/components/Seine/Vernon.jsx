import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Vernon extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/vernon"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Vernon</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/vernon/vernon01.jpg")} alt="vernon01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vernon/vernon02.jpg")} alt="vernon02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vernon/vernon03.jpg")} alt="vernon03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vernon/vernon04.jpg")} alt="vernon04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vernon