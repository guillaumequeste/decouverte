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
                <Link to="/les_grandes_dalles">Les Grandes Dalles</Link>
                <Link to="/les_petites_dalles">Les Petites Dalles</Link>
                <Link to="/merlimont">Merlimont</Link>
                <Link to="/mers">Mers-les-Bains</Link>
                <Link to="/mesnil_val">Mesnil Val Plage</Link>
                <Link to="/pourville">Pourville-sur-Mer</Link>
                <Link to="/puys">Puys</Link>
                <Link to="/quiberville">Quiberville</Link>
                <Link to="/saint-aubin">Saint-Aubin-sur-Mer</Link>
                <Link to="/saint-pierre-en-port">Saint-Pierre-en-Port</Link>
                <Link to="/saint-valery-en-caux">Saint-Valéry-en-Caux</Link>
                <Link to="/saint-valery-sur-somme">Saint-Valéry-sur-Somme</Link>
                <Link to="/sainte-cecile_plage">Sainte-Cécile Plage</Link>
                <Link to="/sainte-marguerite">Sainte-Marguerite-sur-Mer</Link>
                <Link to="/sotteville">Sotteville-sur-Mer</Link>
                <Link to="/stella">Stella-Plage</Link>
                <Link to="/varengeville">Varengeville-sur-Mer</Link>
                <Link to="/veletot">Valleuse d'Eletot</Link>
                <Link to="/veules">Veules-les-Roses</Link>
                <Link to="/veulettes">Veulettes-sur-Mer</Link>
                <Link to="/vgrainval">Valleuse de Grainval</Link>
                <Link to="/wimereux">Wimereux</Link>
                <Link to="/yport">Yport</Link>
            </div>
        )
    }
}

export default Littoral