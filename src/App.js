import React, { Component } from "react";
import "./App.css";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

var icon = L.icon({

})

class SimpleExample extends Component<{}, State> {
  state = {
    lat: 54.97328,
    lng: -1.61396,
    zoom: 13
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default SimpleExample;
