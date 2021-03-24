import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Les_Mureaux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Les Mureaux Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/les_mureaux"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"meulan-en-yvelines"} />
          <h1 className="title">Les Mureaux</h1>
          <Next next={"vaux-sur-seine"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/les_mureaux/les_mureaux01.jpg")}
              alt="les_mureaux01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mureaux/les_mureaux02.jpg")}
                alt="les_mureaux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mureaux/les_mureaux03.jpg")}
                alt="les_mureaux03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mureaux/les_mureaux04.jpg")}
                alt="les_mureaux04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/les_mureaux/les_mureaux05.jpg")}
                alt="les_mureaux05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Les_Mureaux;
