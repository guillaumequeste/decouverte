import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Cancale2 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cancale (2) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cancale2"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"anse_du_guesclin"} />
          <h1 className="title">Cancale (2)</h1>
          <Next next={"cancale1"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/cancale2/cancale201.jpg")}
              alt="cancale201"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cancale2/cancale202.jpg")}
                alt="cancale202"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cancale2/cancale203.jpg")}
                alt="cancale203"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cancale2/cancale204.jpg")}
                alt="cancale204"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cancale2;
