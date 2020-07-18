import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'
import CarteSeine from './CarteSeine.jsx'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Fade from 'react-reveal/Fade'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class Littoral extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/seine"} />
                <Header />
                <div className="mapSeine">
                    <div className="divMapLittoral">
                        <h1 className="titleLittoral">Map Seine</h1>
                        <Fade right>
                            <CarteSeine />
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Littoral