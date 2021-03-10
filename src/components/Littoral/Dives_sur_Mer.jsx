import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Dives_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Dives-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/dives-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"port_dives-sur-mer"} />
          <h1 className="title">Dives-sur-Mer</h1>
          <Next next={"houlgate"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/dives-sur-mer/dives-sur-mer01.jpg")}
              alt="dives-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/dives-sur-mer/dives-sur-mer02.jpg")}
                alt="dives-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/dives-sur-mer/dives-sur-mer03.jpg")}
                alt="dives-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/dives-sur-mer/dives-sur-mer04.jpg")}
                alt="dives-sur-mer04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/dives-sur-mer/dives-sur-mer05.jpg")}
                alt="dives-sur-mer05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Dives_sur_Mer;
