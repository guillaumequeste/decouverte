import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Phare_de_la_Roque extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/phare_de_la_roque"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"berville-sur-mer"} />
          <h1 className="title">Phare de la Roque</h1>
          <Next next={"tancarville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque01.jpg")}
              alt="phare_de_la_roque01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque02.jpg")}
                alt="phare_de_la_roque02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque03.jpg")}
                alt="phare_de_la_roque03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque04.jpg")}
                alt="phare_de_la_roque04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque05.jpg")}
                alt="phare_de_la_roque05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque06.jpg")}
                alt="phare_de_la_roque06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque07.jpg")}
                alt="phare_de_la_roque07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque08.jpg")}
                alt="phare_de_la_roque08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque09.jpg")}
                alt="phare_de_la_roque09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque10.jpg")}
                alt="phare_de_la_roque10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque11.jpg")}
                alt="phare_de_la_roque11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque12.jpg")}
                alt="phare_de_la_roque12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque13.jpg")}
                alt="phare_de_la_roque13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/phare_de_la_roque/phare_de_la_roque14.jpg")}
                alt="phare_de_la_roque14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Phare_de_la_Roque;
