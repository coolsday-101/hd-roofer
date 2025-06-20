import React from "react";

const DescriptionImage = ({ title, description, image, className }) => {
  return (
    <section
      className={`flex max-md:flex-col h-auto max-md:h-auto gap-8 py-[64px] px-[64px] max-mobile2:pt-[64px] max-mobile2:px-[20px] ${className}`}
    >
      {/* Text Content */}
      <div className={`flex max-w-[1280px] gap-16 mx-auto max-md:hidden ${className}`}>
        <div className="flex-1 flex flex-col justify-center gap-6 max-md:pr-0">
          <h2 className="text-4xl font-bold text-black">{title}</h2>
          {description}
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-full max-md:h-[300px] object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 pr-8 max-md:pr-0 md:hidden">
        <h2 className="text-4xl font-bold text-black">{title}</h2>
        {description}
      </div>

      {/* Image */}
      <div className="flex-1 md:hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[446px] max-md:h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default DescriptionImage;
