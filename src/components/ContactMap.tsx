import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

type Props = {
  lat?: number;
  lng?: number;
  zoom?: number;
};

// Simple SVG marker as a data URL to avoid missing asset issues
const svg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23ff7a00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z'></path><circle cx='12' cy='10' r='3' fill='%23ff7a00' stroke='none'/></svg>`
);

const icon = new L.Icon({
  iconUrl: `data:image/svg+xml;utf8,${svg}`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'leaflet-marker-icon',
});

const ContactMap: React.FC<Props> = ({ lat = 40.7128, lng = -74.006, zoom = 13 }) => {
  return (
    <div className="w-full h-72 md:h-96 rounded-md overflow-hidden shadow-sm">
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={icon}>
          <Popup>
            ET-Group Headquarters<br /> Jawhara Tower, Benghazi, Libya
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
