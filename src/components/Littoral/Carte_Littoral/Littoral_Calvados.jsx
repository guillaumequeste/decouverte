import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Calvados extends Component {

  render() {
    const benerville_sur_mer = [49.339410335475336, 0.02752296973673296];
    const blonville_sur_mer = [49.339868017999756, 0.028210862876303366];
    const cabourg1 = [49.297396873701764, -0.10630096507771469];
    const cabourg2 = [49.292543154762846, -0.12447833748117754];
    const colleville_montgomery = [49.293625132209826, -0.2823951296882776];
    const cricqueboeuf = [49.405661299844944, 0.1414178236658703];
    const deauville = [49.36353360295033, 0.06904659774387589];
    const dives_sur_mer = [49.29495528599388, -0.09090491368977105];
    const hermanville_sur_mer = [49.29603225303073, -0.2931680180543106];
    const houlgate = [49.299750716644134, -0.08478741779805565];
    const lion_sur_mer = [49.30263188970311, -0.31382139408440146];
    const merville_franceville_plage = [49.28650744074311, -0.20175568132633215];
    const plage_ouistreham = [49.29191161328451, -0.2701268764212994];
    const pointe_ouistreham = [49.278099968417436, -0.24046806688210687];
    const port_dives_sur_mer = [49.29328608059495, -0.09653081069732616];
    const port_ouistreham = [49.275354226968155, -0.2470057538076098];
    const trouville_sur_mer1 = [49.37410075048613, 0.08511754737730914];
    const trouville_sur_mer2 = [49.36737101116615, 0.07552186080749923];
    const varaville = [49.286910449389204, -0.16864406675309196];
    const villers_sur_mer1 = [49.32894895905092, 0.0067647577833795935];
    const villers_sur_mer2 = [49.32431557010392, -0.004348807631764373];
    const villerville = [49.40319463035321, 0.13029669355369755];

    return (
      <div>
          <Marker position={benerville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/benerville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Benerville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/benerville-sur-mer/benerville-sur-mer01min.jpg")}
                      alt="benerville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={blonville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/blonville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Blonville-sur-mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/blonville-sur-mer/blonville-sur-mer01min.jpg")}
                      alt="blonville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cabourg1}>
            <Popup minWidth={200}>
              <Link to="/cabourg1" className="linkPlage">
                <div className="lien">
                  <div>Cabourg 1</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cabourg1/cabourg101min.jpg")}
                      alt="cabourg1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cabourg2}>
            <Popup minWidth={200}>
              <Link to="/cabourg2" className="linkPlage">
                <div className="lien">
                  <div>Cabourg 2</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cabourg2/cabourg201min.jpg")}
                      alt="cabourg2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={colleville_montgomery}>
            <Popup minWidth={200}>
              <Link to="/colleville-montgomery" className="linkPlage">
                <div className="lien">
                  <div>Colleville-Montgomery (Sword Beach)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/colleville-montgomery/colleville-montgomery01min.jpg")}
                      alt="colleville-montgomery"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={cricqueboeuf}>
            <Popup minWidth={200}>
              <Link to="/cricqueboeuf" className="linkPlage">
                <div className="lien">
                  <div>Cricqueboeuf</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/cricqueboeuf/cricqueboeuf01min.jpg")}
                      alt="cricqueboeuf"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={deauville}>
            <Popup minWidth={200}>
              <Link to="/deauville" className="linkPlage">
                <div className="lien">
                  <div>Deauville</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/deauville/deauville01min.jpg")}
                      alt="deauville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={dives_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/dives-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Dives-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/dives-sur-mer/dives-sur-mer01min.jpg")}
                      alt="dives-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={hermanville_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/hermanville-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Hermanville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/hermanville-sur-mer/hermanville-sur-mer01min.jpg")}
                      alt="hermanville-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={houlgate}>
            <Popup minWidth={200}>
              <Link to="/houlgate" className="linkHippodrome">
                <div className="lien">
                  <div>Houlgate</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/houlgate/houlgate01min.jpg")}
                      alt="houlgate"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={lion_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/lion-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Lion-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/lion-sur-mer/lion-sur-mer01min.jpg")}
                      alt="lion-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={merville_franceville_plage}>
            <Popup minWidth={200}>
              <Link to="/merville-franceville-plage" className="linkHippodrome">
                <div className="lien">
                  <div>Merville-Franceville-Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/merville-franceville-plage/merville-franceville-plage01min.jpg")}
                      alt="erville-franceville-plage"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          
          
          
          <Marker position={plage_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/plage_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Plage de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/plage_ouistreham/plage_ouistreham01min.jpg")}
                      alt="plage_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pointe_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/pointe_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Pointe de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/pointe_ouistreham/pointe_ouistreham01min.jpg")}
                      alt="pointe_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_dives_sur_mer}>
            <Popup minWidth={200}>
              <Link to="/port_dives-sur-mer" className="linkHippodrome">
                <div className="lien">
                  <div>Port de Dives-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/port_dives-sur-mer/port_dives-sur-mer01min.jpg")}
                      alt="port_dives-sur-mer"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={port_ouistreham}>
            <Popup minWidth={200}>
              <Link to="/port_ouistreham" className="linkHippodrome">
                <div className="lien">
                  <div>Port de Ouistreham</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/port_ouistreham/port_ouistreham01min.jpg")}
                      alt="port_ouistreham"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={trouville_sur_mer1}>
            <Popup minWidth={200}>
              <Link to="/trouville-sur-mer1" className="linkHippodrome">
                <div className="lien">
                  <div>Trouville-sur-Mer 1</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/trouville-sur-mer1/trouville-sur-mer101min.jpg")}
                      alt="trouville-sur-mer1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={trouville_sur_mer2}>
            <Popup minWidth={200}>
              <Link to="/trouville-sur-mer2" className="linkHippodrome">
                <div className="lien">
                  <div>Trouville-sur-Mer 2</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/trouville-sur-mer2/trouville-sur-mer201min.jpg")}
                      alt="trouville-sur-mer2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={varaville}>
            <Popup minWidth={200}>
              <Link to="/varaville" className="linkHippodrome">
                <div className="lien">
                  <div>Varaville</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/varaville/varaville01min.jpg")}
                      alt="varaville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villers_sur_mer1}>
            <Popup minWidth={200}>
              <Link to="/villers-sur-mer1" className="linkHippodrome">
                <div className="lien">
                  <div>Villers-sur-Mer (1)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/villers-sur-mer1/villers-sur-mer101min.jpg")}
                      alt="villers-sur-mer1"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villers_sur_mer2}>
            <Popup minWidth={200}>
              <Link to="/villers-sur-mer2" className="linkHippodrome">
                <div className="lien">
                  <div>Villers-sur-Mer (2)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/villers-sur-mer2/villers-sur-mer201min.jpg")}
                      alt="villers-sur-mer2"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={villerville}>
            <Popup minWidth={200}>
              <Link to="/villerville" className="linkHippodrome">
                <div className="lien">
                  <div>Villerville</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/villerville/villerville01min.jpg")}
                      alt="villerville"
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
