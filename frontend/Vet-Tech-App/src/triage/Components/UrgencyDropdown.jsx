import React, { useState } from 'react';

export const UrgencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('Tipo de Urgencia');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectAction = (action) => {
    setSelectedAction(action);
    setIsOpen(false); 
    // You'll likely want to do something with the selected action here
  };

  return (
    <div className="relative">
      <button 
        className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedAction}</span>
        <svg 
          className="h-4 w-4 ml-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute text-gray-700 pt-2  text-justify ">
          <li className="bg-white hover:bg-gray-200">
            <button 
              className="w-full text-left py-2 px-4 block whitespace-no-wrap" 
              onClick={() => selectAction('Arrollamiento')}
            >
              Arrollamiento
            </button>
          </li>
          <li className="bg-white hover:bg-gray-200">
            <button 
              className="w-full text-left py-2 px-4 block whitespace-no-wrap" 
              onClick={() => selectAction('Envenenamiento')}
            >
              Envenenamiento
            </button>
          </li>
          <li className="bg-white hover:bg-gray-200">
            <button 
              className="w-full text-left py-2 px-4 block whitespace-no-wrap" 
              onClick={() => selectAction('Traumatismo')}
            >
              Traumatismo
            </button>
          </li> <li className="bg-white hover:bg-gray-200">
            <button 
              className="w-full text-left py-2 px-4 block whitespace-no-wrap" 
              onClick={() => selectAction('Atragantamiento')}
            >
              Atragantamiento
            </button>
          </li> <li className="bg-white hover:bg-gray-200">
            <button 
              className="w-full text-left py-2 px-4 block whitespace-no-wrap" 
              onClick={() => selectAction('Envenenamiento')}
            >
              Sangrado
            </button>
          </li>
         
        </ul>
      )}
    </div>
  );
}




