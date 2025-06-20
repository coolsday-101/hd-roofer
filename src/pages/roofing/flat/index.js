// Step 1: Import React
import React from "react";
import Layout from "../../../components/layout/layout";
import RoofingHero from "../../../components/RoofingHero/RoofingHero";
import DescriptionImage from "../../../components/DescriptionImage/DescriptionImage";
import Flat1Image from "./images/flat-1.png";
import Flat2Image from "./images/flat-2.png";
import Checklist from "../../../components/Checklist/Checklist";
//import RecentProjects from "../../../components/RecentProjects/RecentProjects";
//import LogoBanner from "../../../components/LogoBanner/LogoBanner";
//import RoofBenefits from "../../../components/RoofBenefits/RoofBenefits";
import PlanYourProject from "../../../components/PlanYourProject/PlanYourProject";
import checklistData from "./checklistData";
import FlatHeroImage from "./images/flat-hero.png";

const roofDescription = () => {
  return (
    <>
      <p className="text-gray1">Custom Flat Roofing for Halifax Homes.</p>
      <p className="text-gray1">
        At NS Roofer, we specialize in flat roofing systems built for Halifax’s
        unique climate. Whether you want better energy efficiency, more usable
        space, or long-term protection, we offer a range of customizable options
        to match your needs.
      </p>
      <p className="text-gray1">
        From torch-on to TPO and PVC, we help you choose the right material and
        insulation for your home. Every system includes the option to add
        insulation on top—reducing heat loss, preventing mold, and boosting
        comfort.
      </p>
      <p className="text-gray1">Built to last. Designed for your home.</p>
    </>
  );
};

const teamDescription = () => {
  return (
    <>
      <p className="text-gray1">
        At NS Roofer, we offer{" "}
        <span className="text-orange font-bold">
          custom flat roofing systems
        </span>{" "}
        backed by a range of warranties based on the number of layers installed.
        If you’re planning to add a deck or patio above your flat roof, we
        typically recommend a
        <span className="text-orange font-bold">minimum 2-ply system</span> for
        added strength and durability.
      </p>
      <p className="text-gray1">
        Thinking of expanding your living space? With proper framing, parts of
        your flat roof can be converted into additional living areas. Our
        experienced team can walk you through every step—ensuring the job is
        done right from start to finish.
      </p>
    </>
  );
};

// Step 2: Define your component
const FlatRoofPage = () => {
  return (
    <Layout pageTitle="Flat Roof">
      <RoofingHero imgUrl={FlatHeroImage} />
      <DescriptionImage
        title="Flat Roof"
        description={roofDescription()}
        image={Flat1Image}
      />
      <Checklist
        title="Benefits of a Professionally Installed Flat Roof"
        content={checklistData()}
        className="bg-cloud-grey"
      />
      <DescriptionImage
        title="Built for Performance and Possibility"
        description={teamDescription()}
        image={Flat2Image}
        className="flex-row-reverse"
      />
      <PlanYourProject
        title="Let's Plan Your Project"
        content={
          <>
            Flat roofing opens up endless possibilities—from modern green roof
            systems to stylish rooftop decks. Contact NS Roofer today to{" "}
            <span className="text-orange font-bold">
              schedule your free consultation
            </span>
            , and let’s explore how to make your flat roof work smarter for your
            home.
          </>
        }
        cta="Schedule Now"
      />
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
export default FlatRoofPage;
