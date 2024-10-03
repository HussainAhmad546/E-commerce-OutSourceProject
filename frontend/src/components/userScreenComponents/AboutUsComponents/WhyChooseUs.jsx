import React from "react";
import whychooseus from '../../../assets/images/whychooseus.jpg';
import LazyLoad from 'react-lazyload';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col max-md:flex-col-reverse md:flex-row my-8 p-8 max-md:p-4 max-md:my-4 bg-white justify-center rounded">
      <div className="w-[50%] max-md:w-[100%] flex flex-col justify-center items-start p-8">
        <h1 className="font-bold text-[32px] text-center text-black">Why Choose Us?</h1>
        <hr className="w-[50%] border-2 border-black mt-4" />
        <p className="text-[16px] mt-6 max-md:text-sm text-black">
          <span className="text-black font-bold">1. Global Brands:</span> 
          Explore a wide variety of jerseys from top global brands. Whether you're a fan or a player, we provide premium options for all your needs.
        </p>
        <p className="text-[16px] max-md:text-sm mt-6 text-black">
          <span className="text-black font-bold">2. Latest Collections:</span>
          Stay ahead with the latest collections in the market. We consistently update our catalog to ensure you have access to the newest and trendiest jerseys.
        </p>
        <p className="text-[16px] max-md:text-sm mt-6 text-black">
          <span className="text-black font-bold">3. Convenient Shopping Experience:</span>
          Our user-friendly platform allows you to shop from the comfort of your home. With detailed information and reviews, making informed decisions has never been easier.
        </p>
        <p className="text-[16px] max-md:text-sm mt-6 text-black">
          <span className="text-black font-bold">4. Affordable Prices:</span>
          We offer jerseys at competitive prices without compromising on quality. Find the best deals and discounts on your favorite brands.
        </p>
        <p className="text-[16px] max-md:text-sm mt-6 text-black">
          <span className="text-black font-bold">5. Featured Brands:</span>
          Discover and shop from our featured brands. Whether you're looking for international or local jerseys, we have something for everyone.
        </p>
      </div>
      <div className="w-[50%] flex ml-16">
        <LazyLoad height={200} offset={200} placeholder={<div>Loading...</div>}>
        <img
          src={whychooseus}
          alt="Why Choose Us"
          className="w-full h-[95vh] opacity-90"
        />
        </LazyLoad>
      </div>
    </div>
  );
};

export default WhyChooseUs;
