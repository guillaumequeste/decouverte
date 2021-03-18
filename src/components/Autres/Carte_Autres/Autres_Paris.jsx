import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Autres_Paris extends Component {
  render() {
    const arc_de_triomphe = [48.873786710287305, 2.2949454855619233];
    const arenes_lutece = [48.845102778773175, 2.3528522878357307];
    const basilique_saint_denis = [48.93544539130951, 2.3597294082122744];
    const bnf = [48.83399819829469, 2.3761074661315433];
    const buttes_chaumont = [48.8776770998102, 2.3799030008548243];
    const carrousel_louvre = [48.8628, 2.3348399999999856];
    const catacombes = [48.833964, 2.3324924];
    const catherale_sainte_trinite = [48.86188119477401, 2.301068542327812];
    const centre_pompidou = [48.86062131486451, 2.35247186085212];
    const champ_de_mars = [48.85565166326895, 2.298588752746582];
    const champs_elysees = [48.87262793802567, 2.298660869038713];
    const cite_du_cinema = [48.922640257476935, 2.336547374725342];
    const coulee_verte = [48.84938276601615, 2.3714590072631836];
    const eglise_saint_germain_des_pres = [48.85396450348454, 2.33434796333313];
    const eglise_saint_julien_le_pauvre = [
      48.85202314049355,
      2.347126007080078
    ];
    const eglise_saint_sulpice = [48.850987235120066, 2.334597404754618];
    var funiculaire_montmartre = [48.884869694658946, 2.3426534492574547];
    const galerie_colbert = [48.8663, 2.338889999999992];
    const galeries_lafayette = [48.87369656788959, 2.330439465637255];
    const galerie_vero_dodat = [48.8628, 2.340159999999969];
    const galerie_vivienne = [48.8665963, 2.3401302];
    const gare_montparnasse = [48.841161677872485, 2.319732040987219];
    const gare_saint_lazare = [48.876302407887714, 2.3254001140594482];

    return (
      <div>
        <Marker position={arc_de_triomphe}>
          <Popup minWidth={200}>
            <Link to="/arc_de_triomphe" className="linkPlage">
              <div className="lien">
                <div>Arc de Triomphe</div>
                <div>
                  <img
                    src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
                    alt="arc_de_triomphe"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={arenes_lutece}>
          <Popup minWidth={200}>
            <Link to="/arenes_lutece" className="linkPlage">
              <div className="lien">
                <div>Arènes de Lutèce</div>
                <div>
                  <img
                    src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
                    alt="arc_de_triomphe"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={basilique_saint_denis}>
          <Popup minWidth={200}>
            <Link to="/basilique_saint-denis" className="linkPlage">
              <div className="lien">
                <div>Basilique Saint-Denis</div>
                <div>
                  <img
                    src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
                    alt="arc_de_triomphe"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={bnf}>
          <Popup minWidth={200}>
            <Link to="/bnf" className="linkPlage">
              <div className="lien">
                <div>Bibliothèque nationale de France</div>
                <div>
                  <img
                    src={require("../../../img/autres/bnf/bnf.jpeg")}
                    alt="bnf"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={buttes_chaumont}>
          <Popup minWidth={200}>
            <Link to="/buttes_chaumont" className="linkPlage">
              <div className="lien">
                <div>Parc des Buttes-Chaumont</div>
                <div>
                  <img
                    src={require("../../../img/autres/bnf/bnf.jpeg")}
                    alt="bnf"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={carrousel_louvre}>
          <Popup minWidth={200}>
            <Link to="/carrousel_louvre" className="linkPlage">
              <div className="lien">
                <div>Carrousel du Louvre</div>
                <div>
                  <img
                    src={require("../../../img/autres/carrousel_louvre/carrousel_louvre.jpeg")}
                    alt="carrousel_louvre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={catacombes}>
          <Popup minWidth={200}>
            <Link to="/catacombes" className="linkPlage">
              <div className="lien">
                <div>Catacombes de Paris</div>
                <div>
                  <img
                    src={require("../../../img/autres/catacombes/catacombes.jpeg")}
                    alt="catacombes"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={catherale_sainte_trinite}>
          <Popup minWidth={200}>
            <Link to="/cathedrale_sainte_trinite" className="linkPlage">
              <div className="lien">
                <div>Catherale de la Sainte-Trinité</div>
                <div>
                  <img
                    src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
                    alt="arc_de_triomphe"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={centre_pompidou}>
          <Popup minWidth={200}>
            <Link to="/centre_pompidou" className="linkPlage">
              <div className="lien">
                <div>Centre Pompidou</div>
                <div>
                  <img
                    src={require("../../../img/autres/centre_pompidou/centre_pompidou.jpeg")}
                    alt="centre_pompidou"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={champ_de_mars}>
          <Popup minWidth={200}>
            <Link to="/champ_de_mars" className="linkPlage">
              <div className="lien">
                <div>Champ de Mars</div>
                <div>
                  <img
                    src={require("../../../img/autres/champ_de_mars/champ_de_mars.jpeg")}
                    alt="champ_de_mars"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={champs_elysees}>
          <Popup minWidth={200}>
            <Link to="/champs_elysees" className="linkPlage">
              <div className="lien">
                <div>Champs Elysées</div>
                <div>
                  <img
                    src={require("../../../img/autres/champs_elysees/champs_elysees.jpeg")}
                    alt="champs_elysees"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={cite_du_cinema}>
          <Popup minWidth={200}>
            <Link to="/cite_du_cinema" className="linkPlage">
              <div className="lien">
                <div>Cité du cinéma</div>
                <div>
                  <img
                    src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
                    alt="cite_du_cinema"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={coulee_verte}>
          <Popup minWidth={200}>
            <Link to="/coulee_verte" className="linkPlage">
              <div className="lien">
                <div>Coulée verte</div>
                <div>
                  <img
                    src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
                    alt="coulee_verte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={eglise_saint_germain_des_pres}>
          <Popup minWidth={200}>
            <Link to="/eglise_saint-germain-des-pres" className="linkPlage">
              <div className="lien">
                <div>Eglise Saint-Germain-des-Prés</div>
                <div>
                  <img
                    src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
                    alt="coulee_verte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={eglise_saint_julien_le_pauvre}>
          <Popup minWidth={200}>
            <Link to="/eglise_saint-julien-le-pauvre" className="linkPlage">
              <div className="lien">
                <div>Eglise Saint-Julien-le-Pauvre</div>
                <div>
                  <img
                    src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
                    alt="coulee_verte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={eglise_saint_sulpice}>
          <Popup minWidth={200}>
            <Link to="/eglise_saint-sulpice" className="linkPlage">
              <div className="lien">
                <div>Eglise Saint-Sulpice</div>
                <div>
                  <img
                    src={require("../../../img/autres/cite_du_cinema/cite_du_cinema.jpeg")}
                    alt="coulee_verte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={funiculaire_montmartre}>
          <Popup minWidth={200}>
            <Link to="/funiculaire_montmartre" className="linkPlage">
              <div className="lien">
                <div>Funiculaire de Montlmartre</div>
                <div>
                  <img
                    src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
                    alt="funiculaire_montmartre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={galerie_colbert}>
          <Popup minWidth={200}>
            <Link to="/galerie_colbert" className="linkPlage">
              <div className="lien">
                <div>Galerie Colbert</div>
                <div>
                  <img
                    src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
                    alt="funiculaire_montmartre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={galeries_lafayette}>
          <Popup minWidth={200}>
            <Link to="/galeries_lafayette" className="linkPlage">
              <div className="lien">
                <div>Galeries Lafayette</div>
                <div>
                  <img
                    src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
                    alt="funiculaire_montmartre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={galerie_vero_dodat}>
          <Popup minWidth={200}>
            <Link to="/galerie_vero_dodat" className="linkPlage">
              <div className="lien">
                <div>Galerie Véro-Dodat</div>
                <div>
                  <img
                    src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
                    alt="funiculaire_montmartre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={galerie_vivienne}>
          <Popup minWidth={200}>
            <Link to="/galerie_vivienne" className="linkPlage">
              <div className="lien">
                <div>Galerie Vivienne</div>
                <div>
                  <img
                    src={require("../../../img/autres/funiculaire_montmartre/funiculaire_montmartre.jpeg")}
                    alt="funiculaire_montmartre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={gare_montparnasse}>
          <Popup minWidth={200}>
            <Link to="/gare_montparnasse" className="linkPlage">
              <div className="lien">
                <div>Gare Montparnasse</div>
                <div>
                  <img
                    src={require("../../../img/autres/gare_montparnasse/gare_montparnasse.jpeg")}
                    alt="gare_montparnasse"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={gare_saint_lazare}>
          <Popup minWidth={200}>
            <Link to="/gare_saint-lazare" className="linkPlage">
              <div className="lien">
                <div>Gare Saint-Lazare</div>
                <div>
                  <img
                    src={require("../../../img/autres/gare_saint-lazare/gare_saint-lazare.jpeg")}
                    alt="gare_saint-lazare"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
      </div>
    );
  }
}
