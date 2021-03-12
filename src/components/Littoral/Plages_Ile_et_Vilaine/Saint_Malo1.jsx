import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Malo1 extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Saint-Malo (1) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/saint-malo1"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"saint-malo2"} />
          <h1 className="title">Saint-Malo (1)</h1>
          <Next next={"rotheneuf2"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/saint-malo1/saint-malo101.jpg")}
              alt="saint-malo101"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo102.jpg")}
                alt="saint-malo102"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo103.jpg")}
                alt="saint-malo103"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo104.jpg")}
                alt="saint-malo104"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo105.jpg")}
                alt="saint-malo105"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo106.jpg")}
                alt="saint-malo106"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo107.jpg")}
                alt="saint-malo107"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo108.jpg")}
                alt="saint-malo108"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo109.jpg")}
                alt="saint-malo109"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo110.jpg")}
                alt="saint-malo110"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo111.jpg")}
                alt="saint-malo111"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo112.jpg")}
                alt="saint-malo112"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo113.jpg")}
                alt="saint-malo113"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-malo1/saint-malo114.jpg")}
                alt="saint-malo114"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Malo1;
