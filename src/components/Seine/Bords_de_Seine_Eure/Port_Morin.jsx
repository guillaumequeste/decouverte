import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Port_Morin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Port Morin Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/port_morin"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"les_andelys"} />
          <h1 className="title">Port Morin</h1>
          <Next next={"tosny"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/port_morin/port_morin01.jpg")}
              alt="port_morin01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin02.jpg")}
                alt="port_morin02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin03.jpg")}
                alt="port_morin03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin04.jpg")}
                alt="port_morin04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin05.jpg")}
                alt="port_morin05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin06.jpg")}
                alt="port_morin06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_morin/port_morin07.jpg")}
                alt="port_morin07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Port_Morin;
