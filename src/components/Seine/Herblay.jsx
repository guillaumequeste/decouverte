import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Herblay extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Herblay Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/herblay"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"panorama_val_d_herblay"} />
          <h1 className="title">Herblay</h1>
          <Next next={"sartrouville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/herblay/herblay01.jpg")}
              alt="herblay01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay02.jpg")}
                alt="herblay02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay03.jpg")}
                alt="herblay03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay04.jpg")}
                alt="herblay04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay05.jpg")}
                alt="herblay05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay06.jpg")}
                alt="herblay06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay07.jpg")}
                alt="herblay07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay08.jpg")}
                alt="herblay08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay09.jpg")}
                alt="herblay09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay10.jpg")}
                alt="herblay10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay11.jpg")}
                alt="herblay11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay12.jpg")}
                alt="herblay12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay13.jpg")}
                alt="herblay13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/herblay/herblay14.jpg")}
                alt="herblay14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Herblay;
