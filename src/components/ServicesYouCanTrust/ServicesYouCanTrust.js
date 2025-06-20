import React from 'react';
import RoofingHeader from './RoofingHeader';
import ServicesGrid from './ServicesGrid';
import QuotePrompt from './QuotePrompt';

const ServicesYouCanTrust = ({title, description, cta = true, content, className}) => {
  return (
    <section className={`flex flex-col gap-12 max-mobile2:gap-9 p-16 max-mobile2:py-9 max-mobile2:px-[20px] border border-none ${className}`}>
      <RoofingHeader title={title} description={description} cta={cta} />
      <ServicesGrid content={content} />
      {cta && <QuotePrompt />}
    </section>
  );
};

export default ServicesYouCanTrust;
