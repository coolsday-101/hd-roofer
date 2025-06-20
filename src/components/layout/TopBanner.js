import React from "react";
//import FinanceItLogo from "../../images/logo/financeit-logo.svg";
import { StaticImage } from "gatsby-plugin-image";

export default function TopBanner() {
  return (
    <div className="flex max-mobile2:flex-col max-mobile2:gap-4 justify-between items-center px-16 py-2 bg-slate-200 max-md:px-8 max-md:py-2 max-sm:px-4 max-sm:py-2">
      <StaticImage
        src={"../../images/logo/financeit-logo.svg"}
        alt="Finance it Logo"
        layout="fixed"
        width={100}
        height={15}
      />
      <div className="flex flex-col gap-1 items-center">
        <p className="text-xs text-center text-gray-950">
          Take it easy. Don't pay for 3 months. Get an easy, dependable payment
          plan.
        </p>
        <p className="text-sm font-bold text-center text-gray-950">
          ( Lowest Monthly Payment | Don't pay for 3 months | Easy Apply )
        </p>
      </div>
      <button className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded max-sm:mx-auto cursor-pointer">
        <a href="https://www.financeit.ca/en/direct/payment-plan/YT0yOTkyOTEmbD0mcD03eGVwa1ZRYzJpVl9XVXhHc0RYX1d3JnM9MCZ2PTE=/apply">
          Apply Now
        </a>
      </button>
    </div>
  );
}
