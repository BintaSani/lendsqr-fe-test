import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './customSelect.scss';

interface CustomDropdownProps {
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange, placeholder = "Select an option" }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option); // Call the onChange callback
    setShow(false);
  };

  return (
    <div id="role" className="custom-dropdown">
      <div className="custom-dropdown__button-container">
        <button
          className="custom-dropdown__button"
          onClick={toggleDropdown}
        >
          <span className="custom-dropdown__selected-option">
            {selectedOption || placeholder}
          </span>
          <IoIosArrowDown className="custom-dropdown__arrow" />
        </button>
      </div>

      {show && (
        <ul className="custom-dropdown__options">
          {options.map((option) => (
            <li
              key={option}
              className="custom-dropdown__option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
