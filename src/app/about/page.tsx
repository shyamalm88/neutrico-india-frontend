import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import React from "react";

function AboutPage() {
  return (
    <div>
      <Header />
      <Nav active="about" />
      <OtherPagesHero
        bgURL={`images/stock-photo-pregnancy-test-kit-female-hand-hold-positive-pregnant-test-with-silk-ribbon-on-pink-banner-2117923835-transformed.jpeg`}
        body={`We are dedicated to the advancement of global health through its
              research-driven approach to developing nutritional solutions.`}
        title={`About NEUTRICO INDIA.`}
      />
      <WhoWeAre />
      <FooterSection />
    </div>
  );
}

export default AboutPage;
