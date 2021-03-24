import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Les_Mousseaux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Les Mousseaux Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/les_mousseaux"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"villers-sur-le-roule"} />
          <h1 className="title">Les Mousseaux</h1>
          <Next next={"le_val_d_hazey"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/les_mousseaux/les_mousseaux01.jpg")}
              alt="les_mousseaux01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mousseaux/les_mousseaux02.jpg")}
                alt="les_mousseaux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mousseaux/les_mousseaux03.jpg")}
                alt="les_mousseaux03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Les_Mousseaux;
