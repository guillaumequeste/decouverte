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
                <Link to="/baie_de_somme">Baie de Somme</Link>
                <Link to="/belleville-sur-mer">Belleville-sur-Mer</Link>
                <Link to="/berneval">Berneval</Link>
                <Link to="/boulogne">Boulogne-sur-Mer</Link>
                <Link to="/criel">Criel-sur-Mer</Link>
                <Link to="/dieppe">Dieppe</Link>
                <Link to="/equihen">Equihen-Plage</Link>
                <Link to="/etaples">Etaples</Link>
                <Link to="/etretat">Etretat</Link>
                <Link to="/fecamp">Fécamp</Link>
                <Link to="/hardelot">Hardelot-Plage</Link>
                <Link to="/le_crotoy">Le Crotoy</Link>
                <Link to="/le_hourdel">Le Hourdel</Link>
                <Link to="/le_treport">Le Tréport</Link>
            </div>
        )
    }
}

export default Littoral