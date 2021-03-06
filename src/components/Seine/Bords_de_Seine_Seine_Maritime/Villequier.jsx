import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Villequier extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Villequier Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/villequier"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"vatteville"} />
          <h1 className="title">Villequier</h1>
          <Next next={"caudebec"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/villequier/villequier01.jpg")}
              alt="villequier01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/villequier/villequier02.jpg")}
                alt="villequier02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/villequier/villequier03.jpg")}
                alt="villequier03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/villequier/villequier04.jpg")}
                alt="villequier04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/villequier/villequier05.jpg")}
                alt="villequier05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/villequier/villequier06.jpg")}
                alt="villequier06"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Villequier;
