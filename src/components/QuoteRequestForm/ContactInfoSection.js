import React from 'react';

export const ContactInfoSection = () => {
  return (
    <section className="flex relative flex-col flex-1 shrink p-16 text-white basis-0 min-h-[584px] min-w-60 max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8673be51a4330cbfebe38c63ac7a1b70207f2d3?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative text-5xl font-bold text-cyan1 max-md:max-w-full max-md:text-4xl">
        Get a Quote
      </h1>
      <p className="relative mt-6 text-lg font-semibold max-md:max-w-full">
        Reach out to us and we will get back to you within 48 hours.
      </p>
      <address className="relative mt-6 w-full text-sm leading-loose max-md:max-w-full not-italic">
        <p className="max-md:max-w-full">
          Unit 1, 30 Rosno Lane, Bedford, NS B4B 1J7
        </p>
        <p className="mt-2 max-md:max-w-full">
          <a href="mailto:sales@nsroofer.com" target="_blank" rel="noopener noreferrer">
            sales@nsroofer.com
          </a>
        </p>
        <p className="mt-2 max-md:max-w-full">
          (647) 953-5014 | (902) 448-0428
        </p>
      </address>
    </section>
  );
};
