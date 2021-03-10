import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Varaville extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Varaville Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/varaville"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"merville-franceville-plage"} />
          <h1 className="title">Varaville</h1>
          <Next next={"cabourg2"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/varaville/varaville01.jpg")}
              alt="varaville01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varaville/varaville02.jpg")}
                alt="varaville02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/varaville/varaville03.jpg")}
                alt="varaville03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Varaville;
