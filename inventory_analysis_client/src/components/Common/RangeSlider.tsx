import React, { useState } from "react";
import "../../assets/css/RangeSlider.css";

interface RangeSliderProps {
  onRangeChange: (newRange: [number, number]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onRangeChange }) => {
  const [range, setRange] = useState<[number, number]>([2000, 2023]);

  const handleRangeChange = (newRange: [number, number]) => {
    setRange(newRange);
    onRangeChange(newRange); // Invoke the callback with the new range
  };

  return (
    <div className="range-slider-container">
      <div className="range-inputs">
        Duration : 
        <input
          type="number"
          value={range[0]}
          onChange={(e) =>
            handleRangeChange([parseInt(e.target.value), range[1]])
          }
          min={2000}
          max={range[1] - 1}
        />
        <span>to</span>
        <input
          type="number"
          value={range[1]}
          onChange={(e) =>
            handleRangeChange([range[0], parseInt(e.target.value)])
          }
          min={range[0] + 1}
          max={2023}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
