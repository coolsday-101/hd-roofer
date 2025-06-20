import React from 'react';
import ArrowImage from "./icons/ri_arrow-up-fill.svg";
import { Link } from 'gatsby';

const QuotePrompt = () => {
  return (
    <Link href="/get-a-quote" className="box-border relative shrink-0 mx-auto mt-5 h-auto text-lg font-semibold text-gray1">
      or click here to request your free quote now!
      <span><img src={ArrowImage} className='inline'/></span>
    </Link>
  );
};

export default QuotePrompt;
