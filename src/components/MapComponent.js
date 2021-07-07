
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

const MapComponent = (props) => {

    // Set map bounds
    let minLat = 180, maxLat = -180;
    let minLng = 180, maxLng = -180;
    let lat = 40.7128;
    let lng = -74.0060;

    if (lat < minLat) {
    minLat = lat
    }
    if (lat > maxLat) {
    maxLat = lat
    }
    if (lng < minLng) {
    minLng = lng
    }
    if (lng > maxLng) {
    maxLng = lng
    }
    // console.log(minLat, maxLat, minLng, maxLng)

    var centerLatLng = [(minLat+maxLat)/2, (minLng+maxLng)/2]
    if (minLat === maxLat || minLng === maxLng) {
      const adjustDegree = 0.05
      minLat -= adjustDegree
      minLng -= adjustDegree
      maxLat += adjustDegree
      maxLng += adjustDegree
    }
    let bounds = [[minLat, minLng], [maxLat, maxLng]]
    // console.log(bounds)


    return (
        <div class="map-container">
            <MapContainer center={centerLatLng} bounds={bounds} boundsOptions={{padding: [20, 20]}} id="mapid">
                <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
        // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapid">
        //     <TileLayer
        //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />
        //     <Marker position={[51.505, -0.09]}>
        //         <Popup>
        //             A pretty CSS3 popup. <br /> Easily customizable.
        //         </Popup>
        //     </Marker>
        // </MapContainer>
    )
}

export default MapComponent;