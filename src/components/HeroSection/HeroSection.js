import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import { StaticImage } from "gatsby-plugin-image";

const HeroSection = ({ title, description, imageName = "repair-hero.png" }) => {
  // GraphQL query to get the image based on its filename
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { in: ["jpg", "jpeg", "png"] } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 800, quality: 90)
          }
        }
      }
    }
  `);

  // Find the image based on the imageName prop
  const image = data.allFile.nodes.find(
    (node) => node.relativePath.includes(imageName)
  );

  console.log(image);

  // Get the image using getImage helper function
  const imageData = getImage(image?.childImageSharp);

  return (
    <section className="relative flex flex-col gap-4 justify-center items-center px-0 py-32 bg-center bg-no-repeat bg-cover h-[350px] max-sm:px-4 max-sm:py-16">
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      {/* StaticImage for optimized local image */}
      <GatsbyImage
        image={imageData}  // Path to image relative to component
        alt="Hero background"
        className="!absolute inset-0 w-full h-full object-cover"
        placeholder="blurred"
        layout="fullWidth"
      />
      <div className="relative flex flex-col items-center z-2">
        <h1 className="text-5xl font-bold text-center text-white max-md:text-4xl max-sm:text-3xl">
          {title}
        </h1>
        <p className="text-lg font-semibold text-center text-white max-sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
