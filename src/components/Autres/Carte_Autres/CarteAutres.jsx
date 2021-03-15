import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import AutresSeineMaritime from './Autres_Seine_Maritime'
import AutresAvenueVerte from './Autres_Avenue_Verte'
import AutresSomme from './Autres_Somme'
import AutresPasDeCalais from './Autres_Pas_de_Calais'
import AutresOise from './Autres_Oise'
import AutresMarne from './Autres_Marne'
import AutresBasRhin from './Autres_Bas_Rhin'
import AutresEure from './Autres_Eure'
import AutresValDOise from './Autres_Val_d_Oise'
import AutresCalvados from './Autres_Calvados'
import AutresSeineEtMarne from './Autres_Seine_et_Marne'
import AutresHerault from './Autres_Herault'
import AutresGard from './Autres_Gard'
import AutresPuyDeDome from './Autres_Puy_de_Dome'
import AutresYvelines from './Autres_Yvelines'
import AutresOrne from './Autres_Orne'

export default class CarteAutres extends Component {
  state = {
    lat: 47.5,
    lng: 1.1,
    zoom: 5
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AutresSeineMaritime />
          <AutresAvenueVerte />
          <AutresSomme />
          <AutresPasDeCalais />
          <AutresOise />
          <AutresMarne />
          <AutresBasRhin />
          <AutresEure />
          <AutresValDOise />
          <AutresCalvados />
          <AutresSeineEtMarne />
          <AutresHerault />
          <AutresGard />
          <AutresPuyDeDome />
          <AutresYvelines />
          <AutresOrne />
          
        </Map>
      </div>
    );
  }
}
