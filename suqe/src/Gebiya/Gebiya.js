import React from 'react';
import GNavbar from './GebiyaComp/GNavbar';
import { Outlet } from "react-router-dom";


function Gebiya() {
  return (
    <div style={{position:'absolute', display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="gebiya-container">
      <GNavbar />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }} className="content">
        <Outlet />
      </div>
     
    </div>
  );
}

export default Gebiya;
