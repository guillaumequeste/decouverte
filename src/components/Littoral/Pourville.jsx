import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Pourville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pourville"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"varengeville"} />
          <h1 className="title">Pourville-sur-Mer</h1>
          <Next next={"dieppe"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/pourville/pourville01.jpg")}
              alt="pourville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pourville/pourville02.jpg")}
                alt="pourville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pourville/pourville03.jpg")}
                alt="pourville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pourville/pourville04.jpg")}
                alt="pourville04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/pourville/pourville05.jpg")}
                alt="pourville05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pourville;
