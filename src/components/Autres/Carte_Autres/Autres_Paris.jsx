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
    const grande_arche = [48.89259960797655, 2.2361040115356445];
    const jardin_palais_royal = [48.86498295934279, 2.337791919708252];
    const jardin_tuileries = [48.86338786861697, 2.32785701751709];
    const louvre = [48.86062104200994, 2.337641716003418];
    const martyrium = [48.8840838, 2.3402373];
    const musee_carte = [48.8226911, 2.2734484];
    const musee_egouts = [48.86272243617286, 2.3023888852596883];
    const musee_grevin = [48.8718365, 2.3420974];
    const musee_jacquemart = [48.8753, 2.3107700000000477];
    const musee_marmottan_monet = [48.8592281, 2.2671622];
    const musee_monnaie = [48.85688380612597, 2.338897187415455];
    const musee_orsay = [48.8599179, 2.3265828];
    const musee_parfum = [48.8714998, 2.314865];
    const notre_dame_paris = [48.85295168692098, 2.3498513316543495];
    const opera_garnier = [48.871977659908524, 2.331835541261057];
    const palais_de_justice = [48.85572931360579, 2.3451411724090576];
    const palais_de_la_decouverte = [48.86619341081601, 2.310826873049564];
    const pantheon = [48.84618602174832, 2.345960611114492];

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
        <Marker position={grande_arche}>
          <Popup minWidth={200}>
            <Link to="/grande_arche" className="linkPlage">
              <div className="lien">
                <div>Grande Arche de la Défense</div>
                <div>
                  <img
                    src={require("../../../img/autres/grande_arche/grande_arche.jpeg")}
                    alt="grande_arche"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={jardin_palais_royal}>
          <Popup minWidth={200}>
            <Link to="/jardin_palais_royal" className="linkPlage">
              <div className="lien">
                <div>Jardin du Palais Royal</div>
                <div>
                  <img
                    src={require("../../../img/autres/grande_arche/grande_arche.jpeg")}
                    alt="grande_arche"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={jardin_tuileries}>
          <Popup minWidth={200}>
            <Link to="/jardin_tuileries" className="linkPlage">
              <div className="lien">
                <div>Jardin des Tuileries</div>
                <div>
                  <img
                    src={require("../../../img/autres/grande_arche/grande_arche.jpeg")}
                    alt="grande_arche"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={louvre}>
          <Popup minWidth={200}>
            <Link to="/louvre" className="linkPlage">
              <div className="lien">
                <div>Musée du Louvre</div>
                <div>
                  <img
                    src={require("../../../img/autres/louvre/louvre.jpeg")}
                    alt="louvre"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={martyrium}>
          <Popup minWidth={200}>
            <Link to="/jardin_tuileries" className="linkPlage">
              <div className="lien">
                <div>Crypte du martyrium de Saint Denis</div>
                <div>
                  <img
                    src={require("../../../img/autres/martyrium/martyrium.jpeg")}
                    alt="martyrium"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_carte}>
          <Popup minWidth={200}>
            <Link to="/musee_carte" className="linkPlage">
              <div className="lien">
                <div>Musée français de la Carte à Jouer</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_carte/musee_carte.jpeg")}
                    alt="musee_carte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_egouts}>
          <Popup minWidth={200}>
            <Link to="/musee_egouts" className="linkPlage">
              <div className="lien">
                <div>Musée des Egouts de Paris</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_egouts/musee_egouts.jpeg")}
                    alt="musee_egouts"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_grevin}>
          <Popup minWidth={200}>
            <Link to="/musee_grevin" className="linkPlage">
              <div className="lien">
                <div>Musée Grévin</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_grevin/musee_grevin.png")}
                    alt="musee_grevin"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_jacquemart}>
          <Popup minWidth={200}>
            <Link to="/musee_jacquemart" className="linkPlage">
              <div className="lien">
                <div>Musée Jacquemart-André</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_jacquemart/musee_jacquemart.jpeg")}
                    alt="musee_jacquemart"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_marmottan_monet}>
          <Popup minWidth={200}>
            <Link to="/musee_marmottan_monet" className="linkPlage">
              <div className="lien">
                <div>Musée Marmottan Monet</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_marmottan_monet/musee_marmottan_monet.jpeg")}
                    alt="musee_marmottan_monet"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_monnaie}>
          <Popup minWidth={200}>
            <Link to="/musee_monnaie" className="linkPlage">
              <div className="lien">
                <div>Musée de la Monnaie de Paris</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_monnaie/musee_monnaie.jpeg")}
                    alt="musee_monnaie"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_orsay}>
          <Popup minWidth={200}>
            <Link to="/musee_orsay" className="linkPlage">
              <div className="lien">
                <div>Musée d'Orsay</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_orsay/musee_orsay.jpeg")}
                    alt="musee_orsay"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={musee_parfum}>
          <Popup minWidth={200}>
            <Link to="/musee_parfum" className="linkPlage">
              <div className="lien">
                <div>Grand Musée du Parfum</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_orsay/musee_orsay.jpeg")}
                    alt="musee_orsay"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={notre_dame_paris}>
          <Popup minWidth={200}>
            <Link to="/notre_dame_paris" className="linkPlage">
              <div className="lien">
                <div>Cathédrale Notre-Dame de Paris</div>
                <div>
                  <img
                    src={require("../../../img/autres/musee_orsay/musee_orsay.jpeg")}
                    alt="musee_orsay"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={opera_garnier}>
          <Popup minWidth={200}>
            <Link to="/opera_garnier" className="linkPlage">
              <div className="lien">
                <div>Opéra Garnier</div>
                <div>
                  <img
                    src={require("../../../img/autres/opera_garnier/opera_garnier.jpg")}
                    alt="opera_garnier"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={palais_de_justice}>
          <Popup minWidth={200}>
            <Link to="/palais_de_justice" className="linkPlage">
              <div className="lien">
                <div>Palais de Justice de Paris</div>
                <div>
                  <img
                    src={require("../../../img/autres/opera_garnier/opera_garnier.jpg")}
                    alt="opera_garnier"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={palais_de_la_decouverte}>
          <Popup minWidth={200}>
            <Link to="/palais_de_la_decouverte" className="linkPlage">
              <div className="lien">
                <div>Palais de la Découverte</div>
                <div>
                  <img
                    src={require("../../../img/autres/palais_de_la_decouverte/palais_de_la_decouverte.jpeg")}
                    alt="palais_de_la_decouverte"
                    className="apercu"
                  />
                </div>
              </div>
            </Link>
          </Popup>
        </Marker>
        <Marker position={pantheon}>
          <Popup minWidth={200}>
            <Link to="/pantheon" className="linkPlage">
              <div className="lien">
                <div>Panthéon</div>
                <div>
                  <img
                    src={require("../../../img/autres/pantheon/pantheon.jpeg")}
                    alt="pantheon"
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
