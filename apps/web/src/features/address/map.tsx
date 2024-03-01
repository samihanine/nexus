"use client";
import { LoadingView } from "@nexus/ui";
import L from "leaflet";
import React, { useEffect } from "react";
import { Circle, MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

const MapUpdater: React.FC<{ center: [number, number]; zoom?: number }> = ({
  center,
  zoom = 13,
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, map, zoom]);

  return null;
};

const Map = (props: {
  latitude?: number;
  longitude?: number;
  radius?: number;
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const latitude = props.latitude || 45.5019;
  const longitude = props.longitude || -73.5674;
  const radius = props.radius || 0;
  const isDefault = !props.latitude || !props.longitude;

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) return <LoadingView />;

  return (
    <MapContainer
      key={`${latitude}-${longitude}`}
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
    >
      <MapUpdater center={[latitude, longitude]} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {!isDefault && (
        <Marker
          position={[latitude, longitude]}
          icon={L.icon({
            iconUrl:
              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF9E00" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>',
            iconSize: [35, 35],
            iconAnchor: [17.5, 35],
            popupAnchor: [0, -35],
          })}
        />
      )}

      {!isDefault && radius && (
        <Circle
          center={[latitude, longitude]}
          radius={radius}
          pathOptions={{
            color: "#FF9E00",
            fillColor: "#FF9E00",
            fillOpacity: 0.2,
            weight: 1,
          }}
        />
      )}
    </MapContainer>
  );
};

export default Map;
