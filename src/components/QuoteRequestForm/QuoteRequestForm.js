import React from 'react';
import { ContactInfoSection } from './ContactInfoSection';
import { QuoteFormSection } from './QuoteFormSection';

const QuoteRequestForm = () => {
  return (
    <main className="flex flex-wrap justify-start tablet2:h-[850px]">
      <ContactInfoSection />
      <QuoteFormSection />
    </main>
  );
};

export default QuoteRequestForm;
