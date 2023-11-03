// MapComponent.js
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarkerIconUrl from '../assets/marker.png';

export default function MapComponent({ savedCoordinates, onSaveCoordinate }) {
  const [mouseCoordinates, setMouseCoordinates] = useState({ lat: 0, lng: 0 });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const newMap = L.map('map').setView([6.4974, 124.8472], 17);
    setMap(newMap);

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(newMap);

    newMap.on('mousemove', (e) => {
      setMouseCoordinates({ lat: e.latlng.lat.toFixed(6), lng: e.latlng.lng.toFixed(6) });
    });

    newMap.on('click', (e) => {
      const clickedCoordinates = { lat: e.latlng.lat.toFixed(6), lng: e.latlng.lng.toFixed(6) };
      const name = prompt('Enter a name for this coordinate:');
      if (name !== null) {
        onSaveCoordinate({ ...clickedCoordinates, name });
      }
    });

    return () => {
      newMap.remove();
      tileLayer.remove();
    };
  }, [onSaveCoordinate]);

  useEffect(() => {
    if (map) {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });

      const newMarkers = savedCoordinates.map((coordinate) => {
        const customIcon = L.icon({
          iconUrl: customMarkerIconUrl,
          iconSize: [32, 32],
        });
        const marker = L.marker([coordinate.lat, coordinate.lng], { icon: customIcon }).addTo(map);
        marker.bindPopup(coordinate.name);

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [savedCoordinates, map]);

  return (
    <div className="flex flex-col h-full w-full">
      <div id="map" className="flex-grow border h-3/5 border-slate-600 rounded-md"></div>
      <div className="my-2 hidden">
        <p>Mouse Coordinates:</p>
        <p>Latitude: {mouseCoordinates.lat} Longitude: {mouseCoordinates.lng}</p>
      </div>
    </div>
  );
}
