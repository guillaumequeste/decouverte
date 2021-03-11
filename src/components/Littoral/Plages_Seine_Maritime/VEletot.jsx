import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class VEletot extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/veletot"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"fecamp"} />
          <h1 className="title">Valleuse d'Eletot</h1>
          <Next next={"saint-pierre-en-port"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/veletot/veletot01.jpg")}
              alt="veletot01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veletot/veletot02.jpg")}
                alt="veletot02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veletot/veletot03.jpg")}
                alt="veletot03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veletot/veletot04.jpg")}
                alt="veletot04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veletot/veletot05.jpg")}
                alt="veletot05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default VEletot;
