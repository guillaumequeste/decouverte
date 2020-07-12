import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Eglise_Saint_Joseph extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/eglise_saint-joseph"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Eglise Saint-Joseph</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph01.jpg")} alt="eglise_saint-joseph01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph02.jpg")} alt="eglise_saint-joseph02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph03.jpg")} alt="eglise_saint-joseph03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph04.jpg")} alt="eglise_saint-joseph04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph05.jpg")} alt="eglise_saint-joseph05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/eglise_saint-joseph/eglise_saint-joseph06.jpg")} alt="eglise_saint-joseph06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Eglise_Saint_Joseph