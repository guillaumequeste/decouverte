import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'

const App = () => (
  <>
    <Helmet title={"Accueil Découverte de la Normandie et du Littoral"}
              link={"http://decouverte.guillaumequeste.fr"} />
    <Header />
    <div className="app">
      <div className="flex">
        <div className="part">
          <h1 className="titleApp">Littoral</h1>
        </div>
        <div className="part">
          <h1 className="titleApp">Boucles de la Seine</h1>
        </div>
        <div className="part">
        <h1 className="titleApp">Autres</h1>
        </div>
      </div>
    </div>
  </>
)

export default App;