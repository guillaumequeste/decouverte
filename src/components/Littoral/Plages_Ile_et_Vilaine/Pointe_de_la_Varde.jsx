import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pointe_de_la_Varde extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pointe de la Varde Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/pointe_de_la_varde"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"rotheneuf1"} />
          <h1 className="title">Pointe de la Varde</h1>
          <Next next={"saint-coulomb"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde01.jpg")}
              alt="pointe_de_la_varde01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde02.jpg")}
                alt="pointe_de_la_varde02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde03.jpg")}
                alt="pointe_de_la_varde03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde04.jpg")}
                alt="pointe_de_la_varde04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde05.jpg")}
                alt="pointe_de_la_varde05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde06.jpg")}
                alt="pointe_de_la_varde06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde07.jpg")}
                alt="pointe_de_la_varde07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde08.jpg")}
                alt="pointe_de_la_varde08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde09.jpg")}
                alt="pointe_de_la_varde09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde10.jpg")}
                alt="pointe_de_la_varde10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde11.jpg")}
                alt="pointe_de_la_varde11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde12.jpg")}
                alt="pointe_de_la_varde12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde13.jpg")}
                alt="pointe_de_la_varde13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde14.jpg")}
                alt="pointe_de_la_varde14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_de_la_varde/pointe_de_la_varde15.jpg")}
                alt="pointe_de_la_varde15"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pointe_de_la_Varde;
