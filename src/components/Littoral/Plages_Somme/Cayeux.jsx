import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Cayeux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Cayeux-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/cayeux"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"ault"} />
          <h1 className="title">Cayeux-sur-Mer</h1>
          <Next next={"le_hourdel"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/cayeux/cayeux01.jpg")}
              alt="cayeux01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux02.jpg")}
                alt="cayeux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux03.jpg")}
                alt="cayeux03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux04.jpg")}
                alt="cayeux04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux05.jpg")}
                alt="cayeux05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux06.jpg")}
                alt="cayeux06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux07.jpg")}
                alt="cayeux07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux08.jpg")}
                alt="cayeux08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux09.jpg")}
                alt="cayeux09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/cayeux/cayeux10.jpg")}
                alt="cayeux10"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Cayeux;
