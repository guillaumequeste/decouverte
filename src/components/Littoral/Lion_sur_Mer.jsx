import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Lion_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Lion-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/lion-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <h1 className="title">Lion-sur-Mer</h1>
          <Next next={"hermanville-sur-mer"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/lion-sur-mer/lion-sur-mer01.jpg")}
              alt="lion-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer02.jpg")}
                alt="lion-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer03.jpg")}
                alt="lion-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer04.jpg")}
                alt="lion-sur-mer04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer05.jpg")}
                alt="lion-sur-mer05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer06.jpg")}
                alt="lion-sur-mer06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/lion-sur-mer/lion-sur-mer07.jpg")}
                alt="lion-sur-mer07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Lion_sur_Mer;
