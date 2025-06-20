import React from 'react';

export const FormInput = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
      <label className="text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="gap-2.5 self-stretch p-2 mt-1 w-full text-xs bg-white rounded border border-solid border-[color:var(--Grey-for-Line,#D8E2EB)] text-neutral-400"
      />
    </div>
  );
};

export const FormDropdown = ({ label, placeholder }) => {
  return (
    <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
      <label className="text-sm font-semibold text-black">
        {label}
      </label>
      <div className="flex gap-10 justify-between items-center p-2 mt-1 w-full text-xs bg-white rounded border border-solid border-[color:var(--Grey-for-Line,#D8E2EB)] text-neutral-400">
        <select className="w-full bg-transparent outline-none text-neutral-400 cursor-pointer">
          <option value="">{placeholder}</option>
        </select>
      </div>
    </div>
  );
};

export const FormTextArea = ({ label, placeholder }) => {
  return (
    <div className="mt-4 w-full min-h-[83px]">
      <label className="text-sm font-semibold text-black">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className="flex-1 gap-2.5 p-2 mt-1 text-xs bg-white rounded border border-solid border-[color:var(--Grey-for-Line,#D8E2EB)] size-full text-neutral-400 w-full"
      />
    </div>
  );
};
