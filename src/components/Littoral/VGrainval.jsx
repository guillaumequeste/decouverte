import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class VGrainval extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/vgrainval"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Valleuse de Grainval</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/vgrainval/vgrainval01.jpg")} alt="vgrainval01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/vgrainval/vgrainval02.jpg")} alt="vgrainval02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/vgrainval/vgrainval03.jpg")} alt="vgrainval03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/vgrainval/vgrainval04.jpg")} alt="vgrainval04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/vgrainval/vgrainval05.jpg")} alt="vgrainval05" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default VGrainval