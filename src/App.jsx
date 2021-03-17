import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom'

const App = () => (
  <>
    <Helmet title={"Accueil Découverte de la Normandie et du Littoral"}
              link={"http://decouverte.guillaumequeste.fr/"} />
    <Header />
    <div className="app">
      <div className="flex">
      <Flip left>
        <Link to="/littoral" className="titleApp mw-100 overflow-hidden">
          <div className="part partLittoral">
            <div className="part2">
              <h1 className="textTitleApp">
                <div className="textTitleApp2">Littoral</div>
              </h1>
            </div>
          </div>
        </Link>
      </Flip>
      <Flip left>
        <Link to="/seine" className="titleApp">
          <div className="part partSeine">
            <div className="part2">
              <h1 className="textTitleApp">
              <div className="textTitleApp2">Boucles de la Seine</div>
              </h1>
            </div>
          </div>
        </Link>
      </Flip>
      <Flip left>
        <Link to="/patrimoine" className="titleApp">
          <div className="part partAutres">
            <div className="part2">
              <h1 className="textTitleApp">
              <div className="textTitleApp2">Patrimoine</div>
              </h1>
            </div>
          </div>
        </Link>
      </Flip>
    </div>
  </div>
  </>
)

export default App;