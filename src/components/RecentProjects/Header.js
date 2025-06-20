import React from "react";

const Header = ({title, description}) => {
  return (
    <header className="flex flex-col justify-center w-full max-md:max-w-full max-sm:text-center">
      <h1 className="text-3xl font-semibold text-gray-950 max-md:max-w-full">
        {title}
      </h1>
      {description && <p className="mt-6 text-sm leading-6 text-gray-950 max-md:max-w-full">
        {description}
      </p>}
    </header>
  );
};

export default Header;
