import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Blonville_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Blonville-suur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/blonville-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"villers-sur-mer1"} />
          <h1 className="title">Blonville-sur-Mer</h1>
          <Next next={"villerville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer01.jpg")}
              alt="blonville-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer02.jpg")}
                alt="blonville-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer03.jpg")}
                alt="blonville-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer04.jpg")}
                alt="blonville-sur-mer04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer05.jpg")}
                alt="blonville-sur-mer05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/blonville-sur-mer/blonville-sur-mer06.jpg")}
                alt="blonville-sur-mer06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Blonville_sur_Mer;
