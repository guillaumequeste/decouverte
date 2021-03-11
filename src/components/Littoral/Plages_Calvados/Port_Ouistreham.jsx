import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Port_Ouistreham extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Port de Ouistreham Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/port_ouistreham"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"plage_ouistreham"} />
          <h1 className="title">Port de Ouistreham</h1>
          <Next next={"pointe_ouistreham"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/port_ouistreham/port_ouistreham01.jpg")}
              alt="port_ouistreham01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/port_ouistreham/port_ouistreham02.jpg")}
                alt="port_ouistreham02"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Port_Ouistreham;
