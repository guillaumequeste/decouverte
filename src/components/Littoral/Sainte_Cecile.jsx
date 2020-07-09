import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Sainte_Cecile extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Ault Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/sainte-cecile_plage"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Sainte-Cécile Plage</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/sainte-cecile/sainte-cecile01.jpg")} alt="sainte-cecile01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/sainte-cecile/sainte-cecile02.jpg")} alt="sainte-cecile02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/sainte-cecile/sainte-cecile03.jpg")} alt="sainte-cecile03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/sainte-cecile/sainte-cecile04.jpg")} alt="sainte-cecile04" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sainte_Cecile