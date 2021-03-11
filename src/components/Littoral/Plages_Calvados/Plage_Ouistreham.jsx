import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Plage_Ouistreham extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Plage de Ouistreham Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/plage_ouistreham"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"colleville-montgomery"} />
          <h1 className="title">Plage de Ouistreham</h1>
          <Next next={"port_ouistreham"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham01.jpg")}
              alt="plage_ouistreham01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham02.jpg")}
                alt="plage_ouistreham02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham03.jpg")}
                alt="plage_ouistreham03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham04.jpg")}
                alt="plage_ouistreham04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham05.jpg")}
                alt="plage_ouistreham05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham06.jpg")}
                alt="plage_ouistreham06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham07.jpg")}
                alt="plage_ouistreham07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham08.jpg")}
                alt="plage_ouistreham08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham09.jpg")}
                alt="plage_ouistreham09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham10.jpg")}
                alt="plage_ouistreham10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham11.jpg")}
                alt="plage_ouistreham11"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Plage_Ouistreham;
