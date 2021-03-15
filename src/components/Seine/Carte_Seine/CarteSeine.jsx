import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import SeineSeineMaritime from './Seine_Seine_Maritime'
import SeineEure from './Seine_Eure'
import SeineYvelines from './Seine_Yvelines'
import SeineHautsDeSeine from './Seine_Hauts_de_Seine'
import SeineParis from './Seine_Paris'
import SeineCalvados from './Seine_Calvados'

export default class CarteSeine extends Component {
  state = {
    lat: 49.3,
    lng: 1.1,
    zoom: 8
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
          
          <SeineCalvados />
          <SeineParis />
          <SeineHautsDeSeine />
          <SeineYvelines />
          <SeineEure />
          <SeineSeineMaritime />
          
        </Map>
      </div>
    );
  }
}
