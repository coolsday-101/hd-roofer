import React from 'react';

const CustomDivider = () => {
  return (
    <div className="flex self-center py-4 w-[90px]">
      <div className="flex shrink-0 w-6 h-4 bg-white" />
      <div className="flex shrink-0 self-start mt-1 h-2 bg-white w-[68px] max-md:mr-0" />
      <div className="flex shrink-0 w-6 h-4 bg-white" />
    </div>
  );
};

export default CustomDivider;
