import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default class Littoral_Seine_Maritime extends Component {

  render() {
    const belleville = [49.9476778, 1.1637398];
    const berneval = [49.9572664, 1.1888108];
    const criel = [50.0160928, 1.3139444];
    const dieppe = [49.9246182, 1.0791444];
    const etretat = [49.7074621, 0.2031905];
    const fecamp = [49.7577729, 0.374891];
    const le_croquet = [49.55719501137759, 0.09194783688565522];
    const le_havre = [49.49087165636735, 0.09282103786222073];
    const les_grandes_dalles = [49.8172964, 0.510781];
    const les_petites_dalles = [49.8210168, 0.5251555];
    const le_treport = [50.0591099, 1.3827656];
    const mesnil_val = [50.0419433, 1.3340248];
    const pain_de_sucre = [49.50439041538592, 0.08321623597271177];
    const phare_de_la_heve = [49.51106215330866, 0.0684245703524411];
    const pourville = [49.916219, 1.0304797];
    const puys = [49.9365342, 1.117419];
    const quiberville = [49.9031626, 0.9232605];
    const saint_aubin = [49.8889942, 0.8768462];
    const sainte_adresse = [49.50495225104016, 0.07481740281443994];
    const sainte_marguerite = [49.9088387, 0.9467867];
    const saint_jouin_bruneval_belvedere = [
        49.64905668396091,
        0.15729245283401916
      ];
    const saint_jouin_bruneval_plage = [49.6488242115505, 0.15342109419867356];
    const saint_valery_en_caux = [49.8597004, 0.7106831];
    const sotteville = [49.8809899, 0.8306694];
    const spenport = [49.8069179, 0.4946787];
    const table_d_orientation_sainte_adresse = [
        49.50713945422277,
        0.07376828633311128
      ];
    const valleuse_boucherot = [49.64280588649105, 0.15316556140311022];
    const valleuse_de_vaucottes = [49.73798575146814, 0.2908350344303434];
    const varengeville = [49.9046335, 1.0021825];
    const veletot = [49.786164997944525, 0.43129265244890025];
    const veules = [49.8722029, 0.7990652];
    const veulettes = [49.8503223, 0.5971459];
    const vgrainval = [49.750562118454745, 0.3474143340336777];
    const yport = [49.7378489, 0.3133709];

    return (
      <div>
          <Marker position={belleville}>
            <Popup minWidth={200}>
              <Link to="/belleville-sur-mer" className="linkPlage">
                <div className="lien">
                  <div>Belleville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/belleville/belleville01min.jpg")}
                      alt="belleville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={berneval}>
            <Popup minWidth={200}>
              <Link to="/berneval" className="linkPlage">
                <div className="lien">
                  <div>Berneval</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/berneval/berneval01min.jpg")}
                      alt="berneval"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={criel}>
            <Popup minWidth={200}>
              <Link to="/criel" className="linkPlage">
                <div className="lien">
                  <div>Criel-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/criel/criel01min.jpg")}
                      alt="criel"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={dieppe}>
            <Popup minWidth={200}>
              <Link to="/dieppe" className="linkHippodrome">
                <div className="lien">
                  <div>Dieppe</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/dieppe/dieppe01min.jpg")}
                      alt="dieppe"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={etretat}>
            <Popup minWidth={200}>
              <Link to="/etretat" className="linkHippodrome">
                <div className="lien">
                  <div>Etretat</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/etretat/etretat01min.jpg")}
                      alt="etretat"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={fecamp}>
            <Popup minWidth={200}>
              <Link to="/fecamp" className="linkHippodrome">
                <div className="lien">
                  <div>Fécamp</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/fecamp/fecamp01min.jpg")}
                      alt="fecamp"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_croquet}>
            <Popup minWidth={200}>
              <Link to="/le_croquet" className="linkHippodrome">
                <div className="lien">
                  <div>Le Croquet</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_croquet/le_croquet01min.jpg")}
                      alt="le_croquet"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_havre}>
            <Popup minWidth={200}>
              <Link to="/le_havre" className="linkHippodrome">
                <div className="lien">
                  <div>Le Havre</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_havre/le_havre01min.jpg")}
                      alt="le_havre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_grandes_dalles}>
            <Popup minWidth={200}>
              <Link to="/les_grandes_dalles" className="linkHippodrome">
                <div className="lien">
                  <div>Les Grandes Dalles</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/les_grandes_dalles/lgdalles01min.jpg")}
                      alt="les_grandes_dalles"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={les_petites_dalles}>
            <Popup minWidth={200}>
              <Link to="/les_petites_dalles" className="linkHippodrome">
                <div className="lien">
                  <div>Les Petites Dalles</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/les_petites_dalles/lpdalles01min.jpg")}
                      alt="les_petites_dalles"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={le_treport}>
            <Popup minWidth={200}>
              <Link to="/le_treport" className="linkHippodrome">
                <div className="lien">
                  <div>Le Tréport</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/le_treport/le_treport01min.jpg")}
                      alt="le_treport"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={mesnil_val}>
            <Popup minWidth={200}>
              <Link to="/mesnil_val" className="linkHippodrome">
                <div className="lien">
                  <div>Mesnil Val Plage</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/mesnil_val/mesnil_val01min.jpg")}
                      alt="mesnil_val"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pain_de_sucre}>
            <Popup minWidth={200}>
              <Link to="/pain_de_sucre" className="linkHippodrome">
                <div className="lien">
                  <div>Pain de Sucre</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/pain_de_sucre/pain_de_sucre01min.jpg")}
                      alt="pain_de_sucre"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={phare_de_la_heve}>
            <Popup minWidth={200}>
              <Link to="/phare_de_la_heve" className="linkHippodrome">
                <div className="lien">
                  <div>Phare de la Hève</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/phare_de_la_heve/phare_de_la_heve01min.jpg")}
                      alt="phare_de_la_heve"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={pourville}>
            <Popup minWidth={200}>
              <Link to="/pourville" className="linkHippodrome">
                <div className="lien">
                  <div>Pourville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/pourville/pourville01min.jpg")}
                      alt="pourville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={puys}>
            <Popup minWidth={200}>
              <Link to="/puys" className="linkHippodrome">
                <div className="lien">
                  <div>Puys</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/puys/puys01min.jpg")}
                      alt="puys"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={quiberville}>
            <Popup minWidth={200}>
              <Link to="/quiberville" className="linkHippodrome">
                <div className="lien">
                  <div>Quiberville</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/quiberville/quiberville01min.jpg")}
                      alt="quiberville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_aubin}>
            <Popup minWidth={200}>
              <Link to="/saint-aubin" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Aubin-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-aubin/saint-aubin01min.jpg")}
                      alt="saint-aubin"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_adresse}>
            <Popup minWidth={200}>
              <Link to="/sainte-adresse" className="linkHippodrome">
                <div className="lien">
                  <div>Sainte-Adresse</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/sainte-adresse/sainte-adresse01min.jpg")}
                      alt="saint-adresse"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sainte_marguerite}>
            <Popup minWidth={200}>
              <Link to="/sainte-marguerite" className="linkHippodrome">
                <div className="lien">
                  <div>Sainte-Marguerite-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/sainte-marguerite/sainte-marguerite01min.jpg")}
                      alt="saint-marguerite"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_jouin_bruneval_belvedere}>
            <Popup minWidth={200}>
              <Link
                to="/saint-jouin-bruneval_belvedere"
                className="linkHippodrome"
              >
                <div className="lien">
                  <div>Saint-Jouin-Bruneval (belvédère)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-jouin-bruneval_belvedere/saint-jouin-bruneval_belvedere01min.jpg")}
                      alt="saint-jouin-bruneval_belvedere"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_jouin_bruneval_plage}>
            <Popup minWidth={200}>
              <Link to="/saint-jouin-bruneval_plage" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Jouin-Bruneval (plage)</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-jouin-bruneval_plage/saint-jouin-bruneval_plage01min.jpg")}
                      alt="saint-jouin-bruneval_plage"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={spenport}>
            <Popup minWidth={200}>
              <Link to="/saint-pierre-en-port" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Pierre-en-Port</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-pierre-en-port/spenport01min.jpg")}
                      alt="spenport"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={saint_valery_en_caux}>
            <Popup minWidth={200}>
              <Link to="/saint-valery-en-caux" className="linkHippodrome">
                <div className="lien">
                  <div>Saint-Valéry-en-Caux</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/saint-valery-en-caux/saint-valery-en-caux01min.jpg")}
                      alt="saint-valery-en-caux"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={sotteville}>
            <Popup minWidth={200}>
              <Link to="/sotteville" className="linkHippodrome">
                <div className="lien">
                  <div>Sotteville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/sotteville/sotteville01min.jpg")}
                      alt="sotteville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={table_d_orientation_sainte_adresse}>
            <Popup minWidth={200}>
              <Link
                to="/table_d_orientation_sainte-adresse"
                className="linkHippodrome"
              >
                <div className="lien">
                  <div>Table d'orientation Sainte-Adresse</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/table_d_orientation_sainte-adresse/table_d_orientation_sainte-adresse01min.jpg")}
                      alt="table_d_orientation_sainte-adresse"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={valleuse_boucherot}>
            <Popup minWidth={200}>
              <Link to="/valleuse_boucherot" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse Boucherot</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/valleuse_boucherot/valleuse_boucherot01min.jpg")}
                      alt="valleuse_boucherot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={vgrainval}>
            <Popup minWidth={200}>
              <Link to="/vgrainval" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse de Grainval</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/vgrainval/vgrainval01min.jpg")}
                      alt="vgrainval"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veletot}>
            <Popup minWidth={200}>
              <Link to="/veletot" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse d'Eletot</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/veletot/veletot01min.jpg")}
                      alt="veletot"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={valleuse_de_vaucottes}>
            <Popup minWidth={200}>
              <Link to="/valleuse_de_vaucottes" className="linkHippodrome">
                <div className="lien">
                  <div>Valleuse de Vaucottes</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/valleuse_de_vaucottes/valleuse_de_vaucottes01min.jpg")}
                      alt="valleuse_de_vaucottes"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={varengeville}>
            <Popup minWidth={200}>
              <Link to="/varengeville" className="linkHippodrome">
                <div className="lien">
                  <div>Varengeville-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/varengeville/varengeville01min.jpg")}
                      alt="varengeville"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veules}>
            <Popup minWidth={200}>
              <Link to="/veules" className="linkHippodrome">
                <div className="lien">
                  <div>Veules-les-Roses</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/veules/veules01min.jpg")}
                      alt="veules"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={veulettes}>
            <Popup minWidth={200}>
              <Link to="/veulettes" className="linkHippodrome">
                <div className="lien">
                  <div>Veulettes-sur-Mer</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/veulettes/veulettes01min.jpg")}
                      alt="veulettes"
                      className="apercu"
                    />
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
          <Marker position={yport}>
            <Popup minWidth={200}>
              <Link to="/yport" className="linkHippodrome">
                <div className="lien">
                  <div>Yport</div>
                  <div>
                    <img
                      src={require("../../../img/littoral/yport/yport01min.jpg")}
                      alt="yport"
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
