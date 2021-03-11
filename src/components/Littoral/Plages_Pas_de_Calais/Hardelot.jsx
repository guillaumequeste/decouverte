import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Hardelot extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/hardelot"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"sainte-cecile_plage"} />
          <h1 className="title">Hardelot-Plage</h1>
          <Next next={"equihen"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/hardelot/hardelot01.jpg")}
              alt="hardelot01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/hardelot/hardelot02.jpg")}
                alt="hardelot02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/hardelot/hardelot03.jpg")}
                alt="hardelot03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Hardelot;
