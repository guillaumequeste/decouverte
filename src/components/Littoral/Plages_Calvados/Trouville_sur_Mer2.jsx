import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Trouville_sur_Mer2 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Trouville-sur-Mer 2 Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/trouville-sur-mer2"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"deauville"} />
          <h1 className="title">Trouville-sur-Mer 2</h1>
          <Next next={"trouville-sur-mer1"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer201.jpg")}
              alt="trouville-sur-mer201"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer202.jpg")}
                alt="trouville-sur-mer202"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer203.jpg")}
                alt="trouville-sur-mer203"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer204.jpg")}
                alt="trouville-sur-mer204"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer205.jpg")}
                alt="trouville-sur-mer205"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Trouville_sur_Mer2;
