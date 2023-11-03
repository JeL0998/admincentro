import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function MainMapComponent() {
  useEffect(() => {
    const newMap = L.map('main-map').setView([6.4974, 124.8472], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(newMap);

    return () => {
      newMap.remove();
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
        <div id="main-map" className="flex-grow border h-3/5 border-slate-600 rounded-md"></div>
    </div>

  );
}
