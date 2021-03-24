import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Pointe_Ouistreham extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Pointe de Ouistreham Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/puys"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"port_ouistreham"} />
          <h1 className="title">Pointe de Ouistreham</h1>
          <Next next={"merville-franceville-plage"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/pointe_ouistreham/pointe_ouistreham01.jpg")}
              alt="pointe_ouistreham01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_ouistreham/pointe_ouistreham02.jpg")}
                alt="pointe_ouistreham02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_ouistreham/pointe_ouistreham03.jpg")}
                alt="pointe_ouistreham03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/pointe_ouistreham/pointe_ouistreham04.jpg")}
                alt="pointe_ouistreham04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Pointe_Ouistreham;
