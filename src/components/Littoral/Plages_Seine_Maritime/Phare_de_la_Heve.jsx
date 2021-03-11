import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Phare_de_la_Heve extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Phare de la Hève Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/phare_de_la_heve"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"table_d_orientation_sainte-adresse"} />
          <h1 className="title">Phare de la Hève</h1>
          <Next next={"le_croquet"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve01.jpg")}
              alt="phare_de_la_heve01"
              className="photoGrosHorloge"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve02.jpg")}
                alt="phare_de_la_heve02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve03.jpg")}
                alt="phare_de_la_heve03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve04.jpg")}
                alt="phare_de_la_heve04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve05.jpg")}
                alt="phare_de_la_heve05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve06.jpg")}
                alt="phare_de_la_heve06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve07.jpg")}
                alt="phare_de_la_heve07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve08.jpg")}
                alt="phare_de_la_heve08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve09.jpg")}
                alt="phare_de_la_heve09"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Phare_de_la_Heve;
