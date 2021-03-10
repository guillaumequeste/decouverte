import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Colleville_Montgomery extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Colleville-Montgomery (Sword Beach) Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/colleville-montgomery"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"hermanville-sur-mer"} />
          <h1 className="title">Colleville-Montgomery (Sword Beach)</h1>
          <Next next={"plage_ouistreham"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/colleville-montgomery/colleville-montgomery01.jpg")}
              alt="colleville-montgomery01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery02.jpg")}
                alt="colleville-montgomery02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery03.jpg")}
                alt="colleville-montgomery03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery04.jpg")}
                alt="colleville-montgomery04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery05.jpg")}
                alt="colleville-montgomery05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery06.jpg")}
                alt="colleville-montgomery06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery07.jpg")}
                alt="colleville-montgomery07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery08.jpg")}
                alt="colleville-montgomery08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery09.jpg")}
                alt="colleville-montgomery09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/colleville-montgomery/colleville-montgomery10.jpg")}
                alt="colleville-montgomery10"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Colleville_Montgomery;
