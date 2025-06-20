// Step 1: Import React
import React from "react";
import Layout from "../../components/layout/layout";
//import { StaticImage } from "gatsby-plugin-image";
//import image from "../images/test.png";
import HeroSection from "../../components/HeroSection/HeroSection";
import RoofingServices from "../../components/RoofingServices/RoofingServices";
import InsulationSection from "../../components/InsulationSection/InsulationSection";
import NSRooferAdvantage from "../../components/NSRooferAdvantage/NSRooferAdvantage";
import ServicesYouCanTrust from "../../components/ServicesYouCanTrust/ServicesYouCanTrust";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import ExternalImage from "./images/price-match.svg";
import SolarImage from "./images/warranty.svg";
import RepairImage from "./images/material.svg";

import workmanshipImage from "./images/home-comfort.png";
import fourtyEightHourImage from "./images/cost-savings.png";
import unbeatableImage from "./images/increased-home-value.png";
import top5Image from "./images/noise-reduction.png";
import solarImage from "./images/moisture-control.png";
import annualImage from "./images/tax-incentives.png";

import budgetIcon from "./icons/budget.svg";
import customizedIcon from "./icons/customized.svg";
import localIcon from "./icons/local.svg";
import priceIcon from "./icons/price.svg";
import providerIcon from "./icons/provider.svg";
import seamlessIcon from "./icons/seamless.svg";
import yearIcon from "./icons/year.svg";

import recentProjectData from "../../projectData/insulation/data/recentProjectData";

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
        One-Year Workmanship Warranty
      </span>
    ),
    imageSrc: SolarImage,
  },
  {
    title: <span className="text-black font-bold">By Canadian Material</span>,
    imageSrc: RepairImage,
  },
];

const servicesData = [
  {
    title: "Enhanced Comfort",
    description:
      "A well-insulated attic helps maintain a consistent indoor temperature, reducing drafts and cold spots.",
    imageUrl: workmanshipImage,
  },
  {
    title: "Cost Savings",
    description:
      "Lower energy consumption translates to significant long-term savings on heating and cooling costs.",
    imageUrl: fourtyEightHourImage,
  },
  {
    title: "Increased Home Value",
    description:
      "Energy-efficient upgrades like attic insulation are attractive to potential buyers, boosting your home's resale value.",
    imageUrl: unbeatableImage,
  },
  {
    title: "Noise Reduction",
    description:
      "Insulation can also act as a sound barrier, minimizing noise from outside and creating a quieter living space.",
    imageUrl: top5Image,
  },
  {
    title: "Moisture Control",
    description:
      "Proper insulation helps prevent moisture buildup, reducing the risk of mold growth and structural damage.",
    imageUrl: solarImage,
  },
  {
    title: "Tax Incentives",
    description:
      "In Nova Scotia, adding insulation qualifies for government rebates or tax credits, offsetting installation costs.",
    imageUrl: annualImage,
  },
];

const leftColumnFeatures = [
  {
    imageUrl: localIcon,
    title: "Local Material",
    description:
      "Locally Sourced Materials. Comprehensive Roofing & Insulation Services. Guaranteed Satisfaction.",
  },
  {
    imageUrl: budgetIcon,
    title: "Budget-Friendly",
    description:
      "Bundling services cuts costs and guarantees consistent quality across all work.",
  },
  {
    imageUrl: yearIcon,
    title: "Year-Round Quick Service",
    description:
      "Emergency repairs or planned upgrades—we're here 365 days a year.",
  },
  {
    imageUrl: priceIcon,
    title: "Price Match Guarantee",
    description: "Transparent price with NO HIDDEN fee",
  },
];

const rightColumnFeatures = [
  {
    imageUrl: providerIcon,
    title: "One-Stop Service Provider",
    description:
      "Tackle attic ventilation, siding, drywall, and insulation in one project instead of coordinating with multiple contractors.",
  },
  {
    imageUrl: seamlessIcon,
    title: "Seamless Coordination",
    description:
      "Our expert team handles every detail, ensuring flawless integration of services.",
  },
  {
    imageUrl: customizedIcon,
    title: "Customized to You",
    description:
      "Your vision, our expertise. Every project is tailored to your style and needs.",
  },
];

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection
        title="Insulation"
        description="Blow-In Insulation, wall insulation, batt insulation, Insulation removal"
        imageName="insulation-hero.png"
      />
      <RoofingServices
        title="Why Choose NS Roofer Insulation?"
        content={features}
        gridCol="3"
      />
      <InsulationSection />
      <ServicesYouCanTrust
        title="Why Install Insulation"
        content={servicesData}
        cta={false}
      />
      <NSRooferAdvantage
        title="NS Roofer Advantage"
        leftContent={leftColumnFeatures}
        rightContent={rightColumnFeatures}
      />
      <RecentProjects title="Recent Project" data={recentProjectData} />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Home Insulation Services in Halifax | NS Roofer</title>
    <meta
      name="description"
      content="Improve comfort and cut energy bills with expert insulation services in Halifax. NS Roofer offers blow-in, wall, and batt insulation with a price match guarantee and no hidden fees. Book your free consultation today."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
