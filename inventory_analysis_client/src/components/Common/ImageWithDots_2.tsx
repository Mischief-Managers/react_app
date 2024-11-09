import React from 'react';
import bim_1 from "../../assets/photo/BIM_Img_1.jpg";

const ImageWithDots_2 = ({ coordinates }) => {
  return (
    <div style={{ position: 'relative', width: '700px', height: '500px' }}>
      <img
        src={bim_1} 
        alt="Targeted"
        style={{ width: '100%', height: '100%' }}
      />

      {coordinates.map((coord, index) => (
        <a
          key={index}
          href="/dashboard"
          style={{
            position: 'absolute',
            top: coord.y,      
            left: coord.x,    
            width: '30px',
            height: '30px',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)', 
          }}
        />
      ))}
    </div>
  );
};

export default ImageWithDots_2;
