import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'
import Footer from './Footer'

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://decouverte.guillaumequeste.fr"} />
                <Header />
                <div className="divContact">
                    <div className="divContact2">
                        <h5>guillaume.queste@laposte.net</h5>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact