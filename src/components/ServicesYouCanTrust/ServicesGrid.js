import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesGrid = ({content}) => {
  return (
    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-[1280px] mx-auto">
      {content.map((item, idx) => (
        <ServiceCard
          key={idx}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
