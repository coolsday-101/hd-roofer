import React from "react";

const BackgroundImage = ({ src, alt = "Background image" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover absolute inset-0 size-full"
    />
  );
};

export default BackgroundImage;
