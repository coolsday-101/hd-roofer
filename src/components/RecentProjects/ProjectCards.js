import React from "react";

const ProjectCards = () => {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-slate-600 max-md:max-w-full">
        Recent Projects
      </h2>
      <div className="flex flex-wrap gap-2 mt-6 w-full min-h-64 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/106a2475b9e8fb20a81a6eeaa37da3d69b427cc0?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 1"
          className="object-contain window2:flex-1 shrink aspect-[0.72] basis-0 w-[185px] max-sm:self-stretch max-sm:w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e115dd7719b07a9d6aed4602a95e3856471c83bb?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 2"
          className="object-contain window2:flex-1 shrink aspect-[0.73] basis-0 w-[186px] max-sm:self-stretch max-sm:w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e88098a9792cdffebed1abe3aae8c1e7f04f7d6?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 3"
          className="object-contain window2:flex-1 shrink aspect-[0.72] basis-0 w-[185px] max-sm:self-stretch max-sm:w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/106a2475b9e8fb20a81a6eeaa37da3d69b427cc0?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 4"
          className="object-contain window2:flex-1 shrink aspect-[0.72] basis-0 w-[185px] max-sm:self-stretch max-sm:w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e115dd7719b07a9d6aed4602a95e3856471c83bb?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 5"
          className="object-contain window2:flex-1 shrink aspect-[0.73] basis-0 w-[186px] max-sm:self-stretch max-sm:w-full"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e88098a9792cdffebed1abe3aae8c1e7f04f7d6?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Recent roofing project 6"
          className="object-contain window2:flex-1 shrink aspect-[0.72] basis-0 w-[185px] max-sm:self-stretch max-sm:w-full"
        />
      </div>
    </section>
  );
};

export default ProjectCards;
