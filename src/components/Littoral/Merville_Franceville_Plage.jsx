import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Merville_Franceville_Plage extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Merville-Franceville-Plage Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/merville-franceville-plage"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"pointe_ouistreham"} />
          <h1 className="title">Merville-Franceville-Plage</h1>
          <Next next={"varaville"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage01.jpg")}
              alt="merville-franceville-plage01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage02.jpg")}
                alt="merville-franceville-plage02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage03.jpg")}
                alt="merville-franceville-plage03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage04.jpg")}
                alt="merville-franceville-plage04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage05.jpg")}
                alt="merville-franceville-plage05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage06.jpg")}
                alt="merville-franceville-plage06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage07.jpg")}
                alt="merville-franceville-plage07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage08.jpg")}
                alt="merville-franceville-plage08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/merville-franceville-plage/merville-franceville-plage09.jpg")}
                alt="merville-franceville-plage09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Merville_Franceville_Plage;
