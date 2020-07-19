import React, { Component } from 'react'
import Header from './Header'
import Helmet from './Helmet'
import { Link } from "react-router-dom"

class NotFound extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"NotFound bases React"}
                        link={"http://decouverte.guillaumequeste.fr/notfound"} />
                <Header />
                <div className="notFound">
                    <div className="divNotFound">
                        <div>
                            <img src={require("../img/exit.png")} alt="exit" className="imgExit"></img>
                        </div>
                        <div>
                        <Link to="/">
                            <img src={require("../img/door.png")} alt="door" className="imgDoor"></img>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound