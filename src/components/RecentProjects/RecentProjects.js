import React from 'react';
import Header from './Header';
//import ProjectCards from './ProjectCards';
import ContactCTA from './ContactCTA';
import EmblaCarousel from './EmblaCarousel';

const RecentProjects = ({title, description, data, className}) => {
  const OPTIONS = { dragFree: true, loop: true };

  return (
    <main className={`flex flex-col justify-center p-16 max-mobile2:pt-9 max-mobile2:pb-16 max-mobile2:px-[20px] w-full bg-cloud-grey max-md:px-5 max-md:max-w-full ${className}`}>
      <div className="flex flex-col gap-6 justify-center w-full max-md:max-w-full max-sm:text-center">
        <Header title={title} description={description} />
        <EmblaCarousel slides={data} options={OPTIONS} />
        <ContactCTA />
      </div>
    </main>
  );
};

export default RecentProjects;
