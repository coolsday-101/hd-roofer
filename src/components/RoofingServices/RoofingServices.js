import React from 'react';
import { ServicesHeader } from './ServicesHeader';
import { FeaturesGrid } from './FeaturesGrid';

const RoofingServices = ({title, description, content, gridCol = "4"}) => {
  return (
    <section className="flex flex-col gap-12 max-mobile2:gap-9 items-center py-[64px] px-16 max-mobile2:pt-16 max-mobile2:pb-[36px] max-mobile2:px-[20px]">
      <ServicesHeader title={title} description={description} />
      <FeaturesGrid content={content} gridCol={gridCol} />
    </section>
  );
};

export default RoofingServices;
