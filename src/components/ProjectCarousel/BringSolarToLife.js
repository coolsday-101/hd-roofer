import React, { useState, useMemo } from "react";
//import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
//import RequestButton from "@/components/Buttons/RequestButton/RequestButton";
//import H2 from "@/components/typography/H2";
import CategoryPicker from "./CategoryPicker";
//import Lightbox from "./Lightbox";

const BringSolarToLife = ({ projectData }) => {
  const [category, setCategory] = useState(0); // 0 corresponds to <=10kw
  //const [lightboxOpen, setLightboxOpen] = useState(false); // Lightbox visibility
  const [selectedSlide, setSelectedSlide] = useState(0); // Currently selected slide
  console.log("data", projectData);
  const OPTIONS = { dragFree: true, loop: true, startIndex: selectedSlide };
  const SLIDES = projectData;
  // Categories for the picker
  const categories = ["All", "Metal", "Insulation", "Shingle", "Siding"];

  // Cache the filtered slides using useMemo
  const filteredSlides = useMemo(() => {
    // If "All" is selected, return all slides
    if (categories[category] === "All") {
      return SLIDES;
    }

    // Otherwise, filter based on category label
    return SLIDES.filter(
      (slide) =>
        slide.label.toLowerCase() === categories[category].toLowerCase()
    );
  }, [SLIDES, category]);
  console.log("filteredSlides", filteredSlides);
  console.log("category", categories[category].toLowerCase());
  // Open lightbox with the selected slide
  /*const handleImageClick = (index) => {
    setSelectedSlide(index);
    if (!lightboxOpen) {
      setLightboxOpen(true);
    }
  };

  const handleBackdropClick = (event) => {
    // Close the lightbox only if the click is on the backdrop
    if (event.target === event.currentTarget) {
      setLightboxOpen(false);
    }
  };*/

  return (
    <div className="py-16 max-mobile2:py-9 text-neutral-900 items-center justify-center w-full">
      <h2 className="text-black text-[32px] font-semibold mb-4 justify-self-center text-center">
        Project Gallery
      </h2>
      {/* Category Picker */}
      <CategoryPicker
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        count={filteredSlides.length}
      />
      <EmblaCarousel slides={filteredSlides} options={OPTIONS} />

      {/* Lightbox */}
      {/*{lightboxOpen && (
        <Lightbox
          slides={filteredSlides}
          selectedSlide={selectedSlide}
          onClose={handleBackdropClick}
          onSlideClick={handleImageClick}
        />
      )}*/}
    </div>
  );
};

export default BringSolarToLife;
