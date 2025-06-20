import React from 'react';

const ServiceCard = ({ icon, text, customContent }) => {
  return (
    <article className="flex flex-col flex-1 shrink p-6 text-xl font-semibold text-center text-white basis-0 bg-opacity-0 min-w-60 max-w-[282px] max-md:px-5">
      {icon && (
        <img
          src={icon}
          className={`object-contain self-center ${
            icon === 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb0a36d5e7b14b0240552279492c7e3aed1a4231?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d' ? 'aspect-[1.42] w-[67px]' : ''
          }`}
          alt=""
        />
      )}
      {customContent && customContent}
      <p className="mt-4 text-white">{text}</p>
    </article>
  );
};

export default ServiceCard;
