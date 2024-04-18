import ContactUs from "@/components/ContactUs/ContactUs";
import FooterSection from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import OtherPagesHero from "@/components/OtherPagesHero/OtherPagesHero";
import React from "react";

function ContactPage() {
  return (
    <div>
      <Header />
      <Nav active="contact" />
      <OtherPagesHero
        bgURL={`images/firmbee-com-SpVHcbuKi6E-unsplash.jpg`}
        body={`We are dedicated to the advancement of global health through its
              research-driven approach to developing nutritional solutions.`}
        title={`About NEUTRICO INDIA.`}
      />
      <ContactUs />
      <FooterSection />
    </div>
  );
}

export default ContactPage;
