import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./style/embla.css";
//import logo from "./svg/logo.svg";
//import PXs from "../typography/PXs";

type SlideType = {
  img: string;
  label: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
  onSlideClick?: (index: number) => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, onSlideClick } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);
  return (
    <section className="embla max-w-[1280px] !m-auto">
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`flex ${slides.length < 5 ? "md:justify-center" : ""} ${slides.length === 1 ? "max-mobile1:justify-center" : ""}`}>
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-shrink-0 w-full md:basis-1/2 lg:basis-1/3 p-2"
              key={slide.img}
              onClick={() => onSlideClick && onSlideClick(index)}
            >
              <div className="relative overflow-hidden w-full aspect-[7/5]">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Label in the Top-Left Corner */}
                <div className="absolute top-2 left-2 bg-orange text-white text-xs font-body font-semibold px-3 py-1 rounded-sm shadow-md">
                  {slide.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-6 max-mobile2:hidden">
        <div className="flex items-center justify-center gap-6 w-full">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="hidden lg:flex">
            <div className="embla__dots space-x-8 gap-[0.5rem]">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
