// Step 1: Import React
import React from "react";
import Layout from "../../components/layout/layout";
import HeroSection from "../../components/HeroSection/HeroSection";
//import { StaticImage } from "gatsby-plugin-image";
//import image from "../images/test.png";
//import RoofingServices from "../../components/RoofingServices/RoofingServices";
//import InsulationSection from "../../components/InsulationSection/InsulationSection";
//import NSRooferAdvantage from "../../components/NSRooferAdvantage/NSRooferAdvantage";
//import ServicesYouCanTrust from "../../components/ServicesYouCanTrust/ServicesYouCanTrust";
//import { BenefitsGrid } from "../../components/BenefitsGrid/BenefitsGrid";
//import RecentProjects from "../../components/RecentProjects/RecentProjects";
import DescriptionImage from "../../components/DescriptionImage/DescriptionImage";
import DescImage from "./images/guy-drilling.png";
//import RepairHeroImage from "./images/repair-hero.png";
import PlanYourProject from "../../components/PlanYourProject/PlanYourProject";
import { CompanyPromise } from "../../components/CompanyPromise/CompanyPromise";
//import RepairServices from "../../components/RepairServices/RepairServices";
import ServicesSection from "../../components/WhatWeCanHelpWith/ServicesSection";
import CustomDivider from "../../components/WhatWeCanHelpWith/CustomDivider";

const topServices = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d489d6f76dc40009a1f45f91d89af1865583f32?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Storm or wind damage",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/296b6ac5e5fa7d73da4ae990c9b8ac3cd80e8570?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Leaks & water damage",
  },
  {
    customContent: <CustomDivider />,
    text: "Fascia/Soffit Repair",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb0a36d5e7b14b0240552279492c7e3aed1a4231?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Flashing repairs",
  },
];

const bottomServices = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6946c96f44cfb5c6cb099c1a345bec57b7dbd3e?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Missing or damaged shingles",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/68b48a45547467940cbcd52201f096bf569adbf9?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Siding Repair",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33a2d1792d44db7fcbee8b59f4da4993ae4ca8a9?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d",
    text: "Gutter and drainage issues",
  },
];

const roofDescription = () => {
  return (
    <>
      <p className="text-gray1">
        At <span className="text-orange font-bold">NS Roofer</span>, we
        understand how important it is to take care of roof issues early—whether
        it’s a small leak, missing shingles, or signs of storm damage. Even
        minor problems can lead to major repairs if left untreated, which is why
        we’re here to help with prompt, reliable roof repair services across
        Halifax and surrounding areas.
      </p>
      <p className="text-gray1">
        Our experienced team will assess your roof’s condition and recommend the
        most effective, budget-friendly repair solution. We work with all major
        roofing systems, including{" "}
        <span className="text-orange font-bold">
          asphalt shingles, metal roofing, and flat roofs
        </span>
        , and we always aim to extend the life of your roof whenever possible.
      </p>
    </>
  );
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection
        title="Repair"
        description="Reliable, Professional Roof Repairs in Halifax"
      />
      <DescriptionImage
        title="Reliable, Professional Roof Repairs in Halifax"
        description={roofDescription()}
        image={DescImage}
        className="flex-row-reverse"
      />
      <ServicesSection
        topServices={topServices}
        bottomServices={bottomServices}
      />
      <CompanyPromise />
      <PlanYourProject
        title="Book Your Free Inspection"
        content={
          <>
            Not sure if your roof needs a repair or a full replacement? Contact
            us today to schedule a{" "}
            <span className="text-orange font-bold">free roof inspection</span>.
            We'll walk you through your options and help you make the right
            choice—without pressure.
          </>
        }
        cta="Schedule Now"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Roof Repair Services in Halifax | NS Roofer</title>
    <meta
      name="description"
      content="Need roof repairs in Halifax? NS Roofer offers fast, affordable fixes for leaks, missing shingles, storm damage, and more. Free inspections and clear quotes—contact us today."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
