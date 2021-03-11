import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Valery_en_Caux extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Ault Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/saint-valery-en-caux"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"veulettes"} />
          <h1 className="title">Saint-Valéry-en-Caux</h1>
          <Next next={"veules"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux01.jpg")}
              alt="saint-valery-en-caux01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux02.jpg")}
                alt="saint-valery-en-caux02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux03.jpg")}
                alt="saint-valery-en-caux03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux04.jpg")}
                alt="saint-valery-en-caux04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux05.jpg")}
                alt="saint-valery-en-caux05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux06.jpg")}
                alt="saint-valery-en-caux06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux07.jpg")}
                alt="saint-valery-en-caux07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux08.jpg")}
                alt="saint-valery-en-caux08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux09.jpg")}
                alt="saint-valery-en-caux09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux10.jpg")}
                alt="saint-valery-en-caux10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux11.jpg")}
                alt="saint-valery-en-caux11"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Valery_en_Caux;
