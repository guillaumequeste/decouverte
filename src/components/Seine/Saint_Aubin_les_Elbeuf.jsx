import React, { Component } from "react";
import Header from "../Header";
import Helmet from "../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../components/Footer";
import Next from "../Next";
import Previous from "../Previous";

class Saint_Aubin_les_Elbeuf extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Baie de Somme Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/saint-aubin-les-elbeuf"}
        />
        <Header />
        <Footer />
        <div className="bodySeine">
          <Previous prev={"cleon"} />
          <h1 className="title">Saint-Aubin-lès-Elbeuf</h1>
          <Next next={"barrage_poses"} />
          <div className="divPhoto">
            <img
              src={require("../../img/seine/saint-aubin-les-elbeuf/saint-aubin-les-elbeuf01.jpg")}
              alt="saint-aubin-les-elbeuf01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/saint-aubin-les-elbeuf/saint-aubin-les-elbeuf02.jpg")}
                alt="saint-aubin-les-elbeuf02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../img/seine/saint-aubin-les-elbeuf/saint-aubin-les-elbeuf03.jpg")}
                alt="saint-aubin-les-elbeuf03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Saint_Aubin_les_Elbeuf;
