import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Sandrancourt extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Sandrancourt Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/sandrancourt"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"vetheuil"} />
          <h1 className="title">Sandrancourt</h1>
          <Next next={"guernes"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/sandrancourt/sandrancourt01.jpg")}
              alt="sandrancourt01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sandrancourt/sandrancourt02.jpg")}
                alt="sandrancourt02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sandrancourt/sandrancourt03.jpg")}
                alt="sandrancourt03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Sandrancourt;
