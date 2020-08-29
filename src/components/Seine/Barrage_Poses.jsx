import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Barrage_Poses extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/barrage_poses"} />
                <Header />
                <Footer />
                <div className="bodySeine">
                    <h1 className="title">Barrage de Poses</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/seine/barrage_poses/barrage_poses01.jpg")} alt="barrage_poses01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses02.jpg")} alt="barrage_poses02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses03.jpg")} alt="barrage_poses03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses04.jpg")} alt="barrage_poses04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses05.jpg")} alt="barrage_poses05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses06.jpg")} alt="barrage_poses06" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses07.jpg")} alt="barrage_poses07" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses08.jpg")} alt="barrage_poses08" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses09.jpg")} alt="barrage_poses09" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses10.jpg")} alt="barrage_poses10" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/seine/barrage_poses/barrage_poses11.jpg")} alt="barrage_poses11" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Barrage_Poses