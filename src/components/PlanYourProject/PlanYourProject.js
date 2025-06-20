import React from "react";
import ArrowImage from "./images/ri_arrow-up-fill.svg";
import { Link } from "gatsby";

const PlanYourProject = ({title, content, cta}) => {
  return (
    <section className="flex flex-col justify-around h-auto p-16 gap-4 max-md:px-[20px] max-md:pt-9 max-md:pb-16">
      <div className="max-w-[1280px] mx-auto window2:w-[1280px]">
      <header className="mb-6">
        <h2 className="font-semibold text-[32px] text-black mb-4">
          {title}
        </h2>
        <p className="text-[14px] text-black">
          {content}
        </p>
      </header>
      <Link
        href="/get-a-quote"
        className="box-border relative shrink-0 h-auto text-lg font-semibold text-gray1"
      >
        {cta}
        <span>
          <img src={ArrowImage} className="inline" />
        </span>
      </Link>
      </div>
    </section>
  );
};

export default PlanYourProject;
