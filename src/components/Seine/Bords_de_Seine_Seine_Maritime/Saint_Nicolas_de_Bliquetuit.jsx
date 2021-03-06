import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Nicolas_de_Bliquetuit extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Saint-Nicolas-de-Bliquetuit Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/saint-nicolas-de-bliquetuit"
          }
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"caudebec"} />
          <h1 className="title">Saint-Nicolas-de-Bliquetuit</h1>
          <Next next={"notre-dame-de-bliquetuit"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit01.jpg")}
              alt="saint-nicolas-de-bliquetuit01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit02.jpg")}
                alt="saint-nicolas-de-bliquetuit02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit03.jpg")}
                alt="saint-nicolas-de-bliquetuit03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit04.jpg")}
                alt="saint-nicolas-de-bliquetuit04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/saint-nicolas-de-bliquetuit/saint-nicolas-de-bliquetuit05.jpg")}
                alt="saint-nicolas-de-bliquetuit05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Nicolas_de_Bliquetuit;
