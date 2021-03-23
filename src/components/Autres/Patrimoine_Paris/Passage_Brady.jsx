import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Passage_Brady extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Passage Brady Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/passage_brady"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Passage Brady</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/passage_brady/passage_brady01.jpg")}
              alt="passage_brady"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le passage Brady est un des deux passages couverts du 10e
              arrondissement de Paris. Il a été construit en 1828. Les travaux
              du passage Brady ont commencé en 1825 ; les maitres d'ouvrage
              étaient M. Briavoine, un négociant et M. Brady, un commerçant. Il
              a été ouvert le 15 avril 1828. Le projet initial prévoyait en 1827
              un « passage couvert dans toute sa longueur » abritant 113
              magasins avec logements au-dessus, mais la ligne droite que devait
              former le passage ne put être continuée jusqu'à son débouché dans
              la rue du Faubourg-Saint-Martin ; les constructeurs ont placé au
              point de section une rotonde, actuellement boulevard de
              Strasbourg. Initialement, il reliait la rue du
              Faubourg-Saint-Denis à la rue du Faubourg-Saint-Martin, avant
              d'être scindé en deux par la percée du boulevard de Strasbourg en
              1852. Ce passage couvert fait l’objet d’une inscription au titre
              des monuments historiques depuis le 7 mars 20021. Seule la partie
              débouchant au no 46 de la rue du Faubourg-Saint-Denis est couverte
              d'une verrière. On y trouve de nombreux restaurants et coiffeurs
              indo-pakistanais, mauriciens et réunionnais. L'autre partie du
              passage débute au no 43 de la rue du Faubourg-Saint-Martin. Elle
              se caractérise par la présence de loueurs de costumes de fêtes.
              Depuis la percée du boulevard de Strasbourg, les deux parties du
              passage Brady sont devenues des entités indépendantes.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100266/Passage-Brady"
                target="_blank"
                rel="noopener noreferrer"
              >
                Passage Brady
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Passage_Brady;
