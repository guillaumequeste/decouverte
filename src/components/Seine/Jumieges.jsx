import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Jumieges extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/jumieges"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Jumièges</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/jumieges/jumieges01.jpg")} alt="jumieges01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges02.jpg")} alt="jumieges02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges03.jpg")} alt="jumieges03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges04.jpg")} alt="jumieges04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges05.jpg")} alt="jumieges05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges06.jpg")} alt="jumieges06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges07.jpg")} alt="jumieges07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/jumieges/jumieges08.jpg")} alt="jumieges08" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumieges