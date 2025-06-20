import React from "react";

const LogoImage = ({ src, className }) => {
  return (
    <figure className={className}>
      <img
        src={src}
        alt="Company Logo"
        className="object-contain w-full h-full"
      />
    </figure>
  );
};

export default LogoImage;
