import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import Seine_Seine_Maritime from './Seine_Seine_Maritime'
import Seine_Eure from './Seine_Eure'
import Seine_Yvelines from './Seine_Yvelines'
import Seine_Hauts_de_Seine from './Seine_Hauts_de_Seine'
import Seine_Paris from './Seine_Paris'
import Seine_Calvados from './Seine_Calvados'

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
          
          <Seine_Calvados />
          <Seine_Paris />
          <Seine_Hauts_de_Seine />
          <Seine_Yvelines />
          <Seine_Eure />
          <Seine_Seine_Maritime />
          
        </Map>
      </div>
    );
  }
}
