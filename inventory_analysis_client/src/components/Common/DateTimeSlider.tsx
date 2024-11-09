import React, { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import { Range, getTrackBackground } from 'react-range';
import "../../assets/css/DateTimeSlider.css";


interface DateTimeRangeSliderProps {
  onDateRangeChange: (start: string, end: string) => void; // Function to handle date range change
}

const DateTimeSlider: React.FC<DateTimeRangeSliderProps> = ({ onDateRangeChange }) => {
  const minDate = new Date('2023-11-15T00:00:00').getTime();
  const maxDate = new Date('2024-04-25T00:00:00').getTime();
  const min_required_time = 30 * 24 * 60 * 60 * 1000; // Approximate 30 days in milliseconds

  const [dateRange, setDateRange] = useState<number[]>([minDate, maxDate]);
  
  const handleSliderChange = (values: number[]) => {
    if (values[1] - values[0] < min_required_time) {
      if (values[0] === dateRange[0]) {
        setDateRange([values[0], values[0] + min_required_time]);
        onDateRangeChange(new Date(values[0]).toISOString().split('T')[0], new Date(values[0] + min_required_time).toISOString().split('T')[0]);
      } else {
        setDateRange([values[1] - min_required_time, values[1]]);
        onDateRangeChange(new Date(values[1] - min_required_time).toISOString().split('T')[0], new Date(values[1]).toISOString().split('T')[0]);
      }
    } else {
      setDateRange(values);
      onDateRangeChange(new Date(values[0]).toISOString().split('T')[0], new Date(values[1]).toISOString().split('T')[0]);
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  return (
    <div className="date-time-range-slider">
      <label style={{marginLeft: '72px'}}>Training Range : </label>
      <div className="date-input">
        <input
          type="text"
          value={formatDate(dateRange[0])}
          readOnly
          style={{marginLeft: '10px', textAlign: 'center', backgroundColor: '#333', border: '#333'}}
        />
      </div>
      <div className="range-slider">
        <Range
          values={dateRange}
          step={86400000} // One day in milliseconds
          min={minDate}
          max={maxDate}
          onChange={handleSliderChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                background: getTrackBackground({
                  values: dateRange,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: minDate,
                  max: maxDate,
                }),
                borderRadius: '4px',
                margin: '0 10px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  height: '10px',
                  width: '10px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC',
                  borderRadius: '50%',
                }}
              />
            </div>
          )}
        />
      </div>
      <div className="date-input">
        <input
          type="text"
          value={formatDate(dateRange[1])}
          readOnly
          style={{marginLeft: '20px', textAlign: 'center', backgroundColor: '#333', border: '#333'}}
        />
      </div>
    </div>
  );
};

export default DateTimeSlider;
