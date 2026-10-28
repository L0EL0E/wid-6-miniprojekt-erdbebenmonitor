import {Slider, Card, CardContent, Box} from '@mui/material';

export const Sidebar = ({ popupInfo, radius, setRadius }) => {
  const handleChange = (event, newValue) => {
    setRadius(newValue);
  };

  return (
    <div className="aside">
      <aside>
        <Card>
          <CardContent>Stärke: {popupInfo.properties?.mag ?? ""}</CardContent> 
          <CardContent>Zeitpunkt: {popupInfo.properties?.time ? new Date(popupInfo.properties.time).toLocaleString(): ""}</CardContent>
          <CardContent>Lage: {popupInfo.geometry?.coordinates?.[1] ?? ""} {popupInfo.geometry?.coordinates?.[0] ?? ""}</CardContent>
          <CardContent>Epizentrum: {popupInfo.properties?.place ?? ""}</CardContent>
        </Card>
        <Box sx={{width: 200, p: 2}}>
          Radius
          <Slider
            valueLabelDisplay="auto"
            aria-label='Radius'
            step={0.5}
            marks
            min={3}
            max={5}
            value={radius}
            onChange={handleChange}
          />
        </Box>
      </aside>
    </div>
  );
};
