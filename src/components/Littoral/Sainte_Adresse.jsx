import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Sainte_Adresse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Sainte-Adresse Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/sainte-adresse"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"pain_de_sucre"} />
          <h1 className="title">Sainte-Adresse</h1>
          <Next next={"table_d_orientation_sainte-adresse"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/sainte-adresse/sainte-adresse01.jpg")}
              alt="sainte-adresse01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse02.jpg")}
                alt="sainte-adresse02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse03.jpg")}
                alt="sainte-adresse03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse04.jpg")}
                alt="sainte-adresse04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse05.jpg")}
                alt="sainte-adresse05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse06.jpg")}
                alt="sainte-adresse06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse07.jpg")}
                alt="sainte-adresse07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse08.jpg")}
                alt="sainte-adresse08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse09.jpg")}
                alt="sainte-adresse09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse10.jpg")}
                alt="sainte-adresse10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse11.jpg")}
                alt="sainte-adresse11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse12.jpg")}
                alt="sainte-adresse12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse13.jpg")}
                alt="sainte-adresse13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/sainte-adresse/sainte-adresse14.jpg")}
                alt="sainte-adresse14"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Sainte_Adresse;
