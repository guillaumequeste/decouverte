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
        <Link to="/littoral" className="titleApp">
          <div className="part partLittoral">
            <div className="part2">
              <h1>Littoral</h1>
            </div>
          </div>
        </Link>
      </Flip>
      <Flip left>
        <Link to="/seine" className="titleApp">
          <div className="part partSeine">
            <div className="part2">
              <h1>Boucles de la Seine</h1>
            </div>
          </div>
        </Link>
      </Flip>
      <Flip left>
        <Link to="/autres" className="titleApp">
          <div className="part partAutres">
            <div className="part2">
              <h1>Autres</h1>
            </div>
          </div>
        </Link>
      </Flip>
    </div>
  </div>
  </>
)

export default App;