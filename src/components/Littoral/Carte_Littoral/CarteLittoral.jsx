import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import LittoralPasDeCalais from './Littoral_Pas_de_Calais'
import LittoralSomme from './Littoral_Somme'
import LittoralSeineMaritime from './Littoral_Seine_Maritime'
import LittoralCalvados from './Littoral_Calvados'
import LittoralIleEtVilaine from './Littoral_Ile_et_Vilaine'
import LittoralAude from './Littoral_Aude'
import LittoralGironde from './Littoral_Gironde'

export default class CarteLittoral extends Component {
  state = {
    lat: 50.3,
    lng: 1.1,
    zoom: 7.5
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="carte">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LittoralCalvados />
          <LittoralSeineMaritime />
          <LittoralSomme />
          <LittoralPasDeCalais />
          <LittoralIleEtVilaine />
          <LittoralAude />
          <LittoralGironde />

        </Map>
      </div>
    );
  }
}
