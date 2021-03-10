import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Hermanville_sur_Mer extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Hermanville-sur-Mer Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/hermanville-sur-mer"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"lion-sur-mer"} />
          <h1 className="title">Hermanville-sur-Mer</h1>
          <Next next={"colleville-montgomery"} />
          <div className="divPhoto">
            <img
              src={require("../../img/littoral/hermanville-sur-mer/hermanville-sur-mer01.jpg")}
              alt="hermanville-sur-mer01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/hermanville-sur-mer/hermanville-sur-mer02.jpg")}
                alt="hermanville-sur-mer02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/littoral/hermanville-sur-mer/hermanville-sur-mer03.jpg")}
                alt="hermanville-sur-mer03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Hermanville_sur_Mer;
