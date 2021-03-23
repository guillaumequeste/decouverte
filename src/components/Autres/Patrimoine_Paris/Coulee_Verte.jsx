import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Coulee_Verte extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Coulée verte Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/coulee_verte"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Coulée verte René-Dumont</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/coulee_verte/coulee_verte01.jpg")}
              alt="coulee_verte01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte02.jpg")}
                alt="coulee_verte02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte03.jpg")}
                alt="coulee_verte03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte04.jpg")}
                alt="coulee_verte04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte05.jpg")}
                alt="coulee_verte05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte06.jpg")}
                alt="coulee_verte06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte07.jpg")}
                alt="coulee_verte07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte08.jpg")}
                alt="coulee_verte08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte09.jpg")}
                alt="coulee_verte09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte10.jpg")}
                alt="coulee_verte10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte11.jpg")}
                alt="coulee_verte11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte12.jpg")}
                alt="coulee_verte12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte13.jpg")}
                alt="coulee_verte13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte14.jpg")}
                alt="coulee_verte14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte15.jpg")}
                alt="coulee_verte15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte16.jpg")}
                alt="coulee_verte16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte17.jpg")}
                alt="coulee_verte17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte18.jpg")}
                alt="coulee_verte18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte19.jpg")}
                alt="coulee_verte19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte20.jpg")}
                alt="coulee_verte20"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/coulee_verte/coulee_verte21.jpg")}
                alt="coulee_verte21"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Coulee_Verte;
