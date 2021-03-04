import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Villers_sur_Mer1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Villers_sur-Mer (1) Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/villers-sur-mer1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"villers-sur-mer2"} />
          <h1 className="title">Villers-sur-Mer (1)</h1>
          <Next next={"blonville-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer101.jpg")}
              alt="villers-sur-mer101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer102.jpg")}
                alt="villers-sur-mer102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer103.jpg")}
                alt="villers-sur-mer103"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer104.jpg")}
                alt="villers-sur-mer104"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/villers-sur-mer1/villers-sur-mer105.jpg")}
                alt="villers-sur-mer105"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Villers_sur_Mer1;
