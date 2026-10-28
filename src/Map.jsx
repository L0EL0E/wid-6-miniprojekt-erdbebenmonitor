import { MapContainer, TileLayer, Popup, CircleMarker, GeoJSON } from "react-leaflet";
import plateData from "./assets/plate_boundaries.geojson.json"
import data from "./assets/4.5_week.geojson.json";
import Button from '@mui/material/Button'

export const Map = ({setPopupInfo, radius}) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[47.5, 7.5]}
      zoom={2.5}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}'
	      minZoom= {0}
	      maxZoom= {18}
	      attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	      ext= 'png'
      />

      <GeoJSON 
        data={plateData}
        style={{color: "orange", weight: 3}}
      />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={radius**2}
          pathOptions={{color: "red"}}
        >
          <Popup>
            <div 
              style={{ textAlign: "center" }}>
              {d.properties.title} <br/>
              <Button 
                variant="contained"
                size="small"
                onClick={() => setPopupInfo(d)}
              >
              Details anzeigen
              </Button> 
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
