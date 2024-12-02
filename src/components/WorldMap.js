import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./WorldMap.css";
import { FaBroadcastTower, FaServer } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
const broadcastTowerIconHTML = ReactDOMServer.renderToString(<FaBroadcastTower />);
const serverIconHTML = ReactDOMServer.renderToString(<FaServer />);

// Hardcoded probe region pins
const probeRegions = [
  { name: "US West", latitude: 33.947479, longitude: -118.339828 },
  { name: "US East", latitude: 40.919570, longitude: -73.864723 },
  { name: "EU West", latitude: 52.362291, longitude: 4.883001 },
  { name: "India", latitude: 19.015515, longitude: 72.851424 },
  { name: "South America", latitude: -23.561338, longitude: -46.680156 },
  { name: "South-East Asia", latitude: 1.255284, longitude: 103.820197 },
  { name: "Oceania", latitude: -33.868910, longitude: 151.192494 },
  { name: "Japan", latitude: 35.595941, longitude: 139.745076 },
];
// Hardcoded orchestrator pins
const orchestrators = [
  { name: "Leiden", latitude: 52.1590, longitude: 4.4925 },
  { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { name: "Kansas", latitude: 39.0119, longitude: -98.4842 },
  { name: "São Paulo", latitude: -23.5558, longitude: -46.6396 }
];

const WorldMap = () => {
  return (
    <div
      className={"world-map-container"}
    >
      {/* Map Component */}
      <MapContainer
        zoom={1}
        center={[52.378, 4.9]}
        maxZoom={1}
        minZoom={1}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Dark Theme Tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains={["a", "b", "c"]}
        />

        {/* Probe Region Pins */}
        {probeRegions.map((region, index) => (
          <Marker
            key={`probe-region-${index}`}
            position={[region.latitude, region.longitude]}
            icon={L.divIcon({
              className: 'dummy',
              html: `<div class="probe-pin">${broadcastTowerIconHTML}</div>`,
            })}
          >
            <Tooltip>
              <strong>Stronk Origin</strong>
              <br />
              {region.name}
            </Tooltip>
          </Marker>
        ))}

        {/* Orchestrator Pins */}
        {orchestrators.map((orch, index) => (
          <Marker
            key={`orchestrator-${index}`}
            position={[orch.latitude, orch.longitude]}
            icon={L.divIcon({
              className: 'dummy',
              html: `<div class="orch-pin">${serverIconHTML}</div>`,
            })}
          >
            <Tooltip>
              <strong>Stronk Worker</strong>
              <br />
              {orch.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
