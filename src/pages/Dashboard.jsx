// src/pages/Dashboard.jsx
import { useState } from 'react';
import '../styles/Dashboard.css';

const mockPumps = [
  {
    name: 'Pump 1',
    type: 'Centrifugal',
    area: 'Area A',
    lat: 34.0522,
    lon: -118.2437,
    flow: '1000 GPM',
    offset: '5 sec',
    pressure: {
      current: '150 psi',
      min: '120 psi',
      max: '180 psi',
    },
  },
  {
    name: 'Pump 2',
    type: 'Submersible',
    area: 'Area B',
    lat: 34.0522,
    lon: -118.2437,
    flow: '800 GPM',
    offset: '3 sec',
    pressure: {
      current: '130 psi',
      min: '100 psi',
      max: '160 psi',
    },
  },
];

export default function Dashboard() {
  const [pumps] = useState(mockPumps);

  return (
    <div className="dashboard-wrapper">
      <nav className="top-navbar">
        <div className="nav-left">
          <span className="brand">PumpMaster</span>
          <a href="#">Dashboard</a>
          <a href="#">Pumps</a>
          <a href="#">Reports</a>
          <a href="#">Alerts</a>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Search" className="nav-search" />
          <button className="icon-button">🔔</button>
          <div className="profile-icon">JS</div>
        </div>
      </nav>
    
      <div className="dashboard-container">
        <h1 className="dashboard-title">Pumps</h1>
        <table className="pump-table">
          <thead>
            <tr>
              <th>Pump Name</th>
              <th>Type</th>
              <th>Area/Block</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Flow Rate</th>
              <th>Offset</th>
              <th>Current Pressure</th>
              <th>Min Pressure</th>
              <th>Max Pressure</th>
            </tr>
          </thead>
          <tbody>
            {pumps.map((pump, idx) => (
              <tr key={idx}>
                <td>{pump.name}</td>
                <td>{pump.type}</td>
                <td>{pump.area}</td>
                <td>{pump.lat}</td>
                <td>{pump.lon}</td>
                <td>{pump.flow}</td>
                <td>{pump.offset}</td>
                <td className="pressure-current">{pump.pressure.current}</td>
                <td>{pump.pressure.min}</td>
                <td>{pump.pressure.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
