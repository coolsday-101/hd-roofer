import React from "react";

const Checklist = ({title, content, className}) => {
  return (
    <section className={`${className} py-16 px-16 max-mobile2:px-[20px] max-mobile2:py-9`}>
      <h2 className="text-2xl font-bold mb-12 text-center">
        {title}
      </h2>
      {content}
    </section>
  );
};

export default Checklist;
