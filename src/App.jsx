import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Découverte de la Normandie et du Littoral"}
              link={"http://decouverte.guillaumequeste.fr"} />
    <Header />
    <div className="app">
      <div className="flex">
      <Flip left>
        <div className="part partLittoral">
          <Link to="/littoral" className="titleApp"><h1>Littoral</h1></Link>
        </div>
      </Flip>
      <Flip left>
        <div className="part partSeine">
          <Link to="/seine" className="titleApp"><h1>Boucles de la Seine</h1></Link>
        </div>
      </Flip>
      <Flip left>
        <div className="part partAutres">
          <Link to="/autres" className="titleApp"><h1>Autres</h1></Link>
        </div>
      </Flip>
      </div>
    </div>
  </>
)

export default App;