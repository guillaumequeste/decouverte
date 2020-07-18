import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Cimetiere_des_Canadiens extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/cimetiere_des_canadiens"} />
                <Header />
                <div className="bodyAutres">
                    <h1 className="title">Cimetière des Canadiens</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens01.jpg")} alt="cimetiere_des_canadiens01" className="photo"/>
                    </div>
                    <div className="container">
                        <p>Le cimetière militaire canadien de Dieppe, aussi appelé cimetière des Vertus1, est un cimetière militaire de la Seconde Guerre mondiale, situé à Hautot-sur-Mer, dans le département de la Seine-Maritime, au sud-ouest de Dieppe en Normandie. Dans ce cimetière reposent principalement des soldats canadiens tués lors du raid de Dieppe du 19 août 1942.</p>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens02.jpg")} alt="cimetiere_des_canadiens02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens03.jpg")} alt="cimetiere_des_canadiens03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens04.jpg")} alt="cimetiere_des_canadiens04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens05.jpg")} alt="cimetiere_des_canadiens05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens06.jpg")} alt="cimetiere_des_canadiens06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens07.jpg")} alt="cimetiere_des_canadiens07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/autres/cimetiere_des_canadiens/cimetiere_des_canadiens08.jpg")} alt="cimetiere_des_canadiens08" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cimetiere_des_Canadiens