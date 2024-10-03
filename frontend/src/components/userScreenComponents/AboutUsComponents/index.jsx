import React from "react";
import ContentSection from "./ContentSection";
import rightimg from "../../../assets/images/jersyabout.jpg";
import leftimg from "../../../assets/images/leftimg.jpg";
import AboutUsImage from "../../../assets/images/aboutusimg.jpg";
import WhyChooseUs from "./WhyChooseUs";
import LazyLoad from 'react-lazyload';

const AboutUsPage = () => {
  return (
    <div className="bg-[#EBEDFF] pb-10 max-md:p-2">
      <LazyLoad height={200} offset={200} placeholder={<div>Loading...</div>}>
      <div
        className="relative container-fluid bg-no-repeat bg-cover bg-center flex justify-center items-center h-[78vh]"

        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        {/* Content */}
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold text-black">About us</h2>
        </div>
      </div>
      </LazyLoad>
      <div className="container mx-4 max-md:mx-0">
        <ContentSection
          heading="Who We Are"
          imageOnLeft={false}
          imageSrc={rightimg}
          text="Welcome to our online store, where you can discover a wide variety of jerseys from top global brands. Centrally located for your convenience, we offer an immersive shopping experience right from the comfort of your home. Whether you're looking for the latest collections or detailed product information, we have everything you need within just a few clicks. Browse through our featured collections and explore premium jerseys that match your style."
        />
        <WhyChooseUs />
        <ContentSection
          heading="Our Mission"
          imageOnLeft={true}
          imageSrc={leftimg}
          text="Our mission is to offer a wide variety of jerseys from top global brands, providing premium options for every fan and player. We ensure access to the latest collections, keeping you updated with the trendiest jerseys in the market.With a focus on convenience, we deliver a seamless shopping experience, offering detailed product information to guide your choices from home. Committed to affordable pricing, we make high-quality jerseys accessible without compromising on quality. Discover our featured brands, both global and local, carefully curated for every style."
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
