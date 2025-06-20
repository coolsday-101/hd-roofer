// Step 1: Import React
import React from "react";
import Layout from "../../components/layout/layout";
//import { StaticImage } from "gatsby-plugin-image";
//import image from "../images/test.png";
import HeroSection from "../../components/HeroSection/HeroSection";
import RoofingServices from "../../components/RoofingServices/RoofingServices";
//import InsulationSection from "../../components/InsulationSection/InsulationSection";
import NSRooferAdvantage from "../../components/NSRooferAdvantage/NSRooferAdvantage";
//import ServicesYouCanTrust from "../../components/ServicesYouCanTrust/ServicesYouCanTrust";
import { BenefitsGrid } from "../../components/BenefitsGrid/BenefitsGrid";
import RecentProjects from "../../components/RecentProjects/RecentProjects";

import ExternalImage from "./images/price-match.svg";
import SolarImage from "./images/service.svg";
import RepairImage from "./images/lifetime.svg";

import SpeechBubbleImage from "./icons/speech-balloon.svg";
import TeamImage from "./icons/people-team.svg";
import CubeImage from "./icons/ion-cube.svg";
import DeskImage from "./icons/desk-customer.svg";
import WomanImage from "./icons/business-woman.svg";

import recentProjectData from "../../projectData/siding/data/recentProjectData";

const features = [
  {
    title: (
      <span className="text-black font-bold">
        Price Match Guarantee. No Hidden Fees
      </span>
    ),
    imageSrc: ExternalImage,
  },
  {
    title: (
      <span className="text-black font-bold">
        Year-Round Service
      </span>
    ),
    imageSrc: SolarImage,
  },
  {
    title: <span className="text-black font-bold">Double Lifetime Manufacturer Warranty and 10 years workmanship warranty</span>,
    imageSrc: RepairImage,
  },
];

const leftColumnFeatures = [
  {
    imageUrl: SpeechBubbleImage,
    title: "Comprehensive Services",
    description:
      "We don’t just install; we offer full consultation on materials, colours, and energy efficiency.",
  },
  {
    imageUrl:
      TeamImage,
    title: "Experienced Team",
    description:
      "Skilled professionals with years of siding and roofing experience.",
  },
  {
    imageUrl:
      CubeImage,
    title: "Quality Materials",
    description:
      <>Partnered with top suppliers to ensure durable, <span className="text-orange font-bold">Canadian local</span> high-quality siding options.</>,
  },
];

const rightColumnFeatures = [
  {
    imageUrl:
      DeskImage,
    title: "Customer-Centric Approach",
    description:
      "We prioritize customer satisfaction, offering tailored solutions for every home.",
  },
  {
    imageUrl:
      WomanImage,
    title: "Local Expertise",
    description:
      "We understand Nova Scotia’s climate and recommend the best siding solutions for lasting protection.",
  },
];

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection
        title="Siding"
        description="Vinyl Siding, Metal siding, Fascia, Soffit and Eavestrough"
        imageName="siding-hero.png"
      />
      <RoofingServices
        title="Why Choose NS Roofer Siding?"
        content={features}
        gridCol="3"
      />
      <NSRooferAdvantage title="NS Roofer Advantage" leftContent={leftColumnFeatures} rightContent={rightColumnFeatures} />
      <section className="flex flex-col justify-center p-16 max-md:py-9 w-full min-h-[606px] max-md:px-5 max-md:max-w-full">
        <div className="w-full min-h-[478px] max-md:max-w-full max-w-[1280px] mx-auto">
          <h1 className="w-full text-3xl font-semibold text-center text-gray-950 max-md:max-w-full">
            Why Do Siding
          </h1>
          <BenefitsGrid />
        </div>
      </section>
      <RecentProjects title="Recent Project" data={recentProjectData} />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Siding Installation in Halifax | NS Roofer</title>
    <meta
      name="description"
      content="Upgrade your home with durable siding solutions in Halifax. NS Roofer offers vinyl and metal siding, fascia, soffits, and eavestroughs—backed by a double lifetime warranty and expert local service. Get a free estimate today."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
