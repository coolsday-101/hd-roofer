import React from "react";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <article className="flex-1 shrink basis-0 min-w-60">
      <img
        src={icon}
        alt=""
        className="object-contain w-12 aspect-square"
      />
      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-white">
        {description}
      </p>
    </article>
  );
};

export default BenefitCard;
