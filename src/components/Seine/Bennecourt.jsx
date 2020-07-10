import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Bennecourt extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/bennecourt"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Bennecourt</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/bennecourt/bennecourt01.jpg")} alt="bennecourt01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/bennecourt/bennecourt02.jpg")} alt="bennecourt02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/bennecourt/bennecourt03.jpg")} alt="bennecourt03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/bennecourt/bennecourt04.jpg")} alt="bennecourt04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/bennecourt/bennecourt05.jpg")} alt="bennecourt05" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bennecourt