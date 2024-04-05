import Evidence from "@/components/Evidence/Evidence";
import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MileStones from "@/components/MileStones/MileStones";
import Nav from "@/components/Nav/Nav";
import StoriesSection from "@/components/StoriesSection/StoriesSection";
import React from "react";

function HomePage() {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <MileStones />
      <Evidence />
      <StoriesSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;
