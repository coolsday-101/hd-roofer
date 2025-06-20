import React from "react";
import LogoImage from "./LogoImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoBanner = ({ logos, className }) => {
  // Settings for react-slick
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`flex bg-cloud-grey flex-col justify-center p-16 w-full max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="w-full max-md:max-w-full">
        {/* Desktop: flex, Mobile: carousel */}
        <div className="hidden max-md:block">
          <Slider {...settings}>
            {logos.map((logo, idx) => (
              <LogoImage key={idx} src={logo.src} className={logo.className} />
            ))}
          </Slider>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:hidden">
          {logos.map((logo, idx) => (
            <LogoImage key={idx} src={logo.src} className={logo.className} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
