import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Helmet from '../Helmet'
import CarteLittoral from './CarteLittoral.jsx'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Littoral extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/littoral"} />
                <Header />
                <div className="mapLittoral">
                    <div className="divMapLittoral">
                        <h1 className="titleLittoral">Map Littoral</h1>
                        <CarteLittoral />
                    </div>
                </div>
            </div>
        )
    }
}

export default Littoral