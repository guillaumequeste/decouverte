import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Aubin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/saint-aubin"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"sotteville"} />
          <h1 className="title">Saint-Aubin-sur-Mer</h1>
          <Next next={"quiberville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/saint-aubin/saint-aubin01.jpg")}
              alt="saint-aubin01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin02.jpg")}
                alt="saint-aubin02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin03.jpg")}
                alt="saint-aubin03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin04.jpg")}
                alt="saint-aubin04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin05.jpg")}
                alt="saint-aubin05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin06.jpg")}
                alt="saint-aubin06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin07.jpg")}
                alt="saint-aubin07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin08.jpg")}
                alt="saint-aubin08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin09.jpg")}
                alt="saint-aubin09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin10.jpg")}
                alt="saint-aubin10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin11.jpg")}
                alt="saint-aubin11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin12.jpg")}
                alt="saint-aubin12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin13.jpg")}
                alt="saint-aubin13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin14.jpg")}
                alt="saint-aubin14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin15.jpg")}
                alt="saint-aubin15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-aubin/saint-aubin16.jpg")}
                alt="saint-aubin16"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Aubin;
