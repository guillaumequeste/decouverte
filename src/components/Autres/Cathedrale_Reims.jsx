import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import Zoom from 'react-reveal/Zoom'
import Footer from '../../components/Footer'

class Cathedrale_Reims extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Cathédrale Reims Découverte de la Normandie et du Littoral"}
                        link={"http://decouverte.guillaumequeste.fr/cathedrale_reims"} />
                <Header />
                <Footer />
                <div className="bodyAutres">
                    <h1 className="title">Cathédrale Notre-Dame de Reims</h1>
                    
                </div>
            </div>
        )
    }
}

export default Cathedrale_Reims