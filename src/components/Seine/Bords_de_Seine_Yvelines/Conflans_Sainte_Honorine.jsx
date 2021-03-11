import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Conflans_Sainte_Honorine extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Conflans-Sainte-Honorine Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/conflans-sainte-honorine"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"andresy"} />
          <h1 className="title">Conflans-Sainte-Honorine</h1>
          <Next next={"panorama_val_d_herblay"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine01.jpg")}
              alt="conflans-sainte-honorine01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine02.jpg")}
                alt="conflans-sainte-honorine02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine03.jpg")}
                alt="conflans-sainte-honorine03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine04.jpg")}
                alt="conflans-sainte-honorine04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine05.jpg")}
                alt="conflans-sainte-honorine05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine06.jpg")}
                alt="conflans-sainte-honorine06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine07.jpg")}
                alt="conflans-sainte-honorine07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine08.jpg")}
                alt="conflans-sainte-honorine08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine09.jpg")}
                alt="conflans-sainte-honorine09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine10.jpg")}
                alt="conflans-sainte-honorine10"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Conflans_Sainte_Honorine;
