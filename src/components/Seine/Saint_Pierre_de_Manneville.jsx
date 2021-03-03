import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Saint_Pierre_de_Manneville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/saint-pierre-de-manneville"
          }
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"duclair"} />
          <h1 className="title">Saint-Pierre-de-Manneville</h1>
          <Next next={"sahurs"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville01.jpg")}
              alt="saint-pierre-de-manneville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville02.jpg")}
                alt="saint-pierre-de-manneville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville03.jpg")}
                alt="saint-pierre-de-manneville03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/saint-pierre-de-manneville/saint-pierre-de-manneville04.jpg")}
                alt="saint-pierre-de-manneville04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Pierre_de_Manneville;
