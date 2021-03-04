import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Villers_sur_Mer2 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Villers_sur-Mer (2) Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/villers-sur-mer2"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"houlgate"} />
          <h1 className="title">Villers-sur-Mer (2)</h1>
          <Next next={"villers-sur-mer1"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/villers-sur-mer2/villers-sur-mer201.jpg")}
              alt="villers-sur-mer201"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer2/villers-sur-mer202.jpg")}
                alt="villers-sur-mer202"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer2/villers-sur-mer203.jpg")}
                alt="villers-sur-mer203"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer2/villers-sur-mer204.jpg")}
                alt="villers-sur-mer204"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Villers_sur_Mer2;
