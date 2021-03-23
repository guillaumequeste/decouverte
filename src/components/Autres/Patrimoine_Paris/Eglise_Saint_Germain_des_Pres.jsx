import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Eglise_Saint_Germain_des_Pres extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Arc de Triomphe Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/eglise_saint-germmain-des-pres"
          }
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Eglise Saint-Germain-des-Prés</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres01.jpg")}
              alt="eglise_saint_germain_des_pres01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’abbaye Saint-Germain-des-Prés (Sancti Germani de pratis), qui
              comprend l'actuelle église Saint-Germain-des-Prés, est une
              ancienne abbaye bénédictine de Paris (France), située 3 place
              Saint-Germain-des-Prés dans l'actuel 6e arrondissement1. Fondée au
              milieu du vie siècle sous le nom de basilique Sainte-Croix et
              Saint-Vincent par le roi mérovingien Childebert Ier et saint
              Germain, évêque de Paris, elle doit son nom actuel à ce dernier.
              C'est une abbaye royale, qui bénéficie donc d'une exemption et est
              directement soumise au pape. La première église abbatiale est
              consacrée le 23 avril 558 à la sainte Croix et à saint Vincent de
              Saragosse. Cette basilique possède des colonnes de marbre, un
              plafond lambrissé et des fenêtres vitrées. Elle est nécropole
              royale jusqu'à la création de celle de la basilique Saint-Denis,
              et les reliques de saint Germain y sont vénérées, mais plus aucune
              sépulture médiévale ne subsiste à ce jour, et les reliques se sont
              considérablement amoindries. L'église est rebâtie par l'abbé
              Morard, à partir de la fin du xe siècle. Les quatre premiers
              niveaux du clocher occidental, la nef et le transept de l'église
              actuelle remontent à cette époque, et l'on peut notamment y voir
              d'intéressants chapiteaux d'autour de l'an mil. Le chœur actuel
              est construit au milieu du xiie siècle dans le style gothique
              primitif, et consacré par le pape Alexandre III le 21 avril 1163.
              C'est l'un des premiers édifices gothiques, qui contribue à la
              diffusion de ce nouveau style et est de toute première importance
              sur le plan archéologique. Les bâtiments conventuels sont
              reconstruits successivement au cours du xiiie siècle, et une
              chapelle abbatiale inspirée par la Sainte-Chapelle est édifiée par
              l'architecte Pierre de Montreuil et dédiée à la Vierge ;
              l'ensemble est démoli au début du xixe siècle. L'instauration de
              la réforme mauriste en 1630 fait de l'abbaye un centre de
              l'érudition d'un grand rayonnement. Mais la Révolution impose la
              suppression de la totalité des abbayes, et pour
              Saint-Germain-des-Prés, la fin survient le 13 février 1792.
              L'église devient bientôt une manufacture de salpêtre, et le culte
              n'y est rétabli que le 29 avril 1803. Depuis lors, l'église est
              exclusivement paroissiale. Entre 1821 et 1854, l'église, mise à
              rude épreuve sous la période révolutionnaire, est restaurée par
              les architectes Étienne-Hippolyte Godde et Victor Baltard. Elle
              est classée aux monuments historiques par liste de 18622, et les
              vestiges de l'abbaye sont inscrits par arrêté du 26 octobre 19533.
              L'église Saint-Germain-des-Prés est la plus ancienne des grandes
              églises parisiennes, et au centre de la vie d'une paroisse vivante
              et dynamique.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.eglise-saintgermaindespres.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eglise Saint-Germain-des-Prés
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres02.jpg")}
                alt="eglise_saint_germain_des_pres02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres03.jpg")}
                alt="eglise_saint_germain_des_pres03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres04.jpg")}
                alt="eglise_saint_germain_des_pres04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres05.jpg")}
                alt="eglise_saint_germain_des_pres05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint_germain_des_pres/eglise_saint_germain_des_pres06.jpg")}
                alt="eglise_saint_germain_des_pres06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Eglise_Saint_Germain_des_Pres;
