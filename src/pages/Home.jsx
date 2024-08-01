// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import HowItWorks from "../components/HowItWorks";
import SubscriptionPlan from "../components/SubscriptionPlan";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <SubscriptionPlan />
      <Footer />
    </>
  );
}

export default Home;
