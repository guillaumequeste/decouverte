import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import CarteSeine from './CarteSeine.jsx'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Littoral extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/seine"} />
                <Header />
                <div className="mapLittoral">
                    <div className="divMapLittoral">
                        <h1 className="titleLittoral">Map Seine</h1>
                        <CarteSeine />
                    </div>
                </div>
            </div>
        )
    }
}

export default Littoral