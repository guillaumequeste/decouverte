import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Valleuse_de_Vaucottes extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Valleuse de Vaucottes Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/valleuse_de_vaucottes"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"etretat"} />
          <h1 className="title">Valleuse de Vaucottes</h1>
          <Next next={"yport"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes01.jpg")}
              alt="valleuse_de_vaucottes01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes02.jpg")}
                alt="valleuse_de_vaucottes02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes03.jpg")}
                alt="valleuse_de_vaucottes03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes04.jpg")}
                alt="valleuse_de_vaucottes04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Valleuse_de_Vaucottes;
