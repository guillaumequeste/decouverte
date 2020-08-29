import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import CarteAutres from './CarteAutres.jsx'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Fade from 'react-reveal/Fade'
import Footer from '../../components/Footer'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Autres extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/littoral"} />
                <Header />
                <Footer />
                <div className="mapAutres">
                    <div className="divMapLittoral">
                        <h1 className="titleLittoral">Map Autres</h1>
                        <Fade bottom>
                            <CarteAutres />
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Autres