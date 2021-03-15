import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Seine_Yvelines extends Component {

  render() {
    const andresy = [48.9819095262023, 2.061438227332575];
    const bennecourt = [49.041242, 1.560926];
    const conflans_sainte_honorine = [48.988290414786235, 2.0723917357971455];
    const gargenville = [48.976861008962665, 1.815486818861043];
    const guernes = [49.00541213405952, 1.6347672194356955];
    const hardricourt = [49.003782942255654, 1.9048766694675834];
    const herblay = [48.986754039858695, 2.158093863257755];
    const ile_chaussee = [48.86958098815109, 2.1376456035848834];
    const ile_derivation = [48.951360372959385, 2.0466587186703844];
    const ile_l_aumone = [49.000011061272204, 1.7188917620003474];
    const juziers = [48.987111605582704, 1.8413811040722905];
    const la_roche_guyon = [49.0810715, 1.6305766];
    const les_mureaux = [49.000169067222835, 1.9117994004540018];
    const limayA = [49.010514275596236, 1.7040224195236098];
    const limayB = [49.00780117156559, 1.710777479108585];
    const limayC = [48.99387534963818, 1.7252152235025298];
    const limayD = [48.99257572621172, 1.726104291971935];
    const limetz_villez = [49.06031467107532, 1.5291453092289942];
    const meulan_en_yvelines = [49.00177604401088, 1.9090958184399387];
    const mezy_sur_seine = [48.997421818559246, 1.8836185541003259];
    const montesson = [48.91245049228811, 2.1175196029212096];
    const panorama_val_d_herblay = [48.98749636389404, 2.159593191902034];
    const porcheville = [48.967849586129546, 1.778778948604236];
    const sandrancourt = [49.0373032929155, 1.6470670579397595];
    const sartrouville = [48.94521856637024, 2.1604969325058665];
    const triel_sur_seine = [48.98140986083938, 2.000512311660687];
    const vaux_sur_seine = [49.0049731849544, 1.963319801259904];
    const vetheuil = [49.064290180847955, 1.6984859510052086];

    return (
      <div>
          <Marker position={andresy}>
            <Popup minWidth={200}>
              <Link to="/andresy" className="linkPlage">
                <div className="lien">
                  <div>Andresy</div>
                  <div>
                    <img
                      src={require("../../../img/seine/andresy/andresy01min.jpg")}
                      alt="andresy"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={bennecourt}>
            <Popup minWidth={200}>
              <Link to="/bennecourt" className="linkPlage">
                <div className="lien">
                  <div>Bennecourt</div>
                  <div>
                    <img
                      src={require("../../../img/seine/bennecourt/bennecourt01min.jpg")}
                      alt="bennecourt"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={conflans_sainte_honorine}>
            <Popup minWidth={200}>
              <Link to="/conflans-sainte-honorine" className="linkPlage">
                <div className="lien">
                  <div>Conflans-Sainte-Honorine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/conflans-sainte-honorine/conflans-sainte-honorine01min.jpg")}
                      alt="conflans-sainte-honorine"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={gargenville}>
            <Popup minWidth={200}>
              <Link to="/gargenville" className="linkPlage">
                <div className="lien">
                  <div>Gargenville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/gargenville/gargenville01min.jpg")}
                      alt="gargenville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={guernes}>
            <Popup minWidth={200}>
              <Link to="/guernes" className="linkPlage">
                <div className="lien">
                  <div>Guernes</div>
                  <div>
                    <img
                      src={require("../../../img/seine/guernes/guernes01min.jpg")}
                      alt="guernes"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hardricourt}>
            <Popup minWidth={200}>
              <Link to="/hardricourt" className="linkPlage">
                <div className="lien">
                  <div>Hardricourt</div>
                  <div>
                    <img
                      src={require("../../../img/seine/hardricourt/hardricourt01min.jpg")}
                      alt="hardricourt"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={herblay}>
            <Popup minWidth={200}>
              <Link to="/herblay" className="linkPlage">
                <div className="lien">
                  <div>Herblay</div>
                  <div>
                    <img
                      src={require("../../../img/seine/herblay/herblay01min.jpg")}
                      alt="herblay"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={ile_chaussee}>
            <Popup minWidth={200}>
              <Link to="/ile_chaussee" className="linkPlage">
                <div className="lien">
                  <div>Ile de la Chaussée</div>
                  <div>
                    <img
                      src={require("../../../img/seine/ile_chaussee/ile_chaussee01min.jpg")}
                      alt="ile_chaussee"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={ile_derivation}>
            <Popup minWidth={200}>
              <Link to="/ile_derivation" className="linkPlage">
                <div className="lien">
                  <div>Ile de la Dérivation</div>
                  <div>
                    <img
                      src={require("../../../img/seine/ile_derivation/ile_derivation01min.jpg")}
                      alt="ile_derivation"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={ile_l_aumone}>
            <Popup minWidth={200}>
              <Link to="/ile_l_aumone" className="linkPlage">
                <div className="lien">
                  <div>Ile l'Aumone</div>
                  <div>
                    <img
                      src={require("../../../img/seine/ile_l_aumone/ile_l_aumone01min.jpg")}
                      alt="ile_l_aumone"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={juziers}>
            <Popup minWidth={200}>
              <Link to="/juziers" className="linkPlage">
                <div className="lien">
                  <div>Juziers</div>
                  <div>
                    <img
                      src={require("../../../img/seine/juziers/juziers01min.jpg")}
                      alt="juziers"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={la_roche_guyon}>
            <Popup minWidth={200}>
              <Link to="/la_roche-guyon" className="linkPlage">
                <div className="lien">
                  <div>La Roche-Guyon</div>
                  <div>
                    <img
                      src={require("../../../img/seine/la_roche-guyon/la_roche-guyon01min.jpg")}
                      alt="la_roche-guyon"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_mureaux}>
            <Popup minWidth={200}>
              <Link to="/les_mureaux" className="linkPlage">
                <div className="lien">
                  <div>Les Mureaux</div>
                  <div>
                    <img
                      src={require("../../../img/seine/les_mureaux/les_mureaux01min.jpg")}
                      alt="les_mureaux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={limayA}>
            <Popup minWidth={200}>
              <Link to="/limayA" className="linkPlage">
                <div className="lien">
                  <div>Limay (A)</div>
                  <div>
                    <img
                      src={require("../../../img/seine/limayA/limayA01min.jpg")}
                      alt="limayA"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={limayB}>
            <Popup minWidth={200}>
              <Link to="/limayB" className="linkPlage">
                <div className="lien">
                  <div>Limay (B)</div>
                  <div>
                    <img
                      src={require("../../../img/seine/limayB/limayB01min.jpg")}
                      alt="limayB"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={limayC}>
            <Popup minWidth={200}>
              <Link to="/limayC" className="linkPlage">
                <div className="lien">
                  <div>Limay (C)</div>
                  <div>
                    <img
                      src={require("../../../img/seine/limayC/limayC01min.jpg")}
                      alt="limayC"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={limayD}>
            <Popup minWidth={200}>
              <Link to="/limayD" className="linkPlage">
                <div className="lien">
                  <div>Limay (D)</div>
                  <div>
                    <img
                      src={require("../../../img/seine/limayD/limayD01min.jpg")}
                      alt="limayD"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={limetz_villez}>
            <Popup minWidth={200}>
              <Link to="/limetz-villez" className="linkPlage">
                <div className="lien">
                  <div>Limetz-Villez</div>
                  <div>
                    <img
                      src={require("../../../img/seine/limetz-villez/limetz-villez01min.jpg")}
                      alt="limetz-villez"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={meulan_en_yvelines}>
            <Popup minWidth={200}>
              <Link to="/meulan-en-yvelines" className="linkPlage">
                <div className="lien">
                  <div>Meulan-en-Yvelines</div>
                  <div>
                    <img
                      src={require("../../../img/seine/meulan-en-yvelines/meulan-en-yvelines01min.jpg")}
                      alt="meulan-en-yvelines"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={mezy_sur_seine}>
            <Popup minWidth={200}>
              <Link to="/mezy-sur-seine" className="linkPlage">
                <div className="lien">
                  <div>Mézy-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/mezy-sur-seine/mezy-sur-seine01min.jpg")}
                      alt="mezy-sur-seine"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={montesson}>
            <Popup minWidth={200}>
              <Link to="/montesson" className="linkPlage">
                <div className="lien">
                  <div>Montesson</div>
                  <div>
                    <img
                      src={require("../../../img/seine/montesson/montesson01min.jpg")}
                      alt="montesson"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={panorama_val_d_herblay}>
            <Popup minWidth={200}>
              <Link to="/panorama_val_d_herblay" className="linkPlage">
                <div className="lien">
                  <div>Panorama Val d'Herblay et la Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/panorama_val_d_herblay/panorama_val_d_herblay01min.jpg")}
                      alt="panorama_val_d_herblay"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={porcheville}>
            <Popup minWidth={200}>
              <Link to="/porcheville" className="linkPlage">
                <div className="lien">
                  <div>Porcheville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/porcheville/porcheville01min.jpg")}
                      alt="porcheville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sandrancourt}>
            <Popup minWidth={200}>
              <Link to="/sandrancourt" className="linkPlage">
                <div className="lien">
                  <div>Sandrancourt</div>
                  <div>
                    <img
                      src={require("../../../img/seine/sandrancourt/sandrancourt01min.jpg")}
                      alt="sandrancourt"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sartrouville}>
            <Popup minWidth={200}>
              <Link to="/sartrouville" className="linkPlage">
                <div className="lien">
                  <div>Sartrouville</div>
                  <div>
                    <img
                      src={require("../../../img/seine/sartrouville/sartrouville01min.jpg")}
                      alt="sartrouville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={triel_sur_seine}>
            <Popup minWidth={200}>
              <Link to="/triel-sur-seine" className="linkPlage">
                <div className="lien">
                  <div>Triel-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/triel-sur-seine/triel-sur-seine01min.jpg")}
                      alt="triel-sur-seine"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vaux_sur_seine}>
            <Popup minWidth={200}>
              <Link to="/vaux-sur-seine" className="linkPlage">
                <div className="lien">
                  <div>Vaux-sur-Seine</div>
                  <div>
                    <img
                      src={require("../../../img/seine/vaux-sur-seine/vaux-sur-seine01min.jpg")}
                      alt="vaux-sur-seine"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vetheuil}>
            <Popup minWidth={200}>
              <Link to="/vetheuil" className="linkPlage">
                <div className="lien">
                  <div>Vétheuil</div>
                  <div>
                    <img
                      src={require("../../../img/seine/vetheuil/vetheuil01min.jpg")}
                      alt="vetheuil"
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
