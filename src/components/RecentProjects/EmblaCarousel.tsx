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
    <section className="embla !m-0">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
