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
      <OtherPagesHero />
      <WhoWeAre />
      <FooterSection />
    </div>
  );
}

export default AboutPage;
