import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Littoral from './components/Littoral/Littoral'
import Ault from './components/Littoral/Ault'
import Baie from './components/Littoral/Baie'
import Belleville from './components/Littoral/Belleville'
import Berck from './components/Littoral/Berck'
import Berneval from './components/Littoral/Berneval'
import Boulogne from './components/Littoral/Boulogne'
import Cayeux from './components/Littoral/Cayeux'
import Criel from './components/Littoral/Criel'
import Dieppe from './components/Littoral/Dieppe'
import Equihen from './components/Littoral/Equihen'
import Etaples from './components/Littoral/Etaples'
import Etretat from './components/Littoral/Etretat'
import Fecamp from './components/Littoral/Fecamp'
import Fort_Mahon from './components/Littoral/Fort_Mahon'
import Hardelot from './components/Littoral/Hardelot'
import Le_Bois_de_Cise from './components/Littoral/Le_Bois_de_Cise'
import Le_Croquet from './components/Littoral/Le_Croquet'
import Le_Crotoy from './components/Littoral/Le_Crotoy'
import Le_Hourdel from './components/Littoral/Le_Hourdel'
import Le_Touquet from './components/Littoral/Le_Touquet'
import Le_Treport from './components/Littoral/Le_Treport'
import Les_Grandes_Dalles from './components/Littoral/Les_Grandes_Dalles'
import Les_Petites_Dalles from './components/Littoral/Les_Petites_Dalles'
import Merlimont from './components/Littoral/Merlimont'
import Mers from './components/Littoral/Mers'
import Mesnil_Val from './components/Littoral/Mesnil_Val'
import Pourville from './components/Littoral/Pourville'
import Puys from './components/Littoral/Puys'
import Quend from './components/Littoral/Quend'
import Quiberville from './components/Littoral/Quiberville'
import Saint_Aubin from './components/Littoral/Saint_Aubin'
import Saint_Jouin_Bruneval_Belvedere from './components/Littoral/Saint_Jouin_Bruneval_Belvedere'
import Saint_Jouin_Bruneval_Plage from './components/Littoral/Saint_Jouin_Bruneval_Plage'
import Saint_Pierre_en_Port from './components/Littoral/Saint_Pierre_en_Port'
import Saint_Valery_en_Caux from './components/Littoral/Saint_Valery_en_Caux'
import Saint_Valery_sur_Somme from './components/Littoral/Saint_Valery_sur_Somme'
import Sainte_Cecile from './components/Littoral/Sainte_Cecile'
import Sainte_Marguerite from './components/Littoral/Sainte_Marguerite'
import Sotteville from './components/Littoral/Sotteville'
import Stella from './components/Littoral/Stella'
import Valleuse_Boucherot from './components/Littoral/Valleuse_Boucherot'
import Valleuse_de_Vaucottes from './components/Littoral/Valleuse_de_Vaucottes'
import Varengeville from './components/Littoral/Varengeville'
import VEletot from './components/Littoral/VEletot'
import Veules from './components/Littoral/Veules'
import Veulettes from './components/Littoral/Veulettes'
import VGrainval from './components/Littoral/VGrainval'
import Wimereux from './components/Littoral/Wimereux'
import Yport from './components/Littoral/Yport'

import Seine from './components/Seine/Seine'
import Aizier from './components/Seine/Aizier'
import Barrage_Poses from './components/Seine/Barrage_Poses'
import Bennecourt from './components/Seine/Bennecourt'
import Caudebec from './components/Seine/Caudebec'
import Cleon from './components/Seine/Cleon'
import Duclair from './components/Seine/Duclair'
import Gargenville from './components/Seine/Gargenville'
import Guernes from './components/Seine/Guernes'
import Hardricourt from './components/Seine/Hardricourt'
import Hautot from './components/Seine/Hautot'
import Heurteauville from './components/Seine/Heurteauville'
import Ile_Cite from './components/Seine/Ile_Cite'
import Ile_l_Aumone from './components/Seine/Ile_l_Aumone'
import Ile_Saint_Louis from './components/Seine/Ile_Saint_Louis'
import Jumieges from './components/Seine/Jumieges'
import Juziers from './components/Seine/Juziers'
import La_Mailleray_sur_Seine from './components/Seine/La_Mailleray_sur_Seine'
import La_Roche_Guyon from './components/Seine/La_Roche_Guyon'
import La_Roquette from './components/Seine/La_Roquette'
import La_Vacquerie from './components/Seine/La_Vacquerie'
import Le_Mesnil_sous_Jumieges from './components/Seine/Le_Mesnil_sous_Jumieges'
import Le_Plessis from './components/Seine/Le_Plessis'
import Le_Thuit from './components/Seine/Le_Thuit'
import Le_Val_d_Hazey from './components/Seine/Le_Val_d_Hazey'
import Le_Val_Pitant from './components/Seine/Le_Val_Pitant'
import Les_Andelys from './components/Seine/Les_Andelys'
import Les_Mousseaux from './components/Seine/Les_Mousseaux'
import Les_Mureaux from './components/Seine/Les_Mureaux'
import LimayA from './components/Seine/LimayA'
import LimayB from './components/Seine/LimayB'
import LimayC from './components/Seine/LimayC'
import LimayD from './components/Seine/LimayD'
import Limetz_Villez from './components/Seine/Limetz_Villez'
import Meulan_en_Yvelines from './components/Seine/Meulan_en_Yvelines'
import Mezy_sur_Seine from './components/Seine/Mezy_sur_Seine'
import Nanterre from './components/Seine/Nanterre'
import Notre_Dame from './components/Seine/Notre_Dame'
import Notre_Dame_de_Bliquetuit from './components/Seine/Notre_Dame_de_Bliquetuit'
import Notre_Dame_de_l_Isle from './components/Seine/Notre_Dame_de_l_Isle'
import Panorama_Val_d_Herblay from './components/Seine/Panorama_Val_d_Herblay'
import Passage_du_Trait from './components/Seine/Passage_du_Trait'
import Passage_d_Yssainville from './components/Seine/Passage_d_Yssainville'
import Phare_de_la_Roque from './components/Seine/Phare_de_la_Roque'
import Pont_au_Change from './components/Seine/Pont_au_Change'
import Pont_Charles_de_Gaulle from './components/Seine/Pont_Charles_de_Gaulle'
import Pont_de_Sully from './components/Seine/Pont_de_Sully'
import Pont_d_Iena from './components/Seine/Pont_d_Iena'
import Pont_du_Garigliano from './components/Seine/Pont_du_Garigliano'
import Pont_Marie from './components/Seine/Pont_Marie'
import Pont_National from './components/Seine/Pont_National'
import Pont_Neuf from './components/Seine/Pont_Neuf'
import Pont_Saint_Cloud from './components/Seine/Pont_Saint_Cloud'
import Pont_Saint_Louis from './components/Seine/Pont_Saint_Louis'
import Porcheville from './components/Seine/Porcheville'
import Port_Jerome from './components/Seine/Port_Jerome'
import Port_Jumieges from './components/Seine/Port_Jumieges'
import Port_Morin from './components/Seine/Port_Morin'
import Port_Mort from './components/Seine/Port_Mort'
import Quillebeuf from './components/Seine/Quillebeuf'
import Rouen from './components/Seine/Rouen'
import Sahurs from './components/Seine/Sahurs'
import Saint_Aubin_les_Elbeuf from './components/Seine/Saint_Aubin_les_Elbeuf'
import Saint_Maur from './components/Seine/Saint_Maur'
import Saint_Nicolas_de_Bliquetuit from './components/Seine/Saint_Nicolas_de_Bliquetuit'
import Saint_Paul from './components/Seine/Saint_Paul'
import Saint_Pierre_de_Manneville from './components/Seine/Saint_Pierre_de_Manneville'
import Sandrancourt from './components/Seine/Sandrancourt'
import Tancarville from './components/Seine/Tancarville'
import Tosny from './components/Seine/Tosny'
import Val_de_la_Haye from './components/Seine/Val_de_la_Haye'
import Vatteville from './components/Seine/Vatteville'
import Vaux_sur_Seine from './components/Seine/Vaux_sur_Seine'
import Vernon from './components/Seine/Vernon'
import Vetheuil from './components/Seine/Vetheuil'
import Vieux_Port from './components/Seine/Vieux_Port'
import Villequier from './components/Seine/Villequier'
import Villers_sur_le_Roule from './components/Seine/Villers_sur_le_Roule'

import Autres from './components/Autres/Autres'
import Abbaye_Mortemer from './components/Autres/Abbaye_Mortemer'
import Abbaye_Notre_Dame_du_Bec from './components/Autres/Abbaye_Notre_Dame_du_Bec'
import Abbaye_Saint_Georges_Boscherville from './components/Autres/Abbaye_Saint_Georges_Boscherville'
import Auvers_sur_Oise from './components/Autres/Auvers_sur_Oise'
import Avenue_Verte_Arques from './components/Autres/Avenue_Verte_Arques'
import Avenue_Verte_Dampierre from './components/Autres/Avenue_Verte_Dampierre'
import Avenue_Verte_Mesnieres from './components/Autres/Avenue_Verte_Mesnieres.jsx'
import Avenue_Verte_Meulers from './components/Autres/Avenue_Verte_Meulers.jsx'
import Avenue_Verte_Osmoy from './components/Autres/Avenue_Verte_Osmoy.jsx'
import Avenue_Verte_Saint_Aubin_le_Cauf from './components/Autres/Avenue_Verte_Saint_Aubin_le_Cauf.jsx'
import Avenue_Verte_Saint_Vaast from './components/Autres/Avenue_Verte_Saint_Vaast.jsx'
import Basilique_Lisieux from './components/Autres/Basilique_Lisieux.jsx'
import Biomarine from './components/Autres/Biomarine.jsx'
import Cathedrale_Amiens from './components/Autres/Cathedrale_Amiens.jsx'
import Cathedrale_Beauvais from './components/Autres/Cathedrale_Beauvais.jsx'
import Cathedrale_Rouen from './components/Autres/Cathedrale_Rouen.jsx'
import Chateau_Chantilly from './components/Autres/Chateau_Chantilly.jsx'
import Chateau_Dieppe from './components/Autres/Chateau_Dieppe.jsx'
import Chateau_Harcourt from './components/Autres/Chateau_Harcourt.jsx'
import Chateau_Pierrefonds from './components/Autres/Chateau_Pierrefonds.jsx'
import Chateau_Vascoeuil from './components/Autres/Chateau_Vascoeuil.jsx'
import Cimetiere_des_Canadiens from './components/Autres/Cimetiere_des_Canadiens.jsx'
import Domaine_du_Champ_de_Bataille from './components/Autres/Domaine_du_Champ_de_Bataille.jsx'
import Eglise_Saint_Joseph from './components/Autres/Eglise_Saint_Joseph.jsx'
import Estran from './components/Autres/Estran.jsx'
import Giverny from './components/Autres/Giverny.jsx'
import Gros_Horloge from './components/Autres/Gros_Horloge.jsx'
import Hortillonnages from './components/Autres/Hortillonnages.jsx'
import Le_Bec_Hellouin from './components/Autres/Le_Bec_Hellouin.jsx'
import Le_Sentier_du_Verger from './components/Autres/Le_Sentier_du_Verger.jsx'
import Maison_Jules_Verne from './components/Autres/Maison_Jules_Verne.jsx'
import Lillebonne from './components/Autres/Lillebonne.jsx'
import Manoir_Ango from './components/Autres/Manoir_Ango.jsx'
import Memorial from './components/Autres/Memorial.jsx'
import Montreuil_sur_Mer from './components/Autres/Montreuil_sur_Mer.jsx'
import Musee_Beaux_Arts from './components/Autres/Musee_Beaux_Arts.jsx'
import Musee_Emma_Bovary from './components/Autres/Musee_Emma_Bovary.jsx'
import Panorama_Evreux from './components/Autres/Panorama_Evreux.jsx'
import Panorama_Marais_Vernier from './components/Autres/Panorama_Marais_Vernier.jsx'
import Panorama_Vert_Village from './components/Autres/Panorama_Vert_Village.jsx'
import Panorama_XXL from './components/Autres/Panorama_XXL.jsx'
import Phare_d_Ailly from './components/Autres/Phare_d_Ailly.jsx'
import Plan_eau_Canada from './components/Autres/Plan_eau_Canada.jsx'
import Quartier_Saint_Leu from './components/Autres/Quartier_Saint_Leu.jsx'
import Varenne from './components/Autres/Varenne.jsx'
import Versailles from './components/Autres/Versailles.jsx'

import Contact from './components/Contact'
import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/littoral' component={Littoral}/>
            <Route path='/ault' component={Ault}/>
            <Route path='/baie_de_somme' component={Baie}/>
            <Route path='/belleville-sur-mer' component={Belleville}/>
            <Route path='/berck' component={Berck}/>
            <Route path='/berneval' component={Berneval}/>
            <Route path='/boulogne' component={Boulogne}/>
            <Route path='/cayeux' component={Cayeux}/>
            <Route path='/criel' component={Criel}/>
            <Route path='/dieppe' component={Dieppe}/>
            <Route path='/equihen' component={Equihen}/>
            <Route path='/etaples' component={Etaples}/>
            <Route path='/etretat' component={Etretat}/>
            <Route path='/fecamp' component={Fecamp}/>
            <Route path='/fort-mahon' component={Fort_Mahon}/>
            <Route path='/hardelot' component={Hardelot}/>
            <Route path='/le_bois_de_cise' component={Le_Bois_de_Cise}/>
            <Route path='/le_croquet' component={Le_Croquet}/>
            <Route path='/le_crotoy' component={Le_Crotoy}/>
            <Route path='/le_hourdel' component={Le_Hourdel}/>
            <Route path='/le_touquet' component={Le_Touquet}/>
            <Route path='/le_treport' component={Le_Treport}/>
            <Route path='/les_grandes_dalles' component={Les_Grandes_Dalles}/>
            <Route path='/les_petites_dalles' component={Les_Petites_Dalles}/>
            <Route path='/merlimont' component={Merlimont}/>
            <Route path='/mers' component={Mers}/>
            <Route path='/mesnil_val' component={Mesnil_Val}/>
            <Route path='/pourville' component={Pourville}/>
            <Route path='/puys' component={Puys}/>
            <Route path='/quend' component={Quend}/>
            <Route path='/quiberville' component={Quiberville}/>
            <Route path='/saint-aubin' component={Saint_Aubin}/>
            <Route path='/saint-jouin-bruneval_belvedere' component={Saint_Jouin_Bruneval_Belvedere}/>
            <Route path='/saint-jouin-bruneval_plage' component={Saint_Jouin_Bruneval_Plage}/>
            <Route path='/saint-pierre-en-port' component={Saint_Pierre_en_Port}/>
            <Route path='/saint-valery-en-caux' component={Saint_Valery_en_Caux}/>
            <Route path='/saint-valery-sur-somme' component={Saint_Valery_sur_Somme}/>
            <Route path='/sainte-cecile_plage' component={Sainte_Cecile}/>
            <Route path='/sainte-marguerite' component={Sainte_Marguerite}/>
            <Route path='/sotteville' component={Sotteville}/>
            <Route path='/stella' component={Stella}/>
            <Route path='/valleuse_boucherot' component={Valleuse_Boucherot}/>
            <Route path='/valleuse_de_vaucottes' component={Valleuse_de_Vaucottes}/>
            <Route path='/varengeville' component={Varengeville}/>
            <Route path='/veletot' component={VEletot}/>
            <Route path='/veules' component={Veules}/>
            <Route path='/veulettes' component={Veulettes}/>
            <Route path='/vgrainval' component={VGrainval}/>
            <Route path='/wimereux' component={Wimereux}/>
            <Route path='/yport' component={Yport}/>

            <Route path='/seine' component={Seine}/>
            <Route path='/aizier' component={Aizier}/>
            <Route path='/barrage_poses' component={Barrage_Poses}/>
            <Route path='/bennecourt' component={Bennecourt}/>
            <Route path='/caudebec' component={Caudebec}/>
            <Route path='/cleon' component={Cleon}/>
            <Route path='/duclair' component={Duclair}/>
            <Route path='/gargenville' component={Gargenville}/>
            <Route path='/guernes' component={Guernes}/>
            <Route path='/hardricourt' component={Hardricourt}/>
            <Route path='/hautot' component={Hautot}/>
            <Route path='/heurteauville' component={Heurteauville}/>
            <Route path='/ile_cite' component={Ile_Cite}/>
            <Route path='/ile_l_aumone' component={Ile_l_Aumone}/>
            <Route path='/ile_saint-louis' component={Ile_Saint_Louis}/>
            <Route path='/jumieges' component={Jumieges}/>
            <Route path='/juziers' component={Juziers}/>
            <Route path='/la_mailleray-sur-seine' component={La_Mailleray_sur_Seine}/>
            <Route path='/la_roche-guyon' component={La_Roche_Guyon}/>
            <Route path='/la_roquette' component={La_Roquette}/>
            <Route path='/la_vacquerie' component={La_Vacquerie}/>
            <Route path='/le_mesnil-sous-jumieges' component={Le_Mesnil_sous_Jumieges}/>
            <Route path='/le_plessis' component={Le_Plessis}/>
            <Route path='/le_thuit' component={Le_Thuit}/>
            <Route path='/le_val_d_hazey' component={Le_Val_d_Hazey}/>
            <Route path='/le_val_pitant' component={Le_Val_Pitant}/>
            <Route path='/les_andelys' component={Les_Andelys}/>
            <Route path='/les_mousseaux' component={Les_Mousseaux}/>
            <Route path='/les_mureaux' component={Les_Mureaux}/>
            <Route path='/limayA' component={LimayA}/>
            <Route path='/limayB' component={LimayB}/>
            <Route path='/limayC' component={LimayC}/>
            <Route path='/limayD' component={LimayD}/>
            <Route path='/limetz-villez' component={Limetz_Villez}/>
            <Route path='/meulan-en-yvelines' component={Meulan_en_Yvelines}/>
            <Route path='/mezy-sur-seine' component={Mezy_sur_Seine}/>
            <Route path='/nanterre' component={Nanterre}/>
            <Route path='/notre_dame' component={Notre_Dame}/>
            <Route path='/notre-dame-de-bliquetuit' component={Notre_Dame_de_Bliquetuit}/>
            <Route path='/notre-dame-de-l_isle' component={Notre_Dame_de_l_Isle}/>
            <Route path='/panorama_val_d_herblay' component={Panorama_Val_d_Herblay}/>
            <Route path='/passage_du_trait' component={Passage_du_Trait}/>
            <Route path='/passage_d_yssainville' component={Passage_d_Yssainville}/>
            <Route path='/phare_de_la_roque' component={Phare_de_la_Roque}/>
            <Route path='/pont_au_change' component={Pont_au_Change}/>
            <Route path='/pont_charles_de_gaulle' component={Pont_Charles_de_Gaulle}/>
            <Route path='/pont_de_sully' component={Pont_de_Sully}/>
            <Route path='/pont_d_iena' component={Pont_d_Iena}/>
            <Route path='/pont_du_garigliano' component={Pont_du_Garigliano}/>
            <Route path='/pont_marie' component={Pont_Marie}/>
            <Route path='/pont_national' component={Pont_National}/>
            <Route path='/pont_neuf' component={Pont_Neuf}/>
            <Route path='/pont_saint-cloud' component={Pont_Saint_Cloud}/>
            <Route path='/pont_saint-louis' component={Pont_Saint_Louis}/>
            <Route path='/porcheville' component={Porcheville}/>
            <Route path='/port-jerome' component={Port_Jerome}/>
            <Route path='/port_jumieges' component={Port_Jumieges}/>
            <Route path='/port_morin' component={Port_Morin}/>
            <Route path='/port-mort' component={Port_Mort}/>
            <Route path='/quillebeuf' component={Quillebeuf}/>
            <Route path='/rouen' component={Rouen}/>
            <Route path='/sahurs' component={Sahurs}/>
            <Route path='/saint-aubin-les-elbeuf' component={Saint_Aubin_les_Elbeuf}/>
            <Route path='/saint-maur' component={Saint_Maur}/>
            <Route path='/saint-nicolas-de-bliquetuit' component={Saint_Nicolas_de_Bliquetuit}/>
            <Route path='/saint-paul' component={Saint_Paul}/>
            <Route path='/saint-pierre-de-manneville' component={Saint_Pierre_de_Manneville}/>
            <Route path='/sandrancourt' component={Sandrancourt}/>
            <Route path='/tancarville' component={Tancarville}/>
            <Route path='/tosny' component={Tosny}/>
            <Route path='/val-de-la-haye' component={Val_de_la_Haye}/>
            <Route path='/vatteville' component={Vatteville}/>
            <Route path='/vaux-sur-seine' component={Vaux_sur_Seine}/>
            <Route path='/vernon' component={Vernon}/>
            <Route path='/vetheuil' component={Vetheuil}/>
            <Route path='/vieux-port' component={Vieux_Port}/>
            <Route path='/villequier' component={Villequier}/>
            <Route path='/villers-sur-le-roule' component={Villers_sur_le_Roule}/>

            <Route path='/autres' component={Autres}/>
            <Route path='/abbaye_mortemer' component={Abbaye_Mortemer}/>
            <Route path='/abbaye_notre-dame_du_bec' component={Abbaye_Notre_Dame_du_Bec}/>
            <Route path='/abbaye_saint_georges_boscherville' component={Abbaye_Saint_Georges_Boscherville}/>
            <Route path='/auvers-sur-oise' component={Auvers_sur_Oise}/>
            <Route path='/avenue_verte_arques' component={Avenue_Verte_Arques}/>
            <Route path='/avenue_verte_dampierre' component={Avenue_Verte_Dampierre}/>
            <Route path='/avenue_verte_mesnieres' component={Avenue_Verte_Mesnieres}/>
            <Route path='/avenue_verte_meulers' component={Avenue_Verte_Meulers}/>
            <Route path='/avenue_verte_osmoy' component={Avenue_Verte_Osmoy}/>
            <Route path='/avenue_verte_saint-aubin-le-cauf' component={Avenue_Verte_Saint_Aubin_le_Cauf}/>
            <Route path='/avenue_verte_saint-vaast' component={Avenue_Verte_Saint_Vaast}/>
            <Route path='/basilique_lisieux' component={Basilique_Lisieux}/>
            <Route path='/biomarine' component={Biomarine}/>
            <Route path='/cathedrale_amiens' component={Cathedrale_Amiens}/>
            <Route path='/cathedrale_beauvais' component={Cathedrale_Beauvais}/>
            <Route path='/cathedrale_rouen' component={Cathedrale_Rouen}/>
            <Route path='/chateau_chantilly' component={Chateau_Chantilly}/>
            <Route path='/chateau_dieppe' component={Chateau_Dieppe}/>
            <Route path='/chateau_harcourt' component={Chateau_Harcourt}/>
            <Route path='/chateau_pierrefonds' component={Chateau_Pierrefonds}/>
            <Route path='/chateau_vascoeuil' component={Chateau_Vascoeuil}/>
            <Route path='/cimetiere_des_canadiens' component={Cimetiere_des_Canadiens}/>
            <Route path='/domaine_du_champ_de_bataille' component={Domaine_du_Champ_de_Bataille}/>
            <Route path='/eglise_saint-joseph' component={Eglise_Saint_Joseph}/>
            <Route path='/estran' component={Estran}/>
            <Route path='/giverny' component={Giverny}/>
            <Route path='/gros-horloge' component={Gros_Horloge}/>
            <Route path='/hortillonnages' component={Hortillonnages}/>
            <Route path='/le_bec-hellouin' component={Le_Bec_Hellouin}/>
            <Route path='/le_sentier_du_verger' component={Le_Sentier_du_Verger}/>
            <Route path='/lillebonne' component={Lillebonne}/>
            <Route path='/maison_jules_verne' component={Maison_Jules_Verne}/>
            <Route path='/manoir_ango' component={Manoir_Ango}/>
            <Route path='/memorial' component={Memorial}/>
            <Route path='/montreuil-sur-mer' component={Montreuil_sur_Mer}/>
            <Route path='/musee_beaux_arts' component={Musee_Beaux_Arts}/>
            <Route path='/musee_emma_bovary' component={Musee_Emma_Bovary}/>
            <Route path='/panorama_evreux' component={Panorama_Evreux}/>
            <Route path='/panorama_marais_vernier' component={Panorama_Marais_Vernier}/>
            <Route path='/panorama_vert_village' component={Panorama_Vert_Village}/>
            <Route path='/panorama_xxl' component={Panorama_XXL}/>
            <Route path='/phare_d_ailly' component={Phare_d_Ailly}/>
            <Route path='/plan_eau_canada' component={Plan_eau_Canada}/>
            <Route path='/quartier_saint-leu' component={Quartier_Saint_Leu}/>
            <Route path='/varenne' component={Varenne}/>
            <Route path='/versailles' component={Versailles}/>

            <Route path='/contact' component={Contact}/>
            <Route path='/notfound' component={NotFound}/>
            <Redirect to="/notfound" />
        </Switch>
    </Router>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
