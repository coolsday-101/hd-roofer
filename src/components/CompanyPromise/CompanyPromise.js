import React from "react";

export const CompanyPromise = () => {
  return (
    <section className="flex relative flex-col justify-center items-start p-16 w-full min-h-[497px] max-md:px-5 max-md:py-9 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dd5d1981d089986992fa80b02192649bda3882e?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
        alt=""
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <div className="flex relative flex-col justify-center max-w-full w-[1280px] mx-auto">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <h2 className="flex-1 shrink gap-2 w-full text-3xl font-semibold text-blue-400 basis-0 max-md:max-w-full">
            Our Promise to You
          </h2>
          <div className="mt-4 text-sm leading-6 text-white max-md:max-w-full">
            <p>
              We're not just here to fix—we're here to protect your home. That's
              why every repair is
            </p>
            <p>
              completed with care, quality materials, and attention to detail.
            </p>
            <p>
              Our quotes are clear, our team is responsive, and our service is
              backed by years of local experience.
            </p>
            <p className="font-bold text-base leading-6 mt-2">
              Warranty details are included in the contract
            </p>
            <p className="mt-2">
              Feel free to review it anytime for full information on coverage
              periods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
