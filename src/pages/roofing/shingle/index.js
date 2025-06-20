// Step 1: Import React
import React from "react";
import Layout from "../../../components/layout/layout";
import RoofingHero from "../../../components/RoofingHero/RoofingHero";
import DescriptionImage from "../../../components/DescriptionImage/DescriptionImage";
import MeetingRoomImage from "./images/meeting.png";
import ShingleRoofDescImage from "./images/shingle-roof-desc.png";
import Checklist from "../../../components/Checklist/Checklist";
import RecentProjects from "../../../components/RecentProjects/RecentProjects";
import LogoBanner from "../../../components/LogoBanner/LogoBanner";

import checklistData from "./checklistData";
import recentProjectData from "../../../projectData/shingle/data/recentProjectData";

import EPPLogo from "./logo/1.png";
import kentLogo from "./logo/kent.jpg";
import logoLogo from "./logo/2.png";
import OIPLogo from "./logo/3.png";
import picture2Logo from "./logo/Picture2.png";
import picture3Logo from "./logo/4.png";
import rLogo from "./logo/5.png";
import fiveLogo from "./logo/6.png";

const roofDescription = () => {
  return (
    <>
      <p className="text-gray1">
        Many homeowners don't think about their roof—until it's too late. Your
        roof is one of the most important parts of your home's structure, and
        delaying repairs or replacement can lead to serious and costly damage.
        That's why choosing the right roofing contractor in Halifax matters. At
        NS Roofer, we specialize in
        <span className="text-orange font-bold">
          {" "}
          asphalt shingled and sloped roofs
        </span>
        , delivering quality, reliability, and peace of mind.
      </p>
      <p className="text-gray1">
        Neglecting your roof can result in damage to drywall, insulation,
        structural wood, flooring, and even your home’s overall structural
        integrity. Don’t wait until small problems turn into major repairs—let
        our expert team help you protect your biggest investment.
      </p>
    </>
  );
};

const teamDescription = () => {
  return (
    <>
      <p className="text-gray1">
        At the heart of our business is a team that brings expert product
        knowledge and real-world experience to every job. With over a decade of
        hands-on work both on the roof and in the field, we’re not just selling
        solutions—we're helping you make the right choice for your property.
      </p>
      <p className="text-gray1">
        We’re proud to be accredited and certified installers, committed to
        following all manufacturer specifications to the tee. Our craftsmanship
        goes above industry standards—guaranteeing 6 nails per shingle for added
        durability and peace of mind.
      </p>
      <p className="text-gray1">
        When you work with us, you’re getting more than a service. You’re
        getting a team that cares, knows the industry in-depth, and stands by
        every roof we install.
      </p>
    </>
  );
};

const logos = [
  { src: EPPLogo, className: "h-[48px] max-md:h-[96px]" },
  { src: kentLogo, className: "h-[48px] max-md:h-[96px]" },
  { src: logoLogo, className: "h-[48px] max-md:h-[96px]" },
  { src: OIPLogo, className: "h-[48px] max-md:h-[96px]" },
  { src: picture2Logo, className: "h-[48px] max-md:h-[96px]" },
  { src: picture3Logo, className: "h-[48px] max-md:h-[96px]" },
  { src: rLogo, className: "h-[48px] max-md:h-[96px]" },
  { src: fiveLogo, className: "h-[48px] max-md:h-[96px]" },
];

// Step 2: Define your component
const ShingleRoofPage = () => {
  return (
    <Layout pageTitle="About Me">
      <RoofingHero
        imgUrl={
          "https://cdn.builder.io/api/v1/image/assets/TEMP/e62a980ba634824ef0bb77edbf6f244618accf1d?placeholderIfAbsent=true&apiKey=38f565fe81c246beac087e9546709a6d"
        }
      />
      <DescriptionImage
        title="Shingle Roof"
        description={roofDescription()}
        image={ShingleRoofDescImage}
      />
      <Checklist
        title="Benefits of Asphalt Shingled Roofs"
        content={checklistData()}
        className="bg-cloud-grey text-black"
      />
      <DescriptionImage
        title="Meet Our Team"
        description={teamDescription()}
        image={MeetingRoomImage}
        className="flex-row-reverse"
      />
      <RecentProjects
        title="Ready to Talk Roofing?"
        description="Book a free consultation with NS Roofer today. Our team is here to educate you on your options and guide you to the right roofing solution before you make a decision. Your home deserves the best—let’s get started."
        data={recentProjectData}
      />
      <LogoBanner logos={logos} className="bg-white" />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Shingle, Metal & Flat Roof Experts in Halifax | NS Roofer</title>
    <meta
      name="description"
      content="NS Roofer offers expert roofing services in Halifax, including shingle, metal, and flat roof installations. Get durable, energy-efficient, and long-lasting solutions with free consultations."
    />
  </>
);

// Step 3: Export your component
export default ShingleRoofPage;
