import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Parc_des_Princes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Parc des Princes Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/parc_des_princes"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Parc des Princes</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/parc_des_princes/parc_des_princes.jpeg")}
              alt="parc_des_princes"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le Parc des Princes est un stade situé au sud-ouest de la ville de
              Paris, dans le 16e arrondissement depuis 1897 et sur le
              périphérique parisien dans sa configuration actuelle, depuis 1971
              près de la commune de Boulogne-Billancourt. Constituant le plus
              important stade français de 1972 à 1998, il est actuellement le
              cinquième plus grand stade français, mais toujours l'un des plus
              anciens et des plus connus, sinon le plus connu de la région
              parisienne avec le non moins fameux Stade de France, situé plus au
              nord, en proche banlieue, à Saint-Denis. Propriété de la Ville de
              Paris, le stade est en concession à la SESE (Société
              d'Exploitation Sports et Événements), une société fondée en 1988,
              devenue filiale de Canal+ en août 1992, cédée une deuxième fois en
              juin 2006 lors de la vente du PSG à un fonds d'investissements
              américain (Colony Capital), à un fonds d'investissements français
              (Butler Capital Partners) et à une banque américaine (Morgan
              Stanley). Le bail de concession du stade est renouvelé en 2014 par
              la Ville de Paris pour une durée de 30 ans à la SESE, désormais
              sous le contrôle de Qatar Sport Investments (QSI) depuis fin mai
              2013. Le premier Parc est inauguré le 18 juillet 1897 sous le nom
              de « Parc des Princes », mais l'actuelle enceinte signée par
              l'architecte Roger Taillibert date de 1972. Son club résident
              actuel est le Paris Saint-Germain depuis 1974. Le RC Paris y a
              séjourné de 1984 à 1990, le Paris FC de 1972 à 1974 puis en
              1978-1979. Ceci concerne l'enceinte de 1972, car avant cette date,
              outre la traditionnelle arrivée du Tour de France sur le vélodrome
              du stade entre 1903 et 1967, le Racing (1932-1966) et le Stade
              français (1945-1968) furent aussi résidents au Parc tout comme
              l'équipe de France de football qui y disputa également de
              nombreuses rencontres, en alternance avec le stade olympique de
              Colombes, et l'équipe de France de rugby à XIII pour ses test
              matchs contre les britanniques, australiens et néo-zélandais. À
              partir de 1972, les équipes de France de football et de rugby à XV
              abandonnèrent définitivement le stade olympique Yves-du-Manoir de
              Colombes et utilisèrent un Parc rénové jusqu'à l'inauguration du
              Stade de France en janvier 1998. De même, de 1974 à 1997, le Parc
              reçut tous les ans la finale de la coupe de France de football
              tout comme la finale du championnat de France de rugby à XV, qui
              jusque-là se déroulait en alternance en province dans les villes
              de Toulouse, Bordeaux et Lyon. Le site est desservi par les
              stations de métro Porte de Saint-Cloud ((M) (9)) et Porte
              d'Auteuil ((M) (10)).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Parc_des_Princes;
