import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Jumieges extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/jumieges"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"port_jumieges"} />
          <h1 className="title">Jumièges</h1>
          <Next next={"le_mesnil-sous-jumieges"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/jumieges/jumieges01.jpg")}
              alt="jumieges01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges02.jpg")}
                alt="jumieges02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges03.jpg")}
                alt="jumieges03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges04.jpg")}
                alt="jumieges04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges05.jpg")}
                alt="jumieges05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges06.jpg")}
                alt="jumieges06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges07.jpg")}
                alt="jumieges07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/jumieges/jumieges08.jpg")}
                alt="jumieges08"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumieges;
