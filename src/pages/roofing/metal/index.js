// Step 1: Import React
import React from "react";
import Layout from "../../../components/layout/layout";
import RoofingHero from "../../../components/RoofingHero/RoofingHero";
import DescriptionImage from "../../../components/DescriptionImage/DescriptionImage";
import MetalRoofDescImage from "./images/metal-roof.jpg";
import MetalRoof5113Image from "./images/metal5113.png";

import Checklist from "../../../components/Checklist/Checklist";
import RecentProjects from "../../../components/RecentProjects/RecentProjects";
import LogoImage from "../../../components/LogoBanner/LogoImage";
import RoofBenefits from "../../../components/RoofBenefits/RoofBenefits";
import kentLogo from "./logo/kent.jpg";
import checklistData from "./checklistData";
import recentProjectData from "../../../projectData/metal/data/recentProjectData";
import MetalHeroImage from "./images/metal-hero.png";

const roofDescription = () => {
  return (
    <p className="text-gray1">
      Wondering if a metal roof is right for your home? While the initial cost
      may be higher than asphalt or flat roofing systems, a{" "}
      <span className="text-orange font-bold">
        metal roof is an investment that pays off over time
      </span>
      —in durability, energy efficiency, and long-term value. At NS Roofer, we
      help homeowners across Halifax make confident, informed roofing decisions
      that last for decades.
    </p>
  );
};

const teamDescription = () => {
  return (
    <p className="text-gray1">
      Metal roofing has become increasingly popular in Halifax for good reason.
      Unlike other materials, metal doesn’t crack, warp, rot, or attract mold.
      The panels we use are coated with zinc and aluminum before being painted,
      offering{" "}
      <span className="text-orange font-bold">
        maximum corrosion resistance
      </span>{" "}
      and longevity—ideal for Nova Scotia’s coastal climate.
    </p>
  );
};

const logos = [{ src: kentLogo, className: "h-[96px]" }];

// Step 2: Define your component
const MetalRoofPage = () => {
  return (
    <Layout pageTitle="Metal Roof">
      <RoofingHero imgUrl={MetalHeroImage} />
      <DescriptionImage
        title="Metal Roof"
        description={roofDescription()}
        image={MetalRoofDescImage}
      />
      <RoofBenefits />
      <Checklist
        title="Benefits of Metal Roofing"
        content={checklistData()}
        className="bg-white"
      />
      <DescriptionImage
        title="Built to Withstand Halifax Weather"
        description={teamDescription()}
        image={MetalRoof5113Image}
        className="flex-row-reverse bg-cloud-grey"
      />
      <RecentProjects
        title="Book a Free Consultation"
        description={
          <>
            Whether you’re replacing an aging roof or building a new home, NS
            Roofer is here to help you explore the possibilities of metal
            roofing. Contact us today for a{" "}
            <span className="text-orange font-bold">free consultation</span>,
            and discover why more Halifax homeowners are making the switch to
            metal with confidence.
          </>
        }
        data={recentProjectData}
        className="bg-white"
      />
      <section className="flex bg-cloud-grey flex-col justify-center p-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <LogoImage src={logos[0].src} className={logos[0].className} />
        </div>
      </section>
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
export default MetalRoofPage;
