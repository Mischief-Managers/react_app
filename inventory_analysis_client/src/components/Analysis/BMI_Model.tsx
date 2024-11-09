import Sidebar from "../SideBar";
import React, { useState, useEffect } from 'react';
import ImageWithDots_2 from "../Common/ImageWithDots_2";


function BMI_Model() {

  const coordinates = [
    { x: 100, y: 100 },
    { x: 200, y: 150 },
    { x: 300, y: 250 },
    { x: 400, y: 300 },
  ];

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>BIM 3D Models</h5>

        <div>

          <br></br>
          <br></br>

          <div style={{ width: '10px', height: '10px', position: 'relative', textAlign: 'center', marginLeft: '170px' }}>
            <ImageWithDots_2 coordinates={coordinates} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default BMI_Model;
