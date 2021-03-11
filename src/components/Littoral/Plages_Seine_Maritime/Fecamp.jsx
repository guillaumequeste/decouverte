import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Fecamp extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/fecamp"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"vgrainval"} />
          <h1 className="title">Fécamp</h1>
          <Next next={"veletot"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/fecamp/fecamp01.jpg")}
              alt="fecamp01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp02.jpg")}
                alt="fecamp02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp03.jpg")}
                alt="fecamp03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp04.jpg")}
                alt="fecamp04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp05.jpg")}
                alt="fecamp05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp06.jpg")}
                alt="fecamp06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp07.jpg")}
                alt="fecamp07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp08.jpg")}
                alt="fecamp08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp09.jpg")}
                alt="fecamp09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp10.jpg")}
                alt="fecamp10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp11.jpg")}
                alt="fecamp11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp12.jpg")}
                alt="fecamp12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp13.jpg")}
                alt="fecamp13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp14.jpg")}
                alt="fecamp14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp15.jpg")}
                alt="fecamp15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp16.jpg")}
                alt="fecamp16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp17.jpg")}
                alt="fecamp17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp18.jpg")}
                alt="fecamp18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp19.jpg")}
                alt="fecamp19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp20.jpg")}
                alt="fecamp20"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/fecamp/fecamp21.jpg")}
                alt="fecamp21"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Fecamp;
