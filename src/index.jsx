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
import Saint_Pierre_en_Port from './components/Littoral/Saint_Pierre_en_Port'
import Saint_Valery_en_Caux from './components/Littoral/Saint_Valery_en_Caux'
import Saint_Valery_sur_Somme from './components/Littoral/Saint_Valery_sur_Somme'
import Sainte_Cecile from './components/Littoral/Sainte_Cecile'
import Sainte_Marguerite from './components/Littoral/Sainte_Marguerite'
import Sotteville from './components/Littoral/Sotteville'
import Stella from './components/Littoral/Stella'
import Varengeville from './components/Littoral/Varengeville'
import VEletot from './components/Littoral/VEletot'
import Veules from './components/Littoral/Veules'
import Veulettes from './components/Littoral/Veulettes'
import VGrainval from './components/Littoral/VGrainval'
import Wimereux from './components/Littoral/Wimereux'
import Yport from './components/Littoral/Yport'

import Seine from './components/Seine/Seine'
import Barrage_Poses from './components/Seine/Barrage_Poses'
import Bennecourt from './components/Seine/Bennecourt'
import Caudebec from './components/Seine/Caudebec'
import Cleon from './components/Seine/Cleon'
import Duclair from './components/Seine/Duclair'
import Hautot from './components/Seine/Hautot'
import Heurteauville from './components/Seine/Heurteauville'
import Jumieges from './components/Seine/Jumieges'
import La_Mailleray_sur_Seine from './components/Seine/La_Mailleray_sur_Seine'
import La_Roche_Guyon from './components/Seine/La_Roche_Guyon'
import Le_Mesnil_sous_Jumieges from './components/Seine/Le_Mesnil_sous_Jumieges'
import Le_Plessis from './components/Seine/Le_Plessis'
import Le_Thuit from './components/Seine/Le_Thuit'
import Le_Val_Pitant from './components/Seine/Le_Val_Pitant'
import Les_Andelys from './components/Seine/Les_Andelys'
import Les_Mousseaux from './components/Seine/Les_Mousseaux'
import Limetz_Villez from './components/Seine/Limetz_Villez'
import Muids from './components/Seine/Muids'
import Notre_Dame_de_Bliquetuit from './components/Seine/Notre_Dame_de_Bliquetuit'
import Notre_Dame_de_l_Isle from './components/Seine/Notre_Dame_de_l_Isle'
import Passage_du_Trait from './components/Seine/Passage_du_Trait'
import Passage_d_Yssainville from './components/Seine/Passage_d_Yssainville'
import Port_Jumieges from './components/Seine/Port_Jumieges'
import Port_Mort from './components/Seine/Port_Mort'
import Rouen from './components/Seine/Rouen'
import Sahurs from './components/Seine/Sahurs'
import Saint_Aubin_les_Elbeuf from './components/Seine/Saint_Aubin_les_Elbeuf'
import Saint_Maur from './components/Seine/Saint_Maur'
import Saint_Nicolas_de_Bliquetuit from './components/Seine/Saint_Nicolas_de_Bliquetuit'
import Saint_Paul from './components/Seine/Saint_Paul'
import Saint_Pierre_de_Manneville from './components/Seine/Saint_Pierre_de_Manneville'
import Val_de_la_Haye from './components/Seine/Val_de_la_Haye'
import Vernon from './components/Seine/Vernon'
import Villequier from './components/Seine/Villequier'

import Autres from './components/Autres/Autres'
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
            <Route path='/saint-pierre-en-port' component={Saint_Pierre_en_Port}/>
            <Route path='/saint-valery-en-caux' component={Saint_Valery_en_Caux}/>
            <Route path='/saint-valery-sur-somme' component={Saint_Valery_sur_Somme}/>
            <Route path='/sainte-cecile_plage' component={Sainte_Cecile}/>
            <Route path='/sainte-marguerite' component={Sainte_Marguerite}/>
            <Route path='/sotteville' component={Sotteville}/>
            <Route path='/stella' component={Stella}/>
            <Route path='/varengeville' component={Varengeville}/>
            <Route path='/veletot' component={VEletot}/>
            <Route path='/veules' component={Veules}/>
            <Route path='/veulettes' component={Veulettes}/>
            <Route path='/vgrainval' component={VGrainval}/>
            <Route path='/wimereux' component={Wimereux}/>
            <Route path='/yport' component={Yport}/>

            <Route path='/seine' component={Seine}/>
            <Route path='/barrage_poses' component={Barrage_Poses}/>
            <Route path='/bennecourt' component={Bennecourt}/>
            <Route path='/caudebec' component={Caudebec}/>
            <Route path='/cleon' component={Cleon}/>
            <Route path='/duclair' component={Duclair}/>
            <Route path='/hautot' component={Hautot}/>
            <Route path='/heurteauville' component={Heurteauville}/>
            <Route path='/jumieges' component={Jumieges}/>
            <Route path='/la_mailleray-sur-seine' component={La_Mailleray_sur_Seine}/>
            <Route path='/la_roche-guyon' component={La_Roche_Guyon}/>
            <Route path='/le_mesnil-sous-jumieges' component={Le_Mesnil_sous_Jumieges}/>
            <Route path='/le_plessis' component={Le_Plessis}/>
            <Route path='/le_thuit' component={Le_Thuit}/>
            <Route path='/le_val_pitant' component={Le_Val_Pitant}/>
            <Route path='/les_andelys' component={Les_Andelys}/>
            <Route path='/les_mousseaux' component={Les_Mousseaux}/>
            <Route path='/limetz-villez' component={Limetz_Villez}/>
            <Route path='/muids' component={Muids}/>
            <Route path='/notre-dame-de-bliquetuit' component={Notre_Dame_de_Bliquetuit}/>
            <Route path='/notre-dame-de-l_isle' component={Notre_Dame_de_l_Isle}/>
            <Route path='/passage_du_trait' component={Passage_du_Trait}/>
            <Route path='/passage_d_yssainville' component={Passage_d_Yssainville}/>
            <Route path='/port_jumieges' component={Port_Jumieges}/>
            <Route path='/port-mort' component={Port_Mort}/>
            <Route path='/rouen' component={Rouen}/>
            <Route path='/sahurs' component={Sahurs}/>
            <Route path='/saint-aubin-les-elbeuf' component={Saint_Aubin_les_Elbeuf}/>
            <Route path='/saint-maur' component={Saint_Maur}/>
            <Route path='/saint-nicolas-de-bliquetuit' component={Saint_Nicolas_de_Bliquetuit}/>
            <Route path='/saint-paul' component={Saint_Paul}/>
            <Route path='/saint-pierre-de-manneville' component={Saint_Pierre_de_Manneville}/>
            <Route path='/val-de-la-haye' component={Val_de_la_Haye}/>
            <Route path='/vernon' component={Vernon}/>
            <Route path='/villequier' component={Villequier}/>

            <Route path='/autres' component={Autres}/>
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
