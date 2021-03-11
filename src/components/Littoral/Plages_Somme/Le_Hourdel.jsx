import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Le_Hourdel extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_hourdel"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"cayeux"} />
          <h1 className="title">Le Hourdel</h1>
          <Next next={"saint-valery-sur-somme"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/le_hourdel/le_hourdel01.jpg")}
              alt="le_hourdel01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_hourdel/le_hourdel02.jpg")}
                alt="le_hourdel02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_hourdel/le_hourdel03.jpg")}
                alt="le_hourdel03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_hourdel/le_hourdel04.jpg")}
                alt="le_hourdel04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/le_hourdel/le_hourdel05.jpg")}
                alt="le_hourdel05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Hourdel;
