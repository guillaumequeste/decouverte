import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Deauville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Deauville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/deauville"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"benerville-sur-mer"} />
          <h1 className="title">Deauville</h1>
          <Next next={"trouville-sur-mer2"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/deauville/deauville01.jpg")}
              alt="deauville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/deauville/deauville02.jpg")}
                alt="deauville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/deauville/deauville03.jpg")}
                alt="deauville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/deauville/deauville04.jpg")}
                alt="deauville04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Deauville;
