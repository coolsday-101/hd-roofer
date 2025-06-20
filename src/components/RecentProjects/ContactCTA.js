import React from "react";
import { Link } from "gatsby";

const ContactCTA = () => {
  return (
    <section className="flex gap-2 justify-center items-center self-start mt-6 text-lg font-semibold text-gray-500">
      <Link href="/get-a-quote" className="flex">
        <p className="self-stretch my-auto text-gray-500">
          Contact Us Today to get a free estimate
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72a29636f030b9f4cc51f731708b085580fe615?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
          alt="Contact icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </Link>
    </section>
  );
};

export default ContactCTA;
