import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-dark text-body py-5 bg-[#222]">
        <div className="py-5 w-[95%] m-auto">
          <div className="md:flex gap-5">
            <div className="footer-item flex-1">
              <h4 className="mb-4 text-white font-bold">{t('about_us')}</h4>
              <p className="mb-4 text-white">{t('welcome_message')}</p>
            </div>
            <div className="footer-item flex flex-col space-y-2 flex-1">
              <h4 className="mb-4 text-white font-bold">{t('useful_links')}</h4>
              <Link to="/" className="text-white hover:text-primary">{t('home')}</Link>
              <Link to="/listings" className="text-white hover:text-primary">{t('listings')}</Link>
              <Link to="/contact" className="text-white hover:text-primary">{t('contact_us')}</Link>
              <Link to="#" className="text-white hover:text-primary">{t('faqs')}</Link>
            </div>
            <div className="footer-item flex-1">
              <h4 className="mb-4 text-white font-bold">{t('social_links')}</h4>
              <div className="flex">
                <FaFacebookF size={20} className="text-white mx-2" />
                <FaTwitter size={20} className="text-white mx-2" />
                <FaLinkedinIn size={20} className="text-white mx-2" />
              </div>
            </div>
            <div className="footer-item flex-1">
              <h4 className="mb-4 text-white font-bold">{t('get_in_touch')}</h4>
              <a href="https://wa.me/message/2ILEE7MPGJKMN1" target="_blank" className="text-white hover:text-primary" rel="noopener noreferrer">
                <span>+234 901 555 5667</span>
              </a>
            </div>
          </div>
          <hr className="mt-5"/>
        </div>
      </div>
      <div className="container-fluid bg-[#222] py-2">
        <p className="text-center text-white">&copy; 2024 Global-Products INT. {t('all_rights_reserved')}</p>
      </div>
    </>
  );
};

export default Footer;
