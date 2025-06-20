import React, { useState } from "react";
import { Link } from "gatsby"; // Import Gatsby's Link component
import { useLocation } from "@reach/router";
import BackgroundImage from "./BackgroundImage";
import FilterTag from "./FilterTag";

const RoofingHero = ({imgUrl}) => {
  //const [activeFilter, setActiveFilter] = useState("Shingle Roof");
  const location = useLocation();

  // Split the URL path by '/' and get the last part (in this case, 'shingle')
  const pathParts = location.pathname.split("/"); 
  const roofingType = pathParts[pathParts.length - 2]; // "shingle"
  console.log("roofing type", pathParts)

  const filters = [
    { label: "Shingle Roof", path: "/roofing/shingle", isActive: roofingType === "shingle" },
    { label: "Metal Roof", path: "/roofing/metal", isActive: roofingType === "metal" },
    { label: "Flat Roof", path: "/roofing/flat", isActive: roofingType === "flat" },
  ];

  return (
    <section className="flex relative flex-col py-32 w-full text-center min-h-[350px] max-md:py-24 max-md:max-w-full">
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      <BackgroundImage src={imgUrl} alt="Roofing background" />

      <h1 className="relative z-2 text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
        Roofing
      </h1>

      <div className="flex relative z-2 flex-wrap gap-2 justify-center items-center self-center mt-4 max-w-full text-xs font-medium text-slate-500 w-[980px]">
        {filters.map((filter) => (
          <Link
          key={filter.label}
          to={filter.path} // Use the `path` for each filter
        >
          <FilterTag
            key={filter.label}
            label={filter.label}
            isActive={filter.isActive}
          />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoofingHero;
