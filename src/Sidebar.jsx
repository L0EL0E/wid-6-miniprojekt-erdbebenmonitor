export const Sidebar = ({popupInfo}) => (
  <div className="aside">
    <aside>
      <p>Stärke: {popupInfo.properties?.mag ?? ""}</p> 
      <p>Zeitpunkt: {popupInfo.properties?.time ? new Date(popupInfo.properties.time).toLocaleString(): ""}</p>
      <p>Lage: {popupInfo.geometry?.coordinates?.[1] ?? ""} {popupInfo.geometry?.coordinates?.[0] ?? ""}</p>
      <p>Epizentrum: {popupInfo.properties?.place ?? ""}</p>
    </aside>
  </div>
);
