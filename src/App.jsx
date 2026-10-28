import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import { useState } from 'react';

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
const [popupInfo, setPopupInfo] = useState({})
  return (
    <div className="app">
      <Header />
      <Sidebar popupInfo={popupInfo}/>
      <div className="mainArea">
        <Map setPopupInfo={setPopupInfo}/>
      </div>
    </div>
  );
}

export default App;
