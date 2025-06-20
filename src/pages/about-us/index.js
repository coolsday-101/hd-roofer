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
//import RepairHeroImage from "./images/repair-hero.png";
//import PlanYourProject from "../../components/PlanYourProject/PlanYourProject";
//import { CompanyPromise } from "../../components/CompanyPromise/CompanyPromise";
//import RepairServices from "../../components/RepairServices/RepairServices";
import DescriptionImage from "../../components/DescriptionImage/DescriptionImage";
import DescImage from "./images/about-us-desc.jpg";
import ServicesSection from "../../components/WhatWeCanHelpWith/ServicesSection";
//import CustomDivider from "../../components/WhatWeCanHelpWith/CustomDivider";
import BringSolarToLife from "../../components/ProjectCarousel/BringSolarToLife";
import data from "../../components/ProjectCarousel/data/data";
import HouseIcon from "./icons/f7_house-fill.svg";
import TeamIcon from "./icons/fluent_people-team-24-filled.svg";
import StarIcon from "./icons/ic_outline-star.svg";
import MaterialIcon from "./icons/material-symbols_person-pin.svg";
import SearchIcon from "./icons/mingcute_search-fill.svg";
import MoneyIcon from "./icons/solar_money-bag-bold.svg";

const topServices = [
  {
    icon: MoneyIcon,
    text: "Full insurance coverage and proper certifications",
  },
  {
    icon: TeamIcon,
    text: "GAF-certified team",
  },
  {
    icon: HouseIcon,
    text: "Experience with government and residential projects",
  },
];

const bottomServices = [
  {
    icon: MaterialIcon,
    text: "Safety Nova Scotia member",
  },
  {
    icon: StarIcon,
    text: "5-star reviews from satisfied customers",
  },
  {
    icon: SearchIcon,
    text: "Free inspections and honest advice",
  },
];

const roofDescription = () => {
  return (
    <>
      <p className="text-gray1">
        At <span className="text-orange font-bold">NS Roofer</span>, we take
        pride in delivering reliable, high-quality roofing services across
        Halifax and surrounding areas. Whether you need a{" "}
        <span className="text-orange font-bold">full roof replacement</span>,
        timely <span className="text-orange font-bold">repairs</span>, or
        improved <span className="text-orange font-bold">attic insulation</span>
        , our experienced team is here to protect your home with expert
        craftsmanship and trusted materials.
      </p>
      <p className="text-gray1">
        We are a{" "}
        <span className="text-orange font-bold">
          GAF-certified roofing contractor
        </span>
        , our work has been recognized in multiple{" "}
        <span className="text-orange font-bold">
          government-funded projects
        </span>
        , and we’re proud to be known for our professionalism and consistent{" "}
        <span className="text-orange font-bold">5-star customer reviews</span>.
        As a fully insured and certified company, we put safety and
        accountability first. NS Roofer is a proud member of{" "}
        <span className="text-orange font-bold">Safety Nova Scotia</span>, and
        all of our team members are trained to deliver safe, clean, and
        efficient work on every project.
      </p>
      <p className="text-gray1">
        Whether it’s a small leak or a full roof upgrade, you can count on us to
        deliver roofing solutions that last. We believe in honest communication,
        transparent pricing, and building long-term trust with every homeowner
        we serve.
      </p>
    </>
  );
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <HeroSection title="About Us" imageName="about-hero.png" />
      <DescriptionImage
        title="Trusted Roofing Experts Serving Halifax and Beyond"
        description={roofDescription()}
        image={DescImage}
        className="flex-row-reverse"
      />
      <ServicesSection topServices={topServices} bottomServices={bottomServices} />
      <BringSolarToLife projectData={data} />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Certified Roofing Experts in Halifax | NS Roofer</title>
    <meta
      name="description"
      content="Learn about NS Roofer—GAF-certified, fully insured roofing professionals serving Halifax and beyond. Trusted for quality, safety, and 5-star service in residential and government projects."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
