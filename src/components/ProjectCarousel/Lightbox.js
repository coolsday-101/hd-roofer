import React from "react";
import EmblaCarousel from "./EmblaCarousel";
//import logo from "@/components/Carousel/svg/logo.svg";
//import PXs from "@/components/typography/PXs";

const Lightbox = ({ slides, selectedSlide, onClose, onSlideClick }) => {
  const OPTIONS = { dragFree: true, loop: true, startIndex: selectedSlide };
  console.log("Lightbox slides:", slides);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[101] max-mobile1:px-5"
      onClick={onClose}
    >
      {/* Lightbox Content */}
      <div className="flex flex-col items-center w-full max-w-4xl max-mobile1:h-[50%]">
        {/* Large Image */}
        <div className="relative w-full mb-4 md:max-w-[40rem] md:mt-[4rem] max-mobile1:h-[100%]">
          <img
            src={slides[selectedSlide].image}
            alt={`Slide ${selectedSlide + 1}`}
            className="w-full h-auto rounded-lg max-mobile1:h-[100%] object-cover"
          />
          {/* Label in the Top-Left Corner */}
          <div className="absolute top-2 left-2 bg-white text-[#687292] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {slides[selectedSlide].label}
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-[#0406144D] text-white px-4 pr-0 py-3 backdrop-blur-lg shadow-md min-h-16 rounded-b-lg">
            <div className="flex flex-col text-sm sm:text-base">
              <div className="flex items-center py-1">
                <span className="leading-none">
                  {slides[selectedSlide].description.split(",")[0]}
                </span>
                <img
                  src={slides[selectedSlide].logo}
                  alt={`${
                    slides[selectedSlide].description.split(",")[0]
                  } logo`}
                  className="w-5 h-5 mr-2 flex-shrink-0 pb-1"
                />
              </div>
              <p textColor="white" className="line-clamp-1">
                {slides[selectedSlide].description.replace(
                  slides[selectedSlide].description.split(",")[0] + ", ",
                  ""
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Mini Carousel */}
        <div className="w-full max-mobile1:hidden">
          <EmblaCarousel
            slides={slides}
            options={OPTIONS}
            initialSlide={selectedSlide}
            onSlideClick={onSlideClick} // Start with the selected slide
          />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
