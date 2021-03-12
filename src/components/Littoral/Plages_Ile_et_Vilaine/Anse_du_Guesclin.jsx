import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Anse_du_Guesclin extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Anse du Guesclin Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/anse_du_guesclin"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"saint-coulomb"} />
          <h1 className="title">Anse du Guesclin</h1>
          <Next next={"cancale2"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/anse_du_guesclin/anse_du_guesclin01.jpg")}
              alt="anse_du_guesclin01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/anse_du_guesclin/anse_du_guesclin02.jpg")}
                alt="anse_du_guesclin02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/anse_du_guesclin/anse_du_guesclin03.jpg")}
                alt="anse_du_guesclin03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Anse_du_Guesclin;
