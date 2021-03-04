import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Pain_de_Sucre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pain de Sucre Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pain_de_sucre"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_havre"} />
          <h1 className="title">Pain de Sucre</h1>
          <Next next={"sainte-adresse"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/pain_de_sucre/pain_de_sucre01.jpg")}
              alt="pain_de_sucre01"
              className="photoGrosHorloge"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pain_de_sucre/pain_de_sucre02.jpg")}
                alt="pain_de_sucre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pain_de_sucre/pain_de_sucre03.jpg")}
                alt="pain_de_sucre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pain_de_sucre/pain_de_sucre04.jpg")}
                alt="pain_de_sucre04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pain_de_Sucre;
