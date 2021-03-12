import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Narbonne extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Narbonne Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/narbonne"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <h1 className="title">Narbonne</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/narbonne/narbonne01.jpg")}
              alt="narbonne01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne02.jpg")}
                alt="narbonne02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne03.jpg")}
                alt="narbonne03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne04.jpg")}
                alt="narbonne04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne05.jpg")}
                alt="narbonne05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne06.jpg")}
                alt="narbonne06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne07.jpg")}
                alt="narbonne07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne08.jpg")}
                alt="narbonne08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne09.jpg")}
                alt="narbonne09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne10.jpg")}
                alt="narbonne10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/narbonne/narbonne11.jpg")}
                alt="narbonne11"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Narbonne;
