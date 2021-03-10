import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Port_Dives_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Port de Dives-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/port_dives-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"cabourg1"} />
          <h1 className="title">Port de Dives-sur-Mer</h1>
          <Next next={"dives-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/port_dives-sur-mer/port_dives-sur-mer01.jpg")}
              alt="port_dives-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/port_dives-sur-mer/port_dives-sur-mer02.jpg")}
                alt="port_dives-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Port_Dives_sur_Mer;
