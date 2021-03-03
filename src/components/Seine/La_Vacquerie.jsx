import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class La_Vacquerie extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/la_vacquerie"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"aizier"} />
          <h1 className="title">La Vacquerie</h1>
          <Next next={"vatteville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/la_vacquerie/la_vacquerie01.jpg")}
              alt="la_vacquerie01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/la_vacquerie/la_vacquerie02.jpg")}
                alt="la_vacquerie02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/la_vacquerie/la_vacquerie03.jpg")}
                alt="la_vacquerie03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/la_vacquerie/la_vacquerie04.jpg")}
                alt="la_vacquerie04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default La_Vacquerie;
