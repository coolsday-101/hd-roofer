import React from 'react';
import { FormInput, FormDropdown, FormTextArea } from './FormComponents';

export const QuoteFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="max-tablet2:h-[1200px] min-w-60 w-[720px] max-md:px-5 max-md:max-w-full flex-auto overflow-hidden">
      <div className="relative w-full h-full">
      <iframe
        src="https://forms.clickup.com/14264517/f/dka65-68051/D7USVUE3UKMO0UL811"
        className="relative overflow-hidden w-full h-full border-0"
        allowFullScreen
        title="ClickUp Form"
      ></iframe>
    </div>
    </section>
  );
};
