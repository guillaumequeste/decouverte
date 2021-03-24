import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Zoom from "react-reveal/Zoom";
import Footer from "../../Footer";
import Next from "../../Next";
import Previous from "../../Previous";

class Veules extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Veules-les-Roses Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/veules"}
        />
        <Header />
        <Footer />
        <div className="bodyLittoral">
          <Previous prev={"saint-valery-en-caux"} />
          <h1 className="title">Veules-les-Roses</h1>
          <Next next={"sotteville"} />
          <div className="divPhoto">
            <img
              src={require("../../../img/littoral/veules/veules01.jpg")}
              alt="veules01"
              className="photo"
            />
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules02.jpg")}
                alt="veules02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules03.jpg")}
                alt="veules03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules04.jpg")}
                alt="veules04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules05.jpg")}
                alt="veules05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules06.jpg")}
                alt="veules06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules07.jpg")}
                alt="veules07"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules08.jpg")}
                alt="veules08"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules09.jpg")}
                alt="veules09"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules10.jpg")}
                alt="veules10"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules11.jpg")}
                alt="veules11"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules12.jpg")}
                alt="veules12"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules13.jpg")}
                alt="veules13"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules14.jpg")}
                alt="veules14"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules15.jpg")}
                alt="veules15"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules16.jpg")}
                alt="veules16"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules17.jpg")}
                alt="veules17"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules18.jpg")}
                alt="veules18"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules19.jpg")}
                alt="veules19"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/littoral/veules/veules20.jpg")}
                alt="veules20"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Veules;
