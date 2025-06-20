import React from "react";
import { InsulationCheckItem } from "./InsulationCheckItem";

export const InsulationContent = () => {
  return (
    <div className="flex-1 shrink my-auto basis-0 min-w-60 max-md:max-w-full">
      <h2 className="flex-1 shrink gap-2 w-full text-3xl basis-0 text-gray-950 max-md:max-w-full">
        Should I Do Insulation?
      </h2>
      <p className="mt-6 leading-6 text-gray-950 max-md:max-w-full">
        If your home experiences any of these problems, it might be a good
        candidate for an insulation project:
      </p>
      <ul className="mt-6 w-full leading-6 max-md:max-w-full space-y-2">
        <InsulationCheckItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3728e75afe7800ab78762df1b5ca751e60031248?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d" text="Drafty rooms" />
        <InsulationCheckItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0fff26b6602c036c35087394752072a19a624a8d?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          text="Hot or cold ceilings, walls, or rooms; uneven temperature between rooms"
        />
        <InsulationCheckItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c9df2f2e0095b5a66ba70d962c0252f874374e?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          text="High heating or cooling bills"
        />
        <InsulationCheckItem
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/afdf33584bc7280ddd51c57c4ea2922cc1215d18?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          text="Ice dams in the winter"
        />
      </ul>
    </div>
  );
};
