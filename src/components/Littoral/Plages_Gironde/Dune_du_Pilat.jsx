import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";

class Dune_du_Pilat extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Dune du Pilat Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/dune_du_pilat"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <h1 className="title">Dune du Pilat</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat01.jpg")}
              alt="dune_du_pilat01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat02.jpg")}
                alt="dune_du_pilat02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat03.jpg")}
                alt="dune_du_pilat03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat04.jpg")}
                alt="dune_du_pilat04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat05.jpg")}
                alt="dune_du_pilat05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat06.jpg")}
                alt="dune_du_pilat06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat07.jpg")}
                alt="dune_du_pilat07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat08.jpg")}
                alt="dune_du_pilat08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat09.jpg")}
                alt="dune_du_pilat09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat10.jpg")}
                alt="dune_du_pilat10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat11.jpg")}
                alt="dune_du_pilat11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat12.jpg")}
                alt="dune_du_pilat12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat13.jpg")}
                alt="dune_du_pilat13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat14.jpg")}
                alt="dune_du_pilat14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat15.jpg")}
                alt="dune_du_pilat15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat16.jpg")}
                alt="dune_du_pilat16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat17.jpg")}
                alt="dune_du_pilat17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/dune_du_pilat/dune_du_pilat18.jpg")}
                alt="dune_du_pilat18"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Dune_du_Pilat;
