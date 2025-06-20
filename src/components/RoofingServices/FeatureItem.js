import React from "react";

export const FeatureItem = ({ text, imageSrc }) => {
  return (
    <article className="flex flex-col gap-4 text-xl font-semibold text-center text-gray-950">
      <img
        src={imageSrc}
        alt={`${text} image`}
        className="w-12 h-12 mx-auto"
      />
      {text}
    </article>
  );
};
