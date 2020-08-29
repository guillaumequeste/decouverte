import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/">Accueil</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/littoral">Littoral</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/seine">Seine</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/autres">Autres</Link>
                    </div>
                </div>
                <div className="divFooter">
                    <div className="linkFooter">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer