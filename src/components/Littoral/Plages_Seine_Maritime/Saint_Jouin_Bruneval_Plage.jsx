import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Saint_Jouin_Bruneval_Plage extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={
            "http://decouverte.guillaumequeste.fr/saint-jouin-bruneval_plage"
          }
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"valleuse_boucherot"} />
          <h1 className="title">Saint-Jouin-Bruneval (plage)</h1>
          <Next next={"saint-jouin-bruneval_belvedere"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage01.jpg")}
              alt="saint-jouin-bruneval_plage01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage02.jpg")}
                alt="saint-jouin-bruneval_plage02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage03.jpg")}
                alt="saint-jouin-bruneval_plage03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage04.jpg")}
                alt="saint-jouin-bruneval_plage04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Jouin_Bruneval_Plage;
