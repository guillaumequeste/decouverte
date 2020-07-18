import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Aizier extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/aizier"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Aizier</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/aizier/aizier01.jpg")} alt="aizier01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/aizier/aizier02.jpg")} alt="aizier02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/aizier/aizier03.jpg")} alt="aizier03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/aizier/aizier04.jpg")} alt="aizier04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aizier