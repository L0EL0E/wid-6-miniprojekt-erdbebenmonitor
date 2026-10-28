import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useState } from 'react';

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
const [popupInfo, setPopupInfo] = useState({})
const [radius, setRadius] = useState(3)
  return (
    <div className="app">
      <Header />
      <Sidebar popupInfo={popupInfo} radius={radius} setRadius={setRadius}/>
      <div className="mainArea">
        <Map setPopupInfo={setPopupInfo} radius={radius}/>
      </div>
    </div>
  );
}

export default App;
