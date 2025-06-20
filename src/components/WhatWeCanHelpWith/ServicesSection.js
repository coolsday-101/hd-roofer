import React from 'react';
import ServiceCard from './ServiceCard';
//import CustomDivider from './CustomDivider';

const ServicesSection = ({topServices, bottomServices}) => {
  return (
    <section className="flex flex-col justify-center p-16 max-md:py-9 w-full bg-slate-600 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full max-w-[1280px] mx-auto">
        <h2 className="text-3xl font-semibold text-center text-white max-md:max-w-full">
          What We Can Help With
        </h2>

        <div className="mt-12 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-2 justify-center w-full min-h-[156px] max-md:max-w-full">
            {topServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                text={service.text}
                customContent={service.customContent}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center mt-2 w-full text-xl font-semibold text-center text-white max-md:max-w-full">
            {bottomServices.map((service, index) => (
              <div key={index} className="min-w-60 w-[282px]">
                <ServiceCard
                  icon={service.icon}
                  text={service.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
