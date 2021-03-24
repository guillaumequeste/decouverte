import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Musee_Beaux_Arts extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Musée des Beaux Arts de Rouen Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/muse_beaux_arts"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Musée des Beaux Arts de Rouen</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/musee_beaux_arts/musee_beaux_arts01.jpg")}
              alt="musee_beaux_arts01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le musée des Beaux-Arts de Rouen est l'un des principaux musées de
              région de France. Il se situe au cœur de la ville, face au square
              Verdrel, dans un bâtiment dont la rénovation complète s'est
              achevée en 1994. Le musée des Beaux-Arts de Rouen a été créé par
              le décret Chaptal de 1801 sous le Consulat de Napoléon Bonaparte.
              Modeste au départ, ses collections se sont considérablement
              enrichies au cours du xixe siècle. Cité en 1878 comme « le plus
              complet après celui de Paris »2, il compte aujourd'hui encore une
              collection d'une richesse et d'une ampleur considérées comme
              exceptionnelles. Le cabinet d'arts graphiques et ses huit mille
              œuvres, notamment, bénéficie d'une réputation internationale. Des
              ressources en ligne – dossiers pédagogiques et livret jeune public
              – aident à préparer sa visite. Ses collections permanentes se
              déploient sur soixante salles3, le xviie et le xixe siècle y étant
              particulièrement bien représentés. En plus de la présentation de
              ses collections le musée des Beaux-Arts organise plusieurs
              expositions par an. Certaines ont un retentissement international
              et participent à sa réputation. En 2006, par exemple, le musée a
              présenté huit expositions temporaires, parmi lesquelles les «
              Chefs-d'œuvre des musées de Florence » a fait passer le nombre de
              visiteurs de 87 000 à 314 6883. En 2010, dans le cadre du festival
              Normandie Impressionniste 2010, l'exposition « Une ville pour
              l'impressionnisme : Monet, Pissarro et Gauguin à Rouen » a attiré
              plus de 240 000 visiteurs, ce qui en a fait le clou du festival.
              En 2007, le budget d'acquisition s'élève à 150 000 euros par an3.
              Le musée reçoit également quelques fonds du mécénat. Il a reçu le
              label musée de France et son directeur actuel est Sylvain Amic.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a href="https://mbarouen.fr/fr" target="_blank" rel="noopener noreferrer">
                Musée des Beaux Arts
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Musee_Beaux_Arts;
