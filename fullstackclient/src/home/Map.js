import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './home.css';
import L from 'leaflet';

var myIcon = L.icon({
  iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Ball-Azure-icon.png",
  iconSize: [60, 60],
  iconAnchor: [12.5, 41],
  popupAnchor: [12, -40],
})

var myIcons = L.icon({
  iconUrl: "https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_1-512.png",
  iconSize: [40, 40],
  iconAnchor: [12.5, 41],
  popupAnchor: [12, -40],
})

export default class Maps extends Component {
  state = {
    location: {
      lat: 39.76,
      lng: -86.16,
    },
    zoom: 10,

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
      });
    }, () => {
      console.log('uh on... they didnt give us their location');
      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(location => {
          console.log(location);
          this.setState({
            location: {
              lat: location.latitude,
              lng: location.longitude
            },
            haveUsersLocation: true,
          });
        })
    });
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <div>
        <Map className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}
            icon={myIcon}>
            <Popup className="popup">
              Your Location
          </Popup>
          </Marker>
          <Marker position={[40.03, -86.14]} icon={myIcons}>
          <Popup className="popup">
            A Giving Tree <br /> Help us collect dry goods for those in need
          </Popup>
          </Marker>
          <Marker position={[39.77, -86.16]} icon={myIcons}>
          <Popup>
            American Donor Services <br/> In need of volunteers
          </Popup>
          </Marker>
          <Marker position={[39.85, -86.10]} icon={myIcons}>
          <Popup>
            YMCA <br /> Help us by volunteering at one of your locat YMCA's
          </Popup>
          </Marker>
          <Marker position={[39.70, -86.1]} icon={myIcons}>
          <Popup>
            Ronald McDonald House <br /> Donations
          </Popup>
          </Marker>
          <Marker position={[39.83, -86.25]} icon={myIcons}>
          <Popup>
            CCI Refugee Resettlement <br /> In need of volunteers, donations, clothing, and dry goods
          </Popup>
          </Marker>
          <Marker position={[40.05, -85.9]} icon={myIcons}>
          <Popup>
            Partners in Pink <br /> Donations
          </Popup>
          </Marker>
          <Marker position={[39.99, -86.22]} icon={myIcons}>
          <Popup>
            Boone County Community Foundation <br /> Help us by Volunteering
          </Popup>
          </Marker>
          <Marker position={[39.77, -85.75]} icon={myIcons}>
          <Popup>
            Patners for Animal Welfare Society, Inc <br /> Help us by donating animal products or playing with our animals
          </Popup>
          </Marker>
        </Map>
      </div>
    );
  }

}