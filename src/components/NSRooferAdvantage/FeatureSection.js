import React from "react";

export const FeatureSection = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col justify-center w-full max-md:max-w-full">
      <header className="flex flex-wrap gap-2 items-center w-full font-bold leading-6 border-b border-solid border-b-[color:var(--Grey,#5A6A7A)] max-md:max-w-full">
        <img
          src={imageUrl}
          alt="icon"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <h3 className="self-stretch my-auto text-white">
          {title}
        </h3>
      </header>
      <p className="mt-1 leading-6 text-white max-md:max-w-full max-w-[550px]">
        {description}
      </p>
    </article>
  );
};
