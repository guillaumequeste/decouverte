import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Puys extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Puys Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/puys"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"dieppe"} />
          <h1 className="title">Puys</h1>
          <Next next={"belleville-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/puys/puys01.jpg")}
              alt="puys01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/puys/puys02.jpg")}
                alt="puys02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/puys/puys03.jpg")}
                alt="puys03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/puys/puys04.jpg")}
                alt="puys04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/puys/puys05.jpg")}
                alt="puys05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/puys/puys06.jpg")}
                alt="puys06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Puys;
