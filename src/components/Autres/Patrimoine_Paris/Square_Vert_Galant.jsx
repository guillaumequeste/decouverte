import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Square_Vert_Galant extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Square du Vert-Galant Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/square_vert-galant"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Square du Vert-Galant</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le site se trouve à la pointe ouest de l'île de la Cité, dans le
              quartier Saint-Germain-l'Auxerrois du 1er arrondissement. Le
              niveau du square est situé sept mètres plus bas que le niveau
              actuel des autres parties de l'île, ce qui correspond au niveau
              que celle-ci avait autrefois. Le faible surplomb du square par
              rapport à la Seine explique qu'il soit inondé, voire totalement
              submergé lors des plus importantes crues du fleuve.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Square_Vert_Galant;
