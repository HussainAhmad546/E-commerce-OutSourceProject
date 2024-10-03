import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaFlagUsa, FaFlag } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left mt-0">
      <div>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out flex items-center"
        >
          <FaGlobe className="mr-2" />
          Change Language
          <svg
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-36 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            <li
              onClick={() => changeLanguage('English')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer flex items-center"
            >
              <FaFlagUsa className="mr-2" />
              English
            </li>
            <li
              onClick={() => changeLanguage('Spanish')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer flex items-center"
            >
              <FaFlag className="mr-2" />
              Español
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
