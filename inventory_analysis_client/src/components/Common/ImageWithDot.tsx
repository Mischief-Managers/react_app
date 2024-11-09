import React, { useState } from 'react';

import bim_1 from "../../assets/photo/BIM_Img_1.jpg";


const ImageWithDot = ({ x, y }) => {
  return (
    <div >
      <img style={{ width: '700px', height: '500px' }}
        src={bim_1}
      />

      <div
        style={{
          position: 'absolute',
          top: y,    
          left: x,  
          width: '30px',
          height: '30px',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)', 
        }}
      />
    </div>
  );
};

export default ImageWithDot;
