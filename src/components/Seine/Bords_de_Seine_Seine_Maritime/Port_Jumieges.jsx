import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Port_Jumieges extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Port Jumièges Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/port_jumieges"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"heurteauville"} />
          <h1 className="title">Port Jumièges</h1>
          <Next next={"jumieges"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/port_jumieges/port_jumieges01.jpg")}
              alt="port_jumieges01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges02.jpg")}
                alt="port_jumieges02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges03.jpg")}
                alt="port_jumieges03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges04.jpg")}
                alt="port_jumieges04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges05.jpg")}
                alt="port_jumieges05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges06.jpg")}
                alt="port_jumieges06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/port_jumieges/port_jumieges07.jpg")}
                alt="port_jumieges07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Port_Jumieges;
