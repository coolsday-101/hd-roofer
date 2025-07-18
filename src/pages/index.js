// Step 1: Import React
import React from "react";
import Layout from "../components/layout/layout";
//import { StaticImage } from "gatsby-plugin-image";
//import image from "../images/test.png";
import HeroSection from "../components/HeroSection/HeroSection";
import DescriptionImage from "../components/DescriptionImage/DescriptionImage";
import Checklist from "../components/Checklist/Checklist";
import RoofingServices from "../components/RoofingServices/RoofingServices";
import ServicesYouCanTrust from "../components/ServicesYouCanTrust/ServicesYouCanTrust";
import LogoBanner from "../components/LogoBanner/LogoBanner";
import BringSolarToLife from "../components/ProjectCarousel/BringSolarToLife";
import data from "../components/ProjectCarousel/data/data";

import checklistData from "./checklistData";

//import EPPLogo from "./logo/EPP.png";
import kentLogo from "./logo/kent.jpg";
import picture2Logo from "./logo/Picture2.png";
import picture3Logo from "./logo/Picture3.png";
import rLogo from "./logo/R.png";

import ExternalImage from "../components/RoofingServices/images/foundation_torso-business.svg";
import SolarImage from "../components/RoofingServices/images/ph_solar-panel-fill.svg";
import RepairImage from "../components/RoofingServices/images/ri_contract-fill.svg";
import QuoteImage from "../components/RoofingServices/images/uiw_setting.svg";
import HomeImage from "./images/long-shot-man-working-roof.avif";

import workmanshipImage from "./images/workmanship.png";
import fourtyEightHourImage from "./images/48-hour.png";
import unbeatableImage from "./images/unbeatable.png";
import top5Image from "./images/top5.png";
import solarImage from "./images/solar.png";
import annualImage from "./images/annual.png";

const logos = [
  { src: kentLogo, className: "h-[96px] md:h-[48px]" },
  { src: picture2Logo, className: "h-[96px] md:h-[48px]" },
  { src: picture3Logo, className: "h-[96px] md:h-[48px]" },
  { src: rLogo, className: "h-[96px] md:h-[48px]" },
];

const features = [
  {
    title: "External Renovation Experts",
    imageSrc: ExternalImage,
  },
  {
    title: "Roofing, Siding, Eavestroughs, Windows & Doors",
    imageSrc: SolarImage,
  },
  {
    title: "Attic Insulation Top-ups with Energy Rebates",
    imageSrc: QuoteImage,
  },
  {
    title: "FREE, Clear & Written Quotes Within 48 Hours",
    imageSrc: RepairImage,
  },
];

const servicesData = [
  {
    title: "Quality Workmanship with Long-Term Warranty",
    description:
      "Expect top-tier craftsmanship from our experienced roofing professionals, backed by an up to seven-year labour warranty and a 50-year materials warranty.",
    imageUrl: workmanshipImage,
  },
  {
    title: "48-Hour Quotation & Instant Communication",
    description:
      "We guarantee a quotation within 48 hours for projects in HRM and surrounding areas, with instant communication from the start — subject to the availability of aerial images.",
    imageUrl: fourtyEightHourImage,
  },
  {
    title: "Year-Round Installation at Unbeatable Prices",
    description:
      "We offer year-round installations at highly competitive rates— all thanks to our efficiency and cost-effective approach. Our team is prepared to successfully install asphalt shingles, even in cold weather by following all recommended adjustments.",
    imageUrl: unbeatableImage,
  },
  {
    title: "Top 5% Roofer with Accredited Installers",
    description:
      "Certified by GAF, we rank among the top 5% of roofing companies — with accredited installers who have passed rigorous training and assessments.",
    imageUrl: top5Image,
  },
  {
    title: "Solar-Ready Roofs: Installation & Upgrades",
    description:
      "Turn your roof into a solar powerhouse. We upgrade and install roofs to meet solar standards and specialize in renovating and maintaining existing solar systems — all with precision, care, and expert craftsmanship.",
    imageUrl: solarImage,
  },
  {
    title: "Free Annual Inspection",
    description:
      "We offer two free annual drone inspections for every job site. Our team checks for proper shingle installation and identifies any damage before sealing — ensuring lasting protection and peace of mind.",
    imageUrl: annualImage,
  },
];

const homeDescription = () => {
  return (
    <>
      <p className="text-gray1">
        <span className="text-dark-green font-bold">
          Fast, code-compliant repairs when hail, wind or ice hit your home.
        </span>{" "}
        We’re locally licensed, bonded and insured, and every job meets—or
        exceeds—the Alberta Building Code (2019) and{" "}
        <a href="http://calgary.ca" className="text-blue-500 underline">
          City of Calgary
        </a>{" "}
        permit rules. Routine “like-for-like” roof or siding replacements
        usually don’t need a permit, but if you’re upgrading materials we’ll
        pull the paperwork for you and book the inspections for a hassle-free
        rebuild.
      </p>
    </>
  );
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection
        title="The One-Stop Exterior Team"
        description="Affordable. Reliable. Local."
        imageName="home-hero.png"
      />
      <RoofingServices
        title="For comprehensive roofing solutions, we cover new installations, repairs, upgrades for siding, roofs, gutters, trim, insulation, and more—all in one place."
        description="Delivering a seamless, curb-appeal-boosting finish at a down-to-earth price."
        content={features}
        gridCol="4"
      />
      <DescriptionImage
        title="24/7 Storm-Damage & Siding Rescue"
        description={homeDescription()}
        image={HomeImage}
        className="bg-cloud-grey"
      />
      <Checklist
        title="Why Homeowners Call Us First After a Storm"
        content={checklistData()}
        className="text-black"
      />
      <ServicesYouCanTrust
        title="Roofing Made Simple. Services You Can Trust."
        description={
          <>
            <p className="text-lg font-semibold text-gray-950">
              Call Us Today:
            </p>
            <a href="tel:(647) 953-5046" className="text-lg text-indigo-700">
              (647) 953-5046
            </a>
          </>
        }
        content={servicesData}
        className="bg-cloud-grey"
      />
      <BringSolarToLife projectData={data} />
      <LogoBanner logos={logos} />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Top Roofing Experts in Calgary | HD Roofer</title>
    <meta
      name="description"
      content="Trusted local roofing company serving Calgary with affordable installations, solar-ready upgrades, and fast repairs. Get a FREE quote in 48 hours. Quality guaranteed with long-term warranties."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
