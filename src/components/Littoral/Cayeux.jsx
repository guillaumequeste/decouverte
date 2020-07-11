import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'

class Cayeux extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/cayeux"} />
                <Header />
                <div className="bodyLittoral">
                    <h1 className="title">Cayeux-sur-Mer</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/cayeux/cayeux01.jpg")} alt="cayeux01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux02.jpg")} alt="cayeux02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux03.jpg")} alt="cayeux03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux04.jpg")} alt="cayeux04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux05.jpg")} alt="cayeux05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux06.jpg")} alt="cayeux06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux07.jpg")} alt="cayeux07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux08.jpg")} alt="cayeux08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux09.jpg")} alt="cayeux09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/cayeux/cayeux10.jpg")} alt="cayeux10" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cayeux