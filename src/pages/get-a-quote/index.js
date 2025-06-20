// Step 1: Import React
import React from "react";
import Layout from "../../components/layout/layout";
import QuoteRequestForm from "../../components/QuoteRequestForm/QuoteRequestForm";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <QuoteRequestForm />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Get a Free Roofing Quote | NS Roofer</title>
    <meta
      name="description"
      content="Ready to start your roofing project? Contact NS Roofer for a free, no-obligation quote. Call us or fill out the form online. Serving Halifax and surrounding areas with trusted roofing solutions."
    />
  </>
);

// Step 3: Export your component
export default IndexPage;
