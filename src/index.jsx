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
import Berneval from './components/Littoral/Berneval'
import Boulogne from './components/Littoral/Boulogne'
import Criel from './components/Littoral/Criel'
import Dieppe from './components/Littoral/Dieppe'
import Equihen from './components/Littoral/Equihen'
import Etaples from './components/Littoral/Etaples'
import Etretat from './components/Littoral/Etretat'
import Fecamp from './components/Littoral/Fecamp'
import Hardelot from './components/Littoral/Hardelot'
import Le_Crotoy from './components/Littoral/Le_Crotoy'
import Le_Hourdel from './components/Littoral/Le_Hourdel'
import Le_Treport from './components/Littoral/Le_Treport'
import Les_Grandes_Dalles from './components/Littoral/Les_Grandes_Dalles'
import Les_Petites_Dalles from './components/Littoral/Les_Petites_Dalles'
import Merlimont from './components/Littoral/Merlimont'
import Mers from './components/Littoral/Mers'
import Mesnil_Val from './components/Littoral/Mesnil_Val'
import Pourville from './components/Littoral/Pourville'
import Puys from './components/Littoral/Puys'
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

import Seine from './components/Seine/Seine'
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
            <Route path='/berneval' component={Berneval}/>
            <Route path='/boulogne' component={Boulogne}/>
            <Route path='/criel' component={Criel}/>
            <Route path='/dieppe' component={Dieppe}/>
            <Route path='/equihen' component={Equihen}/>
            <Route path='/etaples' component={Etaples}/>
            <Route path='/etretat' component={Etretat}/>
            <Route path='/fecamp' component={Fecamp}/>
            <Route path='/hardelot' component={Hardelot}/>
            <Route path='/le_crotoy' component={Le_Crotoy}/>
            <Route path='/le_hourdel' component={Le_Hourdel}/>
            <Route path='/le_treport' component={Le_Treport}/>
            <Route path='/les_grandes_dalles' component={Les_Grandes_Dalles}/>
            <Route path='/les_petites_dalles' component={Les_Petites_Dalles}/>
            <Route path='/merlimont' component={Merlimont}/>
            <Route path='/mers' component={Mers}/>
            <Route path='/mesnil_val' component={Mesnil_Val}/>
            <Route path='/pourville' component={Pourville}/>
            <Route path='/puys' component={Puys}/>
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

            <Route path='/seine' component={Seine}/>
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
