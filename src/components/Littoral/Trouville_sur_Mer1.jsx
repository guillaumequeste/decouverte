import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Trouville_sur_Mer1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Trouville-sur-Mer 1 Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/trouville-sur-mer1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"trouville-sur-mer2"} />
          <h1 className="title">Trouville-sur-Mer 1</h1>
          <Next next={"villerville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer101.jpg")}
              alt="trouville-sur-mer101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer102.jpg")}
                alt="trouville-sur-mer102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer103.jpg")}
                alt="trouville-sur-mer103"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer104.jpg")}
                alt="trouville-sur-mer104"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/trouville-sur-mer1/trouville-sur-mer105.jpg")}
                alt="trouville-sur-mer105"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Trouville_sur_Mer1;
