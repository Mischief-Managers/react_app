import React from 'react';
import '../../assets/css/ScrollableDropdown.css';


interface Option {
  key: string;
  value: string;
}

interface ScrollableDropdownProps {
  options: Option[];
  onSelect: (selectedOption: Option) => void;
}

const ScrollableDropdown: React.FC<ScrollableDropdownProps> = ({ options, onSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(option => option.key === e.target.value);
    
    if (selectedOption) {
      onSelect(selectedOption);
    }
  };

  return (
    <div className="scrollable-dropdown">
      <select onChange={handleChange}>

        {options.map((option, index) => (
          <option key={index} value={option.key}>
            {option.value}
          </option>
        ))}
        
      </select>
    </div>
  );
};

export default ScrollableDropdown;
