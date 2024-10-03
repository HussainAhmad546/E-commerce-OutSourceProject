import React from "react";
import LazyLoad from 'react-lazyload';

const ContentSection = ({ imageOnLeft, imageSrc, text, heading }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        imageOnLeft ? "md:flex-row-reverse" : ""
      } my-8 p-8 max-md:flex-wrap bg-white justify-center rounded `}
    >
      <div className="w-[50%] max-md:w-[100%]">
        <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
        <img
          src={imageSrc}
          alt="About Us"
          loading="lazy"
          className="w-full h-[75vh] bg-black object-cover opacity-90"
        />
        </LazyLoad>
        
      </div>
      <div className="w-[50%] max-md:w-[100%] flex flex-col justify-center items-center max-md:p-2 p-8">
        <h1 className="font-bold text-[32px] max-md:text-md ">{heading}</h1>
        <hr className="w-[50%] border-2 border-black" />
        <p className=" text-[16px] max-md:text-sm leading-8 mt-6">{text}</p>
      </div>
    </div>
  );
};

export default ContentSection;
