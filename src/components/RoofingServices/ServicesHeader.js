import React from 'react';

export const ServicesHeader = ({title, description}) => {
  return (
    <header className="flex flex-col gap-4 items-center max-w-[950px]">
      <h1 className="text-3xl font-semibold text-center text-gray-950 max-md:text-3xl max-sm:text-2xl">
        {title}
      </h1>
      <p className="text-lg font-semibold text-center text-gray-950 max-sm:text-base">
        {description}
      </p>
    </header>
  );
};
