import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'

class NotFound extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"NotFound bases React"}
                        link={"http://decouverte.guillaumequeste.fr"} />
                <Header />
                <h2>NotFound works</h2>
            </div>
        )
    }
}

export default NotFound