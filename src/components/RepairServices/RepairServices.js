import React from "react";

const RepairServices = () => {
  return (
    <section className="bg-navy py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          What We Can Help With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Service 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Storm or wind damage</p>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Leaks & water damage</p>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Fascia/Soffit Repair</p>
          </div>
          {/* Service 4 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Flashing repairs</p>
          </div>
          {/* Service 5 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Missing or damaged shingles</p>
          </div>
          {/* Service 6 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Siding Repair</p>
          </div>
          {/* Service 7 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              {/* Icon Placeholder */}
              ICON
            </div>
            <p className="text-white">Gutter and drainage issues</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairServices;
