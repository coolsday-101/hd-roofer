import React from 'react';

const ServiceCard = ({title, description, imageUrl}) => {
  return (
    <article className="flex flex-col gap-6">
      <img
        src={imageUrl}
        alt={title}
        className="h-[112px] w-full object-cover"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-950">
          {title}
        </h3>
        <p className="text-sm leading-6 text-gray-950">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
