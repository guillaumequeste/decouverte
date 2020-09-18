import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Saint_Jouin_Bruneval_Belvedere extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Baie de Somme Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/saint-jouin-bruneval_belvedere"} />
                <Header />
                <Footer />
                <div className="bodyLittoral">
                    <h1 className="title">Saint-Jouin-Bruneval (belvédère)</h1>
                    <div className="divPhoto">
                        <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere01.jpg")} alt="saint-jouin-bruneval_belvedere01" className="photo"/>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere02.jpg")} alt="saint-jouin-bruneval_belvedere02" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere03.jpg")} alt="saint-jouin-bruneval_belvedere03" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere04.jpg")} alt="saint-jouin-bruneval_belvedere04" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere05.jpg")} alt="saint-jouin-bruneval_belvedere05" className="photo"/>
                        </Zoom>
                    </div>
                    <div className="divPhoto">
                        <Zoom>
                            <img src={require("../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere06.jpg")} alt="saint-jouin-bruneval_belvedere06" className="photo"/>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saint_Jouin_Bruneval_Belvedere