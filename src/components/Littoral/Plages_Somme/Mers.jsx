import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Mers extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/mers"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"le_treport"} />
          <h1 className="title">Mers-les-Bains</h1>
          <Next next={"le_bois_de_cise"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/mers/mers01.jpg")}
              alt="mers01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers02.jpg")}
                alt="mers02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers03.jpg")}
                alt="mers03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers04.jpg")}
                alt="mers04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers05.jpg")}
                alt="mers05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers06.jpg")}
                alt="mers06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers07.jpg")}
                alt="mers07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers08.jpg")}
                alt="mers08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers09.jpg")}
                alt="mers09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers10.jpg")}
                alt="mers10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/mers/mers11.jpg")}
                alt="mers11"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Mers;
