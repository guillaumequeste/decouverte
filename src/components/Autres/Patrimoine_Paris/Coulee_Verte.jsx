import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

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
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Coulee_Verte;
