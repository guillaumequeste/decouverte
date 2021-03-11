import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Berville_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Berville-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/berville-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"honfleur_zone_portuaire"} />
          <h1 className="title">Berville-sur-Mer</h1>
          <Next next={"phare_de_la_roque"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/berville-sur-mer/berville-sur-mer01.jpg")}
              alt="berville-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/berville-sur-mer/berville-sur-mer02.jpg")}
                alt="berville-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/berville-sur-mer/berville-sur-mer03.jpg")}
                alt="berville-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/berville-sur-mer/berville-sur-mer04.jpg")}
                alt="berville-sur-mer04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/berville-sur-mer/berville-sur-mer05.jpg")}
                alt="berville-sur-mer05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/berville-sur-mer/berville-sur-mer06.jpg")}
                alt="berville-sur-mer06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Berville_sur_Mer;
