import React from 'react'
import FormContainer from './FormContainer';
import contactUsImage from "../../../assets/images/contact_us_banner_img.jpg"
const ContactUs = () => {
  return (
    <>
    <div className="container-fluid bg-gray-100 flex justify-center items-center contact-banner-bg h-[70vh]"
      style={{
        backgroundImage: `url(${contactUsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <div className="text-center">
          <h2 className=" text-4xl font-bold text-[#021f3d]">Contact Us</h2>
        </div>
      </div>
    <FormContainer />
    </>
  )
}

export default ContactUs;