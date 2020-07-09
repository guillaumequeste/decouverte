import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Contact bases React"}
                        link={"http://decouverte.guillaumequeste.fr"} />
                <Header />
                <div className="divContact">
                    <div className="divContact2">
                        <h2>guillaume.queste@laposte.net</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact