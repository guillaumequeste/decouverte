import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Helmet from '../Helmet'

class Littoral extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Littoral Découverte Normandie"}
                        link={"http://decouverte.guillaumequeste.fr/littoral"} />
                <Header />
                <h2>Littoral works</h2>
                <Link to="/ault">Ault</Link>
            </div>
        )
    }
}

export default Littoral