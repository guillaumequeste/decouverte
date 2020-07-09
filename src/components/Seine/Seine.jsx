import React, { Component } from 'react'
import Header from '../Header'
import Helmet from '../Helmet'

class Seine extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Seine bases React"}
                        link={"http://decouverte.guillaumequeste.fr"} />
                <Header />
                <h2>En construction</h2>
            </div>
        )
    }
}

export default Seine