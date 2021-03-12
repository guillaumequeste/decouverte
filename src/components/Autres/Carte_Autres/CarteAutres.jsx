import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import Autres_Seine_Maritime from './Autres_Seine_Maritime'
import Autres_Avenue_Verte from './Autres_Avenue_Verte'
import Autres_Somme from './Autres_Somme'
import Autres_Pas_de_Calais from './Autres_Pas_de_Calais'
import Autres_Oise from './Autres_Oise'
import Autres_Marne from './Autres_Marne'
import Autres_Bas_Rhin from './Autres_Bas_Rhin'
import Autres_Eure from './Autres_Eure'
import Autres_Val_d_Oise from './Autres_Val_d_Oise'
import Autres_Calvados from './Autres_Calvados'
import Autres_Seine_et_Marne from './Autres_Seine_et_Marne'
import Autres_Herault from './Autres_Herault'
import Autres_Gard from './Autres_Gard'
import Autres_Puy_de_Dome from './Autres_Puy_de_Dome'
import Autres_Yvelines from './Autres_Yvelines'
import Autres_Orne from './Autres_Orne'

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

          <Autres_Seine_Maritime />
          <Autres_Avenue_Verte />
          <Autres_Somme />
          <Autres_Pas_de_Calais />
          <Autres_Oise />
          <Autres_Marne />
          <Autres_Bas_Rhin />
          <Autres_Eure />
          <Autres_Val_d_Oise />
          <Autres_Calvados />
          <Autres_Seine_et_Marne />
          <Autres_Herault />
          <Autres_Gard />
          <Autres_Puy_de_Dome />
          <Autres_Yvelines />
          <Autres_Orne />
          
        </Map>
      </div>
    );
  }
}
