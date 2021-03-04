import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";

class Tapisserie_Bayeux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Tapisserie Bayeux Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tapisserie_bayeux"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="tititleAutrestle">Tapisserie de Bayeux</h1>
          <div className="divPhoto">
                        <img src={require("../../img/autres/tapisserie_bayeux/tapisserie_bayeux.png")} alt="tapisserie_bayeux" className="photo"/>
                    </div>
          <div className="container">
            <p>
              La tapisserieNote de Bayeux, aussi connue sous le nom de «
              tapisserie de la reine Mathilde », et plus anciennement « Telle du
              Conquest » (pour « toile de la Conquête ») est une broderie
              (anciennement « tapisserie aux points d'aiguille ») du xie siècle
              inscrite depuis 2007 au registre Mémoire du monde par l'UNESCO.
              Elle décrit des faits allant de la fin du règne du roi
              d'Angleterre Édouard le Confesseur en 1064 à la bataille
              d'Hastings en 1066, dont l'enjeu était le trône d'Angleterre,
              contesté à Harold Godwinson par Guillaume, duc de Normandie. Les
              péripéties clés de la bataille, dont l'issue détermina la conquête
              normande de l'Angleterre, y sont détailléesNote 2, mais près de la
              moitié des scènes relatent des épisodes antérieurs à l'invasion
              elle-mêmeNote 3. Elle semble avoir été commandée par Odon de
              Bayeux, le demi-frère de Guillaume et réalisée au cours des années
              qui ont suivi la conquête. Bien que présentant les événements sous
              un jour très favorable à Guillaume le Conquérant, au point d'être
              considérée parfois comme une œuvre de propagande, elle a une
              valeur documentaire inestimable pour la connaissance du xie siècle
              normand et anglais. Elle renseigne sur les vêtements, les
              châteaux, les navires et les conditions de vie de cette époque. De
              façon générale, elle constitue un des rares exemples de l'art
              roman profane. Conservée jusqu'à la fin du XVIIIe siècle dans le
              Trésor de la cathédrale de Bayeux, elle échappa de peu à la
              destruction lors de la Révolution française. Elle est aujourd'hui
              présentée au public au centre Guillaume le Conquérant qui lui est
              entièrement dédié.
            </p>
            <p className="lienSiteOfficiel">Site officiel : <a href="https://www.bayeuxmuseum.com/la-tapisserie-de-bayeux/" target="_blank">Tapisserie de Bayeux</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tapisserie_Bayeux;
