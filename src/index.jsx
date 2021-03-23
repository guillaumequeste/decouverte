import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Littoral from './components/Littoral/Littoral'
import Anse_du_Guesclin from './components/Littoral/Plages_Ile_et_Vilaine/Anse_du_Guesclin'
import Ault from './components/Littoral/Plages_Somme/Ault'
import Baie from './components/Littoral/Plages_Somme/Baie'
import Belleville from './components/Littoral/Plages_Seine_Maritime/Belleville'
import Benerville_sur_Mer from './components/Littoral/Plages_Calvados/Benerville_sur_Mer'
import Berck from './components/Littoral/Plages_Pas_de_Calais/Berck'
import Berneval from './components/Littoral/Plages_Seine_Maritime/Berneval'
import Blonville_sur_Mer from './components/Littoral/Plages_Calvados/Blonville_sur_Mer'
import Boulogne from './components/Littoral/Plages_Pas_de_Calais/Boulogne'
import Cabourg1 from './components/Littoral/Plages_Calvados/Cabourg1'
import Cabourg2 from './components/Littoral/Plages_Calvados/Cabourg2'
import Cancale1 from './components/Littoral/Plages_Ile_et_Vilaine/Cancale1'
import Cancale2 from './components/Littoral/Plages_Ile_et_Vilaine/Cancale2'
import Cayeux from './components/Littoral/Plages_Somme/Cayeux'
import Colleville_Montgomery from './components/Littoral/Plages_Calvados/Colleville_Montgomery'
import Cricqueboeuf from './components/Littoral/Plages_Calvados/Cricqueboeuf'
import Criel from './components/Littoral/Plages_Seine_Maritime/Criel'
import Deauville from './components/Littoral/Plages_Calvados/Deauville'
import Dieppe from './components/Littoral/Plages_Seine_Maritime/Dieppe'
import Dives_sur_Mer from './components/Littoral/Plages_Calvados/Dives_sur_Mer'
import Dune_du_Pilat from './components/Littoral/Plages_Gironde/Dune_du_Pilat'
import Equihen from './components/Littoral/Plages_Pas_de_Calais/Equihen'
import Etaples from './components/Littoral/Plages_Pas_de_Calais/Etaples'
import Etretat from './components/Littoral/Plages_Seine_Maritime/Etretat'
import Fecamp from './components/Littoral/Plages_Seine_Maritime/Fecamp'
import Fort_Mahon from './components/Littoral/Plages_Somme/Fort_Mahon'
import Hardelot from './components/Littoral/Plages_Pas_de_Calais/Hardelot'
import Hermanville_sur_Mer from './components/Littoral/Plages_Calvados/Hermanville_sur_Mer'
import Houlgate from './components/Littoral/Plages_Calvados/Houlgate'
import Le_Bois_de_Cise from './components/Littoral/Plages_Somme/Le_Bois_de_Cise'
import Le_Croquet from './components/Littoral/Plages_Seine_Maritime/Le_Croquet'
import Le_Crotoy from './components/Littoral/Plages_Somme/Le_Crotoy'
import Le_Havre from './components/Littoral/Plages_Seine_Maritime/Le_Havre'
import Le_Hourdel from './components/Littoral/Plages_Somme/Le_Hourdel'
import Saint_Coulomb from './components/Littoral/Plages_Ile_et_Vilaine/Saint_Coulomb'
import Le_Touquet from './components/Littoral/Plages_Pas_de_Calais/Le_Touquet'
import Le_Treport from './components/Littoral/Plages_Seine_Maritime/Le_Treport'
import Les_Grandes_Dalles from './components/Littoral/Plages_Seine_Maritime/Les_Grandes_Dalles'
import Les_Petites_Dalles from './components/Littoral/Plages_Seine_Maritime/Les_Petites_Dalles'
import Lion_sur_Mer from './components/Littoral/Plages_Calvados/Lion_sur_Mer'
import Merlimont from './components/Littoral/Plages_Pas_de_Calais/Merlimont'
import Merville_Franceville_Plage from './components/Littoral/Plages_Calvados/Merville_Franceville_Plage'
import Mers from './components/Littoral/Plages_Somme/Mers'
import Mesnil_Val from './components/Littoral/Plages_Seine_Maritime/Mesnil_Val'
import Narbonne from './components/Littoral/Plages_Aude/Narbonne'
import Pain_de_Sucre from './components/Littoral/Plages_Seine_Maritime/Pain_de_Sucre'
import Phare_de_la_Heve from './components/Littoral/Plages_Seine_Maritime/Phare_de_la_Heve'
import Plage_Ouistreham from './components/Littoral/Plages_Calvados/Plage_Ouistreham'
import Pointe_de_la_Varde from './components/Littoral/Plages_Ile_et_Vilaine/Pointe_de_la_Varde'
import Pointe_Ouistreham from './components/Littoral/Plages_Calvados/Pointe_Ouistreham'
import Port_Dives_sur_Mer from './components/Littoral/Plages_Calvados/Port_Dives_sur_Mer'
import Port_Ouistreham from './components/Littoral/Plages_Calvados/Port_Ouistreham'
import Pourville from './components/Littoral/Plages_Seine_Maritime/Pourville'
import Puys from './components/Littoral/Plages_Seine_Maritime/Puys'
import Quend from './components/Littoral/Plages_Somme/Quend'
import Quiberville from './components/Littoral/Plages_Seine_Maritime/Quiberville'
import Rotheneuf1 from './components/Littoral/Plages_Ile_et_Vilaine/Rotheneuf1'
import Rotheneuf2 from './components/Littoral/Plages_Ile_et_Vilaine/Rotheneuf2'
import Saint_Aubin from './components/Littoral/Plages_Seine_Maritime/Saint_Aubin'
import Saint_Jouin_Bruneval_Belvedere from './components/Littoral/Plages_Seine_Maritime/Saint_Jouin_Bruneval_Belvedere'
import Saint_Jouin_Bruneval_Plage from './components/Littoral/Plages_Seine_Maritime/Saint_Jouin_Bruneval_Plage'
import Saint_Malo1 from './components/Littoral/Plages_Ile_et_Vilaine/Saint_Malo1'
import Saint_Malo2 from './components/Littoral/Plages_Ile_et_Vilaine/Saint_Malo2'
import Saint_Pierre_en_Port from './components/Littoral/Plages_Seine_Maritime/Saint_Pierre_en_Port'
import Saint_Valery_en_Caux from './components/Littoral/Plages_Seine_Maritime/Saint_Valery_en_Caux'
import Saint_Valery_sur_Somme from './components/Littoral/Plages_Somme/Saint_Valery_sur_Somme'
import Sainte_Adresse from './components/Littoral/Plages_Seine_Maritime/Sainte_Adresse'
import Sainte_Cecile from './components/Littoral/Plages_Pas_de_Calais/Sainte_Cecile'
import Sainte_Marguerite from './components/Littoral/Plages_Seine_Maritime/Sainte_Marguerite'
import Sotteville from './components/Littoral/Plages_Seine_Maritime/Sotteville'
import Stella from './components/Littoral/Plages_Pas_de_Calais/Stella'
import Table_d_Orientation_Sainte_Adresse from './components/Littoral/Plages_Seine_Maritime/Table_d_Orientation_Sainte_Adresse'
import Trouville_sur_Mer1 from './components/Littoral/Plages_Calvados/Trouville_sur_Mer1'
import Trouville_sur_Mer2 from './components/Littoral/Plages_Calvados/Trouville_sur_Mer2'
import Valleuse_Boucherot from './components/Littoral/Plages_Seine_Maritime/Valleuse_Boucherot'
import Valleuse_de_Vaucottes from './components/Littoral/Plages_Seine_Maritime/Valleuse_de_Vaucottes'
import Varaville from './components/Littoral/Plages_Calvados/Varaville'
import Varengeville from './components/Littoral/Plages_Seine_Maritime/Varengeville'
import VEletot from './components/Littoral/Plages_Seine_Maritime/VEletot'
import Veules from './components/Littoral/Plages_Seine_Maritime/Veules'
import Veulettes from './components/Littoral/Plages_Seine_Maritime/Veulettes'
import VGrainval from './components/Littoral/Plages_Seine_Maritime/VGrainval'
import Villers_sur_Mer1 from './components/Littoral/Plages_Calvados/Villers_sur_Mer1'
import Villers_sur_Mer2 from './components/Littoral/Plages_Calvados/Villers_sur_Mer2'
import Villerville from './components/Littoral/Plages_Calvados/Villerville'
import Wimereux from './components/Littoral/Plages_Pas_de_Calais/Wimereux'
import Yport from './components/Littoral/Plages_Seine_Maritime/Yport'

import Seine from './components/Seine/Seine'
import Aizier from './components/Seine/Bords_de_Seine_Eure/Aizier'
import Andresy from './components/Seine/Bords_de_Seine_Yvelines/Andresy'
import Barrage_Poses from './components/Seine/Bords_de_Seine_Eure/Barrage_Poses'
import Bennecourt from './components/Seine/Bords_de_Seine_Yvelines/Bennecourt'
import Berville_sur_Mer from './components/Seine/Bords_de_Seine_Eure/Berville_sur_Mer'
import Caudebec from './components/Seine/Bords_de_Seine_Seine_Maritime/Caudebec'
import Cleon from './components/Seine/Bords_de_Seine_Seine_Maritime/Cleon'
import Conflans_Sainte_Honorine from './components/Seine/Bords_de_Seine_Yvelines/Conflans_Sainte_Honorine'
import Duclair from './components/Seine/Bords_de_Seine_Seine_Maritime/Duclair'
import Gargenville from './components/Seine/Bords_de_Seine_Yvelines/Gargenville'
import Guernes from './components/Seine/Bords_de_Seine_Yvelines/Guernes'
import Hardricourt from './components/Seine/Bords_de_Seine_Yvelines/Hardricourt'
import Hautot from './components/Seine/Bords_de_Seine_Seine_Maritime/Hautot'
import Herblay from './components/Seine/Bords_de_Seine_Yvelines/Herblay'
import Heurteauville from './components/Seine/Bords_de_Seine_Seine_Maritime/Heurteauville'
import Honfleur from './components/Seine/Bords_de_Seine_Calvados/Honfleur'
import Honfleur_plage from './components/Seine/Bords_de_Seine_Calvados/Honfleur_plage'
import Honfleur_point_de_vue from './components/Seine/Bords_de_Seine_Calvados/Honfleur_point_de_vue'
import Honfleur_zone_portuaire from './components/Seine/Bords_de_Seine_Calvados/Honfleur_zone_portuaire'
import Ile_Chaussee from './components/Seine/Bords_de_Seine_Yvelines/Ile_Chaussee'
import Ile_Cite from './components/Seine/Bords_de_Seine_Paris/Ile_Cite'
import Ile_Derivation from './components/Seine/Bords_de_Seine_Yvelines/Ile_Derivation'
import Ile_l_Aumone from './components/Seine/Bords_de_Seine_Yvelines/Ile_l_Aumone'
import Ile_Saint_Louis from './components/Seine/Bords_de_Seine_Paris/Ile_Saint_Louis'
import Jumieges from './components/Seine/Bords_de_Seine_Seine_Maritime/Jumieges'
import Juziers from './components/Seine/Bords_de_Seine_Yvelines/Juziers'
import La_Mailleray_sur_Seine from './components/Seine/Bords_de_Seine_Seine_Maritime/La_Mailleray_sur_Seine'
import La_Roche_Guyon from './components/Seine/Bords_de_Seine_Yvelines/La_Roche_Guyon'
import La_Roquette from './components/Seine/Bords_de_Seine_Eure/La_Roquette'
import La_Vacquerie from './components/Seine/Bords_de_Seine_Calvados/La_Vacquerie'
import Le_Mesnil_sous_Jumieges from './components/Seine/Bords_de_Seine_Seine_Maritime/Le_Mesnil_sous_Jumieges'
import Le_Plessis from './components/Seine/Bords_de_Seine_Eure/Le_Plessis'
import Le_Thuit from './components/Seine/Bords_de_Seine_Eure/Le_Thuit'
import Le_Val_d_Hazey from './components/Seine/Bords_de_Seine_Eure/Le_Val_d_Hazey'
import Le_Val_Pitant from './components/Seine/Bords_de_Seine_Eure/Le_Val_Pitant'
import Les_Andelys from './components/Seine/Bords_de_Seine_Eure/Les_Andelys'
import Les_Mousseaux from './components/Seine/Bords_de_Seine_Eure/Les_Mousseaux'
import Les_Mureaux from './components/Seine/Bords_de_Seine_Yvelines/Les_Mureaux'
import LimayA from './components/Seine/Bords_de_Seine_Yvelines/LimayA'
import LimayB from './components/Seine/Bords_de_Seine_Yvelines/LimayB'
import LimayC from './components/Seine/Bords_de_Seine_Yvelines/LimayC'
import LimayD from './components/Seine/Bords_de_Seine_Yvelines/LimayD'
import Limetz_Villez from './components/Seine/Bords_de_Seine_Yvelines/Limetz_Villez'
import Meulan_en_Yvelines from './components/Seine/Bords_de_Seine_Yvelines/Meulan_en_Yvelines'
import Mezy_sur_Seine from './components/Seine/Bords_de_Seine_Yvelines/Mezy_sur_Seine'
import Montesson from './components/Seine/Bords_de_Seine_Yvelines/Montesson'
import Nanterre from './components/Seine/Bords_de_Seine_Hauts_de_Seine/Nanterre'
import Notre_Dame from './components/Seine/Bords_de_Seine_Paris/Notre_Dame'
import Notre_Dame_de_Bliquetuit from './components/Seine/Bords_de_Seine_Seine_Maritime/Notre_Dame_de_Bliquetuit'
import Notre_Dame_de_l_Isle from './components/Seine/Bords_de_Seine_Eure/Notre_Dame_de_l_Isle'
import Panorama_du_Mont_Joli from './components/Seine/Bords_de_Seine_Calvados/Panorama_du_Mont_Joli'
import Panorama_Val_d_Herblay from './components/Seine/Bords_de_Seine_Yvelines/Panorama_Val_d_Herblay'
import Passage_du_Trait from './components/Seine/Bords_de_Seine_Seine_Maritime/Passage_du_Trait'
import Passage_d_Yssainville from './components/Seine/Bords_de_Seine_Seine_Maritime/Passage_d_Yssainville'
import Phare_de_la_Roque from './components/Seine/Bords_de_Seine_Eure/Phare_de_la_Roque'
import Pont_au_Change from './components/Seine/Bords_de_Seine_Paris/Pont_au_Change'
import Pont_au_Double from './components/Seine/Bords_de_Seine_Paris/Pont_au_Double'
import Pont_Charles_de_Gaulle from './components/Seine/Bords_de_Seine_Paris/Pont_Charles_de_Gaulle'
import Pont_des_Arts from './components/Seine/Bords_de_Seine_Paris/Pont_des_Arts'
import Pont_de_Sully from './components/Seine/Bords_de_Seine_Paris/Pont_de_Sully'
import Pont_d_Iena from './components/Seine/Bords_de_Seine_Paris/Pont_d_Iena'
import Pont_du_Garigliano from './components/Seine/Bords_de_Seine_Paris/Pont_du_Garigliano'
import Pont_Marie from './components/Seine/Bords_de_Seine_Paris/Pont_Marie'
import Pont_National from './components/Seine/Bords_de_Seine_Paris/Pont_National'
import Pont_Neuf from './components/Seine/Bords_de_Seine_Paris/Pont_Neuf'
import Pont_Saint_Cloud from './components/Seine/Bords_de_Seine_Hauts_de_Seine/Pont_Saint_Cloud'
import Pont_Saint_Louis from './components/Seine/Bords_de_Seine_Paris/Pont_Saint_Louis'
import Pont_Saint_Michel from './components/Seine/Bords_de_Seine_Paris/Pont_Saint_Michel'
import Porcheville from './components/Seine/Bords_de_Seine_Yvelines/Porcheville'
import Port_Jerome from './components/Seine/Bords_de_Seine_Seine_Maritime/Port_Jerome'
import Port_Jumieges from './components/Seine/Bords_de_Seine_Seine_Maritime/Port_Jumieges'
import Port_Morin from './components/Seine/Bords_de_Seine_Eure/Port_Morin'
import Port_Mort from './components/Seine/Bords_de_Seine_Eure/Port_Mort'
import Quillebeuf from './components/Seine/Bords_de_Seine_Eure/Quillebeuf'
import Rouen from './components/Seine/Bords_de_Seine_Seine_Maritime/Rouen'
import Sahurs from './components/Seine/Bords_de_Seine_Seine_Maritime/Sahurs'
import Saint_Aubin_les_Elbeuf from './components/Seine/Bords_de_Seine_Seine_Maritime/Saint_Aubin_les_Elbeuf'
import Saint_Maur from './components/Seine/Bords_de_Seine_Seine_Maritime/Saint_Maur'
import Saint_Nicolas_de_Bliquetuit from './components/Seine/Bords_de_Seine_Seine_Maritime/Saint_Nicolas_de_Bliquetuit'
import Saint_Paul from './components/Seine/Bords_de_Seine_Seine_Maritime/Saint_Paul'
import Saint_Pierre_de_Manneville from './components/Seine/Bords_de_Seine_Seine_Maritime/Saint_Pierre_de_Manneville'
import Sandrancourt from './components/Seine/Bords_de_Seine_Yvelines/Sandrancourt'
import Sartrouville from './components/Seine/Bords_de_Seine_Yvelines/Sartrouville'
import Tancarville from './components/Seine/Bords_de_Seine_Seine_Maritime/Tancarville'
import Tosny from './components/Seine/Bords_de_Seine_Eure/Tosny'
import Triel_sur_Seine from './components/Seine/Bords_de_Seine_Yvelines/Triel_sur_Seine'
import Val_de_la_Haye from './components/Seine/Bords_de_Seine_Seine_Maritime/Val_de_la_Haye'
import Vatteville from './components/Seine/Bords_de_Seine_Eure/Vatteville'
import Vaux_sur_Seine from './components/Seine/Bords_de_Seine_Yvelines/Vaux_sur_Seine'
import Vernon from './components/Seine/Bords_de_Seine_Eure/Vernon'
import Vetheuil from './components/Seine/Bords_de_Seine_Yvelines/Vetheuil'
import Vieux_Port from './components/Seine/Bords_de_Seine_Eure/Vieux_Port'
import Villequier from './components/Seine/Bords_de_Seine_Seine_Maritime/Villequier'
import Villers_sur_le_Roule from './components/Seine/Bords_de_Seine_Eure/Villers_sur_le_Roule'

import Autres from './components/Autres/Autres'
import Abbaye_Mortemer from './components/Autres/Patrimoine_Seine_Maritime/Abbaye_Mortemer'
import Abbaye_Notre_Dame_du_Bec from './components/Autres/Patrimoine_Eure/Abbaye_Notre_Dame_du_Bec'
import Abbaye_Saint_Georges_Boscherville from './components/Autres/Patrimoine_Seine_Maritime/Abbaye_Saint_Georges_Boscherville'
import Arc_de_Triomphe from './components/Autres/Patrimoine_Paris/Arc_de_Triomphe'
import Arenes_Lutece from './components/Autres/Patrimoine_Paris/Arenes_Lutece'
import Auvers_sur_Oise from './components/Autres/Patrimoine_Val_d_Oise/Auvers_sur_Oise'
import Avenue_Verte_Arques from './components/Autres/Avenue_Verte/Avenue_Verte_Arques'
import Avenue_Verte_Dampierre from './components/Autres/Avenue_Verte/Avenue_Verte_Dampierre'
import Avenue_Verte_Mesnieres from './components/Autres/Avenue_Verte/Avenue_Verte_Mesnieres.jsx'
import Avenue_Verte_Meulers from './components/Autres/Avenue_Verte/Avenue_Verte_Meulers.jsx'
import Avenue_Verte_Osmoy from './components/Autres/Avenue_Verte/Avenue_Verte_Osmoy.jsx'
import Avenue_Verte_Saint_Aubin_le_Cauf from './components/Autres/Avenue_Verte/Avenue_Verte_Saint_Aubin_le_Cauf.jsx'
import Avenue_Verte_Saint_Vaast from './components/Autres/Avenue_Verte/Avenue_Verte_Saint_Vaast.jsx'
import Basilique_Lisieux from './components/Autres/Patrimoine_Calvados/Basilique_Lisieux'
import Basilique_Saint_Denis from './components/Autres/Patrimoine_Paris/Basilique_Saint_Denis'
import Biomarine from './components/Autres/Patrimoine_Seine_Maritime/Biomarine'
import BNF from './components/Autres/Patrimoine_Paris/BNF'
import Buttes_Chaumont from './components/Autres/Patrimoine_Paris/Buttes_Chaumont'
import Carrousel_Louvre from './components/Autres/Patrimoine_Paris/Carrousel_Louvre'
import Catacombes from './components/Autres/Patrimoine_Paris/Catacombes'
import Cathedrale_Amiens from './components/Autres/Patrimoine_Somme/Cathedrale_Amiens'
import Cathedrale_Beauvais from './components/Autres/Patrimoine_Oise/Cathedrale_Beauvais'
import Cathedrale_Reims from './components/Autres/Patrimoine_Marne/Cathedrale_Reims'
import Cathedrale_Rouen from './components/Autres/Patrimoine_Seine_Maritime/Cathedrale_Rouen'
import Cathedrale_Sainte_Trinite from './components/Autres/Patrimoine_Paris/Cathedrale_Sainte_Trinite'
import Centre_Pompidou from './components/Autres/Patrimoine_Paris/Centre_Pompidou'
import Champagne_Lanson from './components/Autres/Patrimoine_Marne/Champagne_Lanson'
import Champ_de_Mars from './components/Autres/Patrimoine_Paris/Champ_de_Mars'
import Champs_Elysees from './components/Autres/Patrimoine_Paris/Champs_Elysees'
import Chateau_Carrouges from './components/Autres/Patrimoine_Orne/Chateau_Carrouges.jsx'
import Chateau_Chantilly from './components/Autres/Patrimoine_Oise/Chateau_Chantilly.jsx'
import Chateau_Dieppe from './components/Autres/Patrimoine_Seine_Maritime/Chateau_Dieppe'
import Chateau_Fontainebleau from './components/Autres/Patrimoine_Seine_et_Marne/Chateau_Fontainebleau'
import Chateau_Harcourt from './components/Autres/Patrimoine_Eure/Chateau_Harcourt'
import Chateau_Pierrefonds from './components/Autres/Patrimoine_Oise/Chateau_Pierrefonds'
import Chateau_Vascoeuil from './components/Autres/Patrimoine_Eure/Chateau_Vascoeuil'
import Cimetiere_des_Canadiens from './components/Autres/Patrimoine_Seine_Maritime/Cimetiere_des_Canadiens'
import Cite_du_Cinema from './components/Autres/Patrimoine_Paris/Cite_du_Cinema'
import Coulee_Verte from './components/Autres/Patrimoine_Paris/Coulee_Verte'
import Domaine_Saint_Cloud from './components/Autres/Patrimoine_Paris/Domaine_Saint_Cloud'
import Domaine_du_Champ_de_Bataille from './components/Autres/Patrimoine_Eure/Domaine_du_Champ_de_Bataille'
import Eglise_Saint_Germain_des_Pres from './components/Autres/Patrimoine_Paris/Eglise_Saint_Germain_des_Pres'
import Eglise_Saint_Joseph from './components/Autres/Patrimoine_Seine_Maritime/Eglise_Saint_Joseph'
import Eglise_Saint_Julien_le_Pauvre from './components/Autres/Patrimoine_Paris/Eglise_Saint_Julien_le_Pauvre'
import Eglise_Saint_Sulpice from './components/Autres/Patrimoine_Paris/Eglise_Saint_Sulpice'
import Estran from './components/Autres/Patrimoine_Seine_Maritime/Estran.jsx'
import Funiculaire_Montmartre from './components/Autres/Patrimoine_Paris/Funiculaire_Montmartre.jsx'
import Funiculaire_Treport from './components/Autres/Patrimoine_Seine_Maritime/Funiculaire_Treport.jsx'
import Galerie_Colbert from './components/Autres/Patrimoine_Paris/Galerie_Colbert.jsx'
import Galeries_Lafayette from './components/Autres/Patrimoine_Paris/Galeries_Lafayette.jsx'
import Galerie_Vero_Dodat from './components/Autres/Patrimoine_Paris/Galerie_Vero_Dodat.jsx'
import Galerie_Vivienne from './components/Autres/Patrimoine_Paris/Galerie_Vivienne.jsx'
import Gare_Montparnasse from './components/Autres/Patrimoine_Paris/Gare_Montparnasse.jsx'
import Gare_Saint_Lazare from './components/Autres/Patrimoine_Paris/Gare_Saint_Lazare.jsx'
import Giverny from './components/Autres/Patrimoine_Eure/Giverny'
import Grande_Arche from './components/Autres/Patrimoine_Paris/Grande_Arche'
import Gros_Horloge from './components/Autres/Patrimoine_Seine_Maritime/Gros_Horloge'
import Haras_du_Pin from './components/Autres/Patrimoine_Orne/Haras_du_Pin'
import Hortillonnages from './components/Autres/Patrimoine_Somme/Hortillonnages'
import Jardin_Palais_Royal from './components/Autres/Patrimoine_Paris/Jardin_Palais_Royal'
import Jardin_Tuileries from './components/Autres/Patrimoine_Paris/Jardin_Tuileries'
import Lac_du_Salagou from './components/Autres/Patrimoine_Herault/Lac_du_Salagou'
import La_Villette from './components/Autres/Patrimoine_Paris/La_Villette'
import Le_Bec_Hellouin from './components/Autres/Patrimoine_Eure/Le_Bec_Hellouin'
import Le_Sentier_du_Verger from './components/Autres/Patrimoine_Seine_Maritime/Le_Sentier_du_Verger'
import Maison_Jules_Verne from './components/Autres/Patrimoine_Somme/Maison_Jules_Verne'
import Lillebonne from './components/Autres/Patrimoine_Seine_Maritime/Lillebonne'
import Louvre from './components/Autres/Patrimoine_Paris/Louvre'
import Manoir_Ango from './components/Autres/Patrimoine_Seine_Maritime/Manoir_Ango'
import Martyrium from './components/Autres/Patrimoine_Paris/Martyrium'
import Memorial from './components/Autres/Patrimoine_Seine_Maritime/Memorial'
import Montreuil_sur_Mer from './components/Autres/Patrimoine_Pas_de_Calais/Montreuil_sur_Mer'
import Musee_Beaux_Arts from './components/Autres/Patrimoine_Seine_Maritime/Musee_Beaux_Arts'
import Musee_Carte from './components/Autres/Patrimoine_Paris/Musee_Carte'
import Musee_Egouts from './components/Autres/Patrimoine_Paris/Musee_Egouts'
import Musee_Emma_Bovary from './components/Autres/Patrimoine_Seine_Maritime/Musee_Emma_Bovary'
import Musee_Grevin from './components/Autres/Patrimoine_Paris/Musee_Grevin'
import Musee_Jacquemart from './components/Autres/Patrimoine_Paris/Musee_Jacquemart'
import Musee_Marmottan_Monet from './components/Autres/Patrimoine_Paris/Musee_Marmottan_Monet'
import Musee_Monnaie from './components/Autres/Patrimoine_Paris/Musee_Monnaie'
import Musee_Orsay from './components/Autres/Patrimoine_Paris/Musee_Orsay'
import Musee_Parfum from './components/Autres/Patrimoine_Paris/Musee_Parfum'
import Notre_Dame_Paris from './components/Autres/Patrimoine_Paris/Notre_Dame_Paris'
import Opera_Garnier from './components/Autres/Patrimoine_Paris/Opera_Garnier'
import Palais_de_Justice from './components/Autres/Patrimoine_Paris/Palais_de_Justice'
import Palais_de_la_Decouverte from './components/Autres/Patrimoine_Paris/Palais_de_la_Decouverte'
import Panorama_Evreux from './components/Autres/Patrimoine_Eure/Panorama_Evreux'
import Panorama_Marais_Vernier from './components/Autres/Patrimoine_Eure/Panorama_Marais_Vernier'
import Panorama_Vert_Village from './components/Autres/Patrimoine_Eure/Panorama_Vert_Village'
import Panorama_XXL from './components/Autres/Patrimoine_Seine_Maritime/Panorama_XXL.jsx'
import Pantheon from './components/Autres/Patrimoine_Paris/Pantheon.jsx'
import Parc_des_Princes from './components/Autres/Patrimoine_Paris/Parc_des_Princes.jsx'
import Passage_Brady from './components/Autres/Patrimoine_Paris/Passage_Brady.jsx'
import Passage_des_Panoramas from './components/Autres/Patrimoine_Paris/Passage_des_Panoramas.jsx'
import Passage_du_Grand_Cerf from './components/Autres/Patrimoine_Paris/Passage_du_Grand_Cerf.jsx'
import Pere_Lachaise from './components/Autres/Patrimoine_Paris/Pere_Lachaise.jsx'
import Petite_Ceinture from './components/Autres/Patrimoine_Paris/Petite_Ceinture.jsx'
import Petite_France from './components/Autres/Patrimoine_Bas_Rhin/Petite_France.jsx'
import Petit_Palais from './components/Autres/Patrimoine_Paris/Petit_Palais.jsx'
import Phare_d_Ailly from './components/Autres/Patrimoine_Seine_Maritime/Phare_d_Ailly'
import Plan_eau_Canada from './components/Autres/Patrimoine_Oise/Plan_eau_Canada.jsx'
import Pont_du_Gard from './components/Autres/Patrimoine_Gard/Pont_du_Gard'
import Puy_de_Dome from './components/Autres/Patrimoine_Puy_de_Dome/Puy_de_Dome'
import Quartier_Saint_Leu from './components/Autres/Patrimoine_Somme/Quartier_Saint_Leu'
import Rue_des_Thermopyles from './components/Autres/Patrimoine_Paris/Rue_des_Thermopyles.jsx'
import Sacre_Coeur from './components/Autres/Patrimoine_Paris/Sacre_Coeur.jsx'
import Square_Vert_Galant from './components/Autres/Patrimoine_Paris/Square_Vert_Galant.jsx'
import Stade_Jean_Boin from './components/Autres/Patrimoine_Paris/Stade_Jean_Boin.jsx'
import Tapisserie_Bayeux from './components/Autres/Patrimoine_Calvados/Tapisserie_Bayeux'
import Tour_Montparnasse from './components/Autres/Patrimoine_Paris/Tour_Montparnasse.jsx'
import Varenne from './components/Autres/Patrimoine_Seine_Maritime/Varenne'
import Versailles from './components/Autres/Patrimoine_Yvelines/Versailles'

import Contact from './components/Contact'
import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import ScrollToTop from './components/ScrollToTop'

const Root = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/littoral' component={Littoral}/>
            <Route path='/anse_du_guesclin' component={Anse_du_Guesclin}/>
            <Route path='/ault' component={Ault}/>
            <Route path='/baie_de_somme' component={Baie}/>
            <Route path='/belleville-sur-mer' component={Belleville}/>
            <Route path='/benerville-sur-mer' component={Benerville_sur_Mer}/>
            <Route path='/berck' component={Berck}/>
            <Route path='/berneval' component={Berneval}/>
            <Route path='/blonville-sur-mer' component={Blonville_sur_Mer}/>
            <Route path='/boulogne' component={Boulogne}/>
            <Route path='/cabourg1' component={Cabourg1}/>
            <Route path='/cabourg2' component={Cabourg2}/>
            <Route path='/cancale1' component={Cancale1}/>
            <Route path='/cancale2' component={Cancale2}/>
            <Route path='/cayeux' component={Cayeux}/>
            <Route path='/colleville-montgomery' component={Colleville_Montgomery}/>
            <Route path='/cricqueboeuf' component={Cricqueboeuf}/>
            <Route path='/criel' component={Criel}/>
            <Route path='/deauville' component={Deauville}/>
            <Route path='/dieppe' component={Dieppe}/>
            <Route path='/dives-sur-mer' component={Dives_sur_Mer}/>
            <Route path='/dune_du_pilat' component={Dune_du_Pilat}/>
            <Route path='/equihen' component={Equihen}/>
            <Route path='/etaples' component={Etaples}/>
            <Route path='/etretat' component={Etretat}/>
            <Route path='/fecamp' component={Fecamp}/>
            <Route path='/fort-mahon' component={Fort_Mahon}/>
            <Route path='/hardelot' component={Hardelot}/>
            <Route path='/hermanville-sur-mer' component={Hermanville_sur_Mer}/>
            <Route path='/houlgate' component={Houlgate}/>
            <Route path='/le_bois_de_cise' component={Le_Bois_de_Cise}/>
            <Route path='/le_croquet' component={Le_Croquet}/>
            <Route path='/le_crotoy' component={Le_Crotoy}/>
            <Route path='/le_havre' component={Le_Havre}/>
            <Route path='/le_hourdel' component={Le_Hourdel}/>
            <Route path='/saint-coulomb' component={Saint_Coulomb}/>
            <Route path='/le_touquet' component={Le_Touquet}/>
            <Route path='/le_treport' component={Le_Treport}/>
            <Route path='/les_grandes_dalles' component={Les_Grandes_Dalles}/>
            <Route path='/les_petites_dalles' component={Les_Petites_Dalles}/>
            <Route path='/lion-sur-mer' component={Lion_sur_Mer}/>
            <Route path='/merlimont' component={Merlimont}/>
            <Route path='/merville-franceville-plage' component={Merville_Franceville_Plage}/>
            <Route path='/mers' component={Mers}/>
            <Route path='/mesnil_val' component={Mesnil_Val}/>
            <Route path='/narbonne' component={Narbonne}/>
            <Route path='/pain_de_sucre' component={Pain_de_Sucre}/>
            <Route path='/phare_de_la_heve' component={Phare_de_la_Heve}/>
            <Route path='/plage_ouistreham' component={Plage_Ouistreham}/>
            <Route path='/pointe_de_la_varde' component={Pointe_de_la_Varde}/>
            <Route path='/pointe_ouistreham' component={Pointe_Ouistreham}/>
            <Route path='/port_dives-sur-mer' component={Port_Dives_sur_Mer}/>
            <Route path='/port_ouistreham' component={Port_Ouistreham}/>
            <Route path='/pourville' component={Pourville}/>
            <Route path='/puys' component={Puys}/>
            <Route path='/quend' component={Quend}/>
            <Route path='/quiberville' component={Quiberville}/>
            <Route path='/rotheneuf1' component={Rotheneuf1}/>
            <Route path='/rotheneuf2' component={Rotheneuf2}/>
            <Route path='/saint-aubin' component={Saint_Aubin}/>
            <Route path='/saint-jouin-bruneval_belvedere' component={Saint_Jouin_Bruneval_Belvedere}/>
            <Route path='/saint-jouin-bruneval_plage' component={Saint_Jouin_Bruneval_Plage}/>
            <Route path='/saint-malo1' component={Saint_Malo1}/>
            <Route path='/saint-malo2' component={Saint_Malo2}/>
            <Route path='/saint-pierre-en-port' component={Saint_Pierre_en_Port}/>
            <Route path='/saint-valery-en-caux' component={Saint_Valery_en_Caux}/>
            <Route path='/saint-valery-sur-somme' component={Saint_Valery_sur_Somme}/>
            <Route path='/sainte-adresse' component={Sainte_Adresse}/>
            <Route path='/sainte-cecile_plage' component={Sainte_Cecile}/>
            <Route path='/sainte-marguerite' component={Sainte_Marguerite}/>
            <Route path='/sotteville' component={Sotteville}/>
            <Route path='/stella' component={Stella}/>
            <Route path='/table_d_orientation_sainte-adresse' component={Table_d_Orientation_Sainte_Adresse}/>
            <Route path='/trouville-sur-mer1' component={Trouville_sur_Mer1}/>
            <Route path='/trouville-sur-mer2' component={Trouville_sur_Mer2}/>
            <Route path='/valleuse_boucherot' component={Valleuse_Boucherot}/>
            <Route path='/valleuse_de_vaucottes' component={Valleuse_de_Vaucottes}/>
            <Route path='/varaville' component={Varaville}/>
            <Route path='/varengeville' component={Varengeville}/>
            <Route path='/veletot' component={VEletot}/>
            <Route path='/veules' component={Veules}/>
            <Route path='/veulettes' component={Veulettes}/>
            <Route path='/vgrainval' component={VGrainval}/>
            <Route path='/villers-sur-mer1' component={Villers_sur_Mer1}/>
            <Route path='/villers-sur-mer2' component={Villers_sur_Mer2}/>
            <Route path='/villerville' component={Villerville}/>
            <Route path='/wimereux' component={Wimereux}/>
            <Route path='/yport' component={Yport}/>

            <Route path='/seine' component={Seine}/>
            <Route path='/aizier' component={Aizier}/>
            <Route path='/andresy' component={Andresy}/>
            <Route path='/barrage_poses' component={Barrage_Poses}/>
            <Route path='/bennecourt' component={Bennecourt}/>
            <Route path='/berville-sur-mer' component={Berville_sur_Mer}/>
            <Route path='/blonville-sur-mer' component={Blonville_sur_Mer}/>
            <Route path='/caudebec' component={Caudebec}/>
            <Route path='/cleon' component={Cleon}/>
            <Route path='/conflans-sainte-honorine' component={Conflans_Sainte_Honorine}/>
            <Route path='/duclair' component={Duclair}/>
            <Route path='/gargenville' component={Gargenville}/>
            <Route path='/guernes' component={Guernes}/>
            <Route path='/hardricourt' component={Hardricourt}/>
            <Route path='/hautot' component={Hautot}/>
            <Route path='/herblay' component={Herblay}/>
            <Route path='/heurteauville' component={Heurteauville}/>
            <Route path='/honfleur' component={Honfleur}/>
            <Route path='/honfleur_plage' component={Honfleur_plage}/>
            <Route path='/honfleur_point_de_vue' component={Honfleur_point_de_vue}/>
            <Route path='/honfleur_zone_portuaire' component={Honfleur_zone_portuaire}/>
            <Route path='/ile_chaussee' component={Ile_Chaussee}/>
            <Route path='/ile_cite' component={Ile_Cite}/>
            <Route path='/ile_derivation' component={Ile_Derivation}/>
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
            <Route path='/montesson' component={Montesson}/>
            <Route path='/nanterre' component={Nanterre}/>
            <Route path='/notre_dame' component={Notre_Dame}/>
            <Route path='/notre-dame-de-bliquetuit' component={Notre_Dame_de_Bliquetuit}/>
            <Route path='/notre-dame-de-l_isle' component={Notre_Dame_de_l_Isle}/>
            <Route path='/panorama_du_mont_joli' component={Panorama_du_Mont_Joli}/>
            <Route path='/panorama_val_d_herblay' component={Panorama_Val_d_Herblay}/>
            <Route path='/passage_du_trait' component={Passage_du_Trait}/>
            <Route path='/passage_d_yssainville' component={Passage_d_Yssainville}/>
            <Route path='/phare_de_la_roque' component={Phare_de_la_Roque}/>
            <Route path='/pont_au_change' component={Pont_au_Change}/>
            <Route path='/pont_au_double' component={Pont_au_Double}/>
            <Route path='/pont_charles_de_gaulle' component={Pont_Charles_de_Gaulle}/>
            <Route path='/pont_des_arts' component={Pont_des_Arts}/>
            <Route path='/pont_de_sully' component={Pont_de_Sully}/>
            <Route path='/pont_d_iena' component={Pont_d_Iena}/>
            <Route path='/pont_du_garigliano' component={Pont_du_Garigliano}/>
            <Route path='/pont_marie' component={Pont_Marie}/>
            <Route path='/pont_national' component={Pont_National}/>
            <Route path='/pont_neuf' component={Pont_Neuf}/>
            <Route path='/pont_saint-cloud' component={Pont_Saint_Cloud}/>
            <Route path='/pont_saint-louis' component={Pont_Saint_Louis}/>
            <Route path='/pont_saint-michel' component={Pont_Saint_Michel}/>
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
            <Route path='/sartrouville' component={Sartrouville}/>
            <Route path='/tancarville' component={Tancarville}/>
            <Route path='/tosny' component={Tosny}/>
            <Route path='/triel-sur-seine' component={Triel_sur_Seine}/>
            <Route path='/val-de-la-haye' component={Val_de_la_Haye}/>
            <Route path='/vatteville' component={Vatteville}/>
            <Route path='/vaux-sur-seine' component={Vaux_sur_Seine}/>
            <Route path='/vernon' component={Vernon}/>
            <Route path='/vetheuil' component={Vetheuil}/>
            <Route path='/vieux-port' component={Vieux_Port}/>
            <Route path='/villequier' component={Villequier}/>
            <Route path='/villers-sur-le-roule' component={Villers_sur_le_Roule}/>

            <Route path='/patrimoine' component={Autres}/>
            <Route path='/abbaye_mortemer' component={Abbaye_Mortemer}/>
            <Route path='/abbaye_notre-dame_du_bec' component={Abbaye_Notre_Dame_du_Bec}/>
            <Route path='/abbaye_saint_georges_boscherville' component={Abbaye_Saint_Georges_Boscherville}/>
            <Route path='/arc_de_triomphe' component={Arc_de_Triomphe}/>
            <Route path='/arenes_lutece' component={Arenes_Lutece}/>
            <Route path='/auvers-sur-oise' component={Auvers_sur_Oise}/>
            <Route path='/avenue_verte_arques' component={Avenue_Verte_Arques}/>
            <Route path='/avenue_verte_dampierre' component={Avenue_Verte_Dampierre}/>
            <Route path='/avenue_verte_mesnieres' component={Avenue_Verte_Mesnieres}/>
            <Route path='/avenue_verte_meulers' component={Avenue_Verte_Meulers}/>
            <Route path='/avenue_verte_osmoy' component={Avenue_Verte_Osmoy}/>
            <Route path='/avenue_verte_saint-aubin-le-cauf' component={Avenue_Verte_Saint_Aubin_le_Cauf}/>
            <Route path='/avenue_verte_saint-vaast' component={Avenue_Verte_Saint_Vaast}/>
            <Route path='/basilique_lisieux' component={Basilique_Lisieux}/>
            <Route path='/basilique_saint-denis' component={Basilique_Saint_Denis}/>
            <Route path='/biomarine' component={Biomarine}/>
            <Route path='/bnf' component={BNF}/>
            <Route path='/buttes_chaumont' component={Buttes_Chaumont}/>
            <Route path='/carrousel_louvre' component={Carrousel_Louvre}/>
            <Route path='/catacombes' component={Catacombes}/>
            <Route path='/cathedrale_amiens' component={Cathedrale_Amiens}/>
            <Route path='/cathedrale_beauvais' component={Cathedrale_Beauvais}/>
            <Route path='/cathedrale_reims' component={Cathedrale_Reims}/>
            <Route path='/cathedrale_rouen' component={Cathedrale_Rouen}/>
            <Route path='/cathedrale_sainte-trinite' component={Cathedrale_Sainte_Trinite}/>
            <Route path='/centre_pompidou' component={Centre_Pompidou}/>
            <Route path='/champagne_lanson' component={Champagne_Lanson}/>
            <Route path='/champs_elysees' component={Champs_Elysees}/>
            <Route path='/champ_de_mars' component={Champ_de_Mars}/>
            <Route path='/chateau_carrouges' component={Chateau_Carrouges}/>
            <Route path='/chateau_chantilly' component={Chateau_Chantilly}/>
            <Route path='/chateau_dieppe' component={Chateau_Dieppe}/>
            <Route path='/chateau_fontainebleau' component={Chateau_Fontainebleau}/>
            <Route path='/chateau_harcourt' component={Chateau_Harcourt}/>
            <Route path='/chateau_pierrefonds' component={Chateau_Pierrefonds}/>
            <Route path='/chateau_vascoeuil' component={Chateau_Vascoeuil}/>
            <Route path='/cimetiere_des_canadiens' component={Cimetiere_des_Canadiens}/>
            <Route path='/cite_du_cinema' component={Cite_du_Cinema}/>
            <Route path='/coulee_verte' component={Coulee_Verte}/>
            <Route path='/domaine_du_champ_de_bataille' component={Domaine_du_Champ_de_Bataille}/>
            <Route path='/domaine_saint-cloud' component={Domaine_Saint_Cloud}/>
            <Route path='/eglise_saint-germain-des-pres' component={Eglise_Saint_Germain_des_Pres}/>
            <Route path='/eglise_saint-joseph' component={Eglise_Saint_Joseph}/>
            <Route path='/eglise_saint-julien-le-pauvre' component={Eglise_Saint_Julien_le_Pauvre}/>
            <Route path='/eglise_saint-sulpice' component={Eglise_Saint_Sulpice}/>
            <Route path='/estran' component={Estran}/>
            <Route path='/funiculaire_montmartre' component={Funiculaire_Montmartre}/>
            <Route path='/funiculaire_treport' component={Funiculaire_Treport}/>
            <Route path='/galerie_colbert' component={Galerie_Colbert}/>
            <Route path='/galeries_lafayette' component={Galeries_Lafayette}/>
            <Route path='/galerie_vero-dodat' component={Galerie_Vero_Dodat}/>
            <Route path='/galerie_vivienne' component={Galerie_Vivienne}/>
            <Route path='/gare_montparnasse' component={Gare_Montparnasse}/>
            <Route path='/gare_saint-lazare' component={Gare_Saint_Lazare}/>
            <Route path='/giverny' component={Giverny}/>
            <Route path='/grande_arche' component={Grande_Arche}/>
            <Route path='/gros-horloge' component={Gros_Horloge}/>
            <Route path='/haras_du_pin' component={Haras_du_Pin}/>
            <Route path='/hortillonnages' component={Hortillonnages}/>
            <Route path='/jardin_palais_royal' component={Jardin_Palais_Royal}/>
            <Route path='/jardin_tuileries' component={Jardin_Tuileries}/>
            <Route path='/lac_du_salagou' component={Lac_du_Salagou}/>
            <Route path='/la_villette' component={La_Villette}/>
            <Route path='/le_bec-hellouin' component={Le_Bec_Hellouin}/>
            <Route path='/le_sentier_du_verger' component={Le_Sentier_du_Verger}/>
            <Route path='/lillebonne' component={Lillebonne}/>
            <Route path='/louvre' component={Louvre}/>
            <Route path='/maison_jules_verne' component={Maison_Jules_Verne}/>
            <Route path='/manoir_ango' component={Manoir_Ango}/>
            <Route path='/martyrium' component={Martyrium}/>
            <Route path='/memorial' component={Memorial}/>
            <Route path='/montreuil-sur-mer' component={Montreuil_sur_Mer}/>
            <Route path='/musee_beaux_arts' component={Musee_Beaux_Arts}/>
            <Route path='/musee_carte' component={Musee_Carte}/>
            <Route path='/musee_egouts' component={Musee_Egouts}/>
            <Route path='/musee_emma_bovary' component={Musee_Emma_Bovary}/>
            <Route path='/musee_grevin' component={Musee_Grevin}/>
            <Route path='/musee_jacquemart' component={Musee_Jacquemart}/>
            <Route path='/musee_marmottan_monet' component={Musee_Marmottan_Monet}/>
            <Route path='/musee_monnaie' component={Musee_Monnaie}/>
            <Route path='/musee_orsay' component={Musee_Orsay}/>
            <Route path='/musee_parfum' component={Musee_Parfum}/>
            <Route path='/notre_dame_paris' component={Notre_Dame_Paris}/>
            <Route path='/opera_garnier' component={Opera_Garnier}/>
            <Route path='/palais_de_justice' component={Palais_de_Justice}/>
            <Route path='/palais_de_la_decouverte' component={Palais_de_la_Decouverte}/>
            <Route path='/panorama_evreux' component={Panorama_Evreux}/>
            <Route path='/panorama_marais_vernier' component={Panorama_Marais_Vernier}/>
            <Route path='/panorama_vert_village' component={Panorama_Vert_Village}/>
            <Route path='/panorama_xxl' component={Panorama_XXL}/>
            <Route path='/pantheon' component={Pantheon}/>
            <Route path='/parc_des_princes' component={Parc_des_Princes}/>
            <Route path='/passage_brady' component={Passage_Brady}/>
            <Route path='/passage_des_panoramas' component={Passage_des_Panoramas}/>
            <Route path='/passage_du_grand_cerf' component={Passage_du_Grand_Cerf}/>
            <Route path='/pere-lachaise' component={Pere_Lachaise}/>
            <Route path='/petite_ceinture' component={Petite_Ceinture}/>
            <Route path='/petite_france' component={Petite_France}/>
            <Route path='/petit_palais' component={Petit_Palais}/>
            <Route path='/phare_d_ailly' component={Phare_d_Ailly}/>
            <Route path='/plan_eau_canada' component={Plan_eau_Canada}/>
            <Route path='/pont_du_gard' component={Pont_du_Gard}/>
            <Route path='/puy_de_dome' component={Puy_de_Dome}/>
            <Route path='/quartier_saint-leu' component={Quartier_Saint_Leu}/>
            <Route path='/rue_des_thermopyles' component={Rue_des_Thermopyles}/>
            <Route path='/sacre-coeur' component={Sacre_Coeur}/>
            <Route path='/square_vert-galant' component={Square_Vert_Galant}/>
            <Route path='/stade_jean_boin' component={Stade_Jean_Boin}/>
            <Route path='/tapisserie_bayeux' component={Tapisserie_Bayeux}/>
            <Route path='/tour_montparnasse' component={Tour_Montparnasse}/>
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
