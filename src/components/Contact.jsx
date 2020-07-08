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
                <h2>Contact works</h2>
            </div>
        )
    }
}

export default Contact