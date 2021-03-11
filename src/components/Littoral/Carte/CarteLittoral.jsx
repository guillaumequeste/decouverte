import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import Littoral_Pas_de_Calais from './Littoral_Pas_de_Calais'
import Littoral_Somme from './Littoral_Somme'
import Littoral_Seine_Maritime from './Littoral_Seine_Maritime'
import Littoral_Calvados from './Littoral_Calvados'

export default class CarteLittoral extends Component {
  state = {
    lat: 50.3,
    lng: 1.1,
    zoom: 7.5
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

          <Littoral_Calvados />
          <Littoral_Seine_Maritime />
          <Littoral_Somme />
          <Littoral_Pas_de_Calais />

        </Map>
      </div>
    );
  }
}
