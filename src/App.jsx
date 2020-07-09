import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'
import Flip from 'react-reveal/Flip'

const App = () => (
  <>
    <Helmet title={"Accueil Découverte de la Normandie et du Littoral"}
              link={"http://decouverte.guillaumequeste.fr"} />
    <Header />
    <div className="app">
      <div className="flex">
      <Flip left>
        <div className="part partLittoral">
          <h1 className="titleApp">Littoral</h1>
        </div>
      </Flip>
      <Flip left>
        <div className="part partSeine">
          <h1 className="titleApp">Boucles de la Seine</h1>
        </div>
      </Flip>
      <Flip left>
        <div className="part partAutres">
        <h1 className="titleApp">Autres</h1>
        </div>
      </Flip>
      </div>
    </div>
  </>
)

export default App;