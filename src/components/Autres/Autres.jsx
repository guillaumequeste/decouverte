import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import CarteAutres from './CarteAutres.jsx'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Autres extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/littoral"} />
                <Header />
                <div className="mapAutres">
                    <div className="divMapLittoral">
                        <h1 className="titleLittoral">Map Autres</h1>
                        <CarteAutres />
                    </div>
                </div>
            </div>
        )
    }
}

export default Autres