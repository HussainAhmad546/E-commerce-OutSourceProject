import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => changeLanguage('English')}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out mr-2"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('Spanish')}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
