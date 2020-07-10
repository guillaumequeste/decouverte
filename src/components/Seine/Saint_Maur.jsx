import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Saint_Maur extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/saint-maur"} />
                <Header />
                <div className="bodySeine">
                    <h1 className="title">Saint-Maur</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/saint-maur/saint-maur01.jpg")} alt="saint-maur01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-maur/saint-maur02.jpg")} alt="saint-maur02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-maur/saint-maur03.jpg")} alt="saint-maur03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/saint-maur/saint-maur04.jpg")} alt="saint-maur04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Maur