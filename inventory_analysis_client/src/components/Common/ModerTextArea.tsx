import { useState, FC, ChangeEvent, FocusEvent } from 'react';
import '../../assets/css/ModerTextArea.css'; // Import the CSS file for styling


interface ModernTextAreaProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const ModernTextArea: FC<ModernTextAreaProps> = ({ label, placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const [tempValue, setTempValue] = useState('');
  const [tempBool, setTempBool] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setTempValue(e.target.value)
    setTempBool(false)
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setTempValue(e.target.value)
    setIsFocused(false);
  };

  return (
    <div className={`textarea-container ${isFocused ? 'focused' : ''}`}>
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="textarea-field"
      />

      {tempBool && <p>{tempValue}</p>}
    </div>
  );
};

export default ModernTextArea;
