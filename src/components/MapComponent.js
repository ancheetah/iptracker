import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Box } from '@material-ui/core';

const MapComponent = ({coordinates}) => {
    const [coords, setCoords] = useState({
        centerLatLng: [40.71427, -74.00597],
        bounds: [
            [40.66427, -74.05597],
            [40.76427, -73.95597]
        ],
        lat: '40.71427',
        lng: '-74.00597'
    })

    const ChangeView = ({coords}) => {
        const map = useMap();
        map.fitBounds(coords.bounds);
        return null;
    } 
  
    useEffect( () => {
    // Set map bounds
        let minLat = 180,
            maxLat = -180;
        let minLng = 180,
            maxLng = -180;

        let lat = coordinates[0];
        let lng = coordinates[1];

        if (lat < minLat) {
            minLat = lat;
        }
        if (lat > maxLat) {
            maxLat = lat;
        }
        if (lng < minLng) {
            minLng = lng;
        }
        if (lng > maxLng) {
            maxLng = lng;
        }
        // console.log(minLat, maxLat, minLng, maxLng)

        let centerLatLng = [(minLat + maxLat) / 2, (minLng + maxLng) / 2];
        if (minLat === maxLat || minLng === maxLng) {
            const adjustDegree = 0.05;
            minLat -= adjustDegree;
            minLng -= adjustDegree;
            maxLat += adjustDegree;
            maxLng += adjustDegree;
        }
        let bounds = [
            [minLat, minLng],
            [maxLat, maxLng]
        ];
        
        setCoords({
            centerLatLng: centerLatLng,
            bounds: bounds,
            lat: lat,
            lng: lng
        })

        // console.log(coords);
        
    }, [coordinates])

    return (
        <Box>
            <MapContainer
                // key={Date.now()}
                center={coords.centerLatLng}
                bounds={coords.bounds}
                boundsOptions={{ padding: [20, 20] }}
                id='mapid'
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[coords.lat,coords.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <ChangeView coords={coords}/>
            </MapContainer>
        </Box>
    );
};

export default MapComponent;
