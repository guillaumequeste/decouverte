import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Port_Mort extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/port-mort"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"le_val_d_hazey"} />
          <h1 className="title">Port-Mort</h1>
          <Next next={"notre-dame-de-l_isle"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/port-mort/port-mort01.jpg")}
              alt="port-mort01"
              className="photo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Port_Mort;
