import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Le_Val_Pitant extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Le Val Pitant Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/le_val_pitant"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"barrage_poses"} />
          <h1 className="title">Le Val Pitant</h1>
          <Next next={"le_plessis"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/seine/le_val_pitant/le_val_pitant01.jpg")}
              alt="lle_val_pitant01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_pitant/le_val_pitant02.jpg")}
                alt="le_val_pitant02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_pitant/le_val_pitant03.jpg")}
                alt="le_val_pitant03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_pitant/le_val_pitant04.jpg")}
                alt="lle_val_pitant04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/seine/le_val_pitant/le_val_pitant05.jpg")}
                alt="le_val_pitant05"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Le_Val_Pitant;
