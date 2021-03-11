import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Sartrouville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Sartrouville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/sartrouville"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"herblay"} />
          <h1 className="title">Sartrouville</h1>
          <Next next={"montesson"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/sartrouville/sartrouville01.jpg")}
              alt="sartrouville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville02.jpg")}
                alt="sartrouville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville03.jpg")}
                alt="sartrouville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville04.jpg")}
                alt="sartrouville04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville05.jpg")}
                alt="sartrouville05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville06.jpg")}
                alt="sartrouville06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville07.jpg")}
                alt="sartrouville07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville08.jpg")}
                alt="sartrouville08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/sartrouville/sartrouville09.jpg")}
                alt="sartrouville09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Sartrouville;
