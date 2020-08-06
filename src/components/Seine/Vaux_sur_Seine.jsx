import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Vaux_sur_Seine extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/vaux-sur-seine"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Vaux-sur-Seine</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine01.jpg")} alt="vaux-sur-seine01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine02.jpg")} alt="vaux-sur-seine02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine03.jpg")} alt="vaux-sur-seine03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine04.jpg")} alt="vaux-sur-seine04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine05.jpg")} alt="vaux-sur-seine05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/vaux-sur-seine/vaux-sur-seine06.jpg")} alt="vaux-sur-seine06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vaux_sur_Seine