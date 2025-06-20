import React from "react";

export const BenefitsCard = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <article className="flex relative flex-col flex-1 justify-center p-6 min-h-[194px] max-md:px-5">
      <img
        src={imageUrl}
        alt={description}
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <div className="relative w-full">
        <h3 className="flex-1 shrink gap-2 w-full text-xl font-semibold text-white basis-0">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-loose text-white">
          {description}
        </p>
      </div>
    </article>
  );
};
