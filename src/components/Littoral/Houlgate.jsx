import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Houlgate extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Houlgate Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/houlgate"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <h1 className="title">Houlgate</h1>
          <Next next={"villers-sur-mer2"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/houlgate/houlgate01.jpg")}
              alt="houlgate01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate02.jpg")}
                alt="houlgate02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate03.jpg")}
                alt="houlgate03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate04.jpg")}
                alt="houlgate04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate05.jpg")}
                alt="houlgate05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate06.jpg")}
                alt="houlgate06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate07.jpg")}
                alt="houlgate07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate08.jpg")}
                alt="houlgate08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate09.jpg")}
                alt="houlgate09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate10.jpg")}
                alt="houlgate10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate11.jpg")}
                alt="houlgate11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/houlgate/houlgate12.jpg")}
                alt="houlgate12"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Houlgate;
