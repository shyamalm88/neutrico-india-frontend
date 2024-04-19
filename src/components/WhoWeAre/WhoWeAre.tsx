import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <div className="wrapper row2">
      <section className="hoc container clear">
        <div className="sectiontitle small">
          <h2 className="nospace font-lg">Who We Are?</h2>
          <h6 className="heading font-sm">
            We&apos;re a dedicated team leveraging science and technology to
            create tailored, sustainable nutritional solutions for all,
            empowering individuals to thrive.
          </h6>
        </div>
      </section>
      <div
        className="wrapper bgded"
        style={{
          backgroundImage: `url('images/stock-vector-beautiful-pregnant-woman-expecting-a-baby-flat-illustration-2381660481.jpg')`,
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <div className="hoc split clear">
          <section>
            <p>
              <strong>NEUTRICO INDIA</strong> is dedicated to the advancement of
              global health through its research-driven approach to developing
              nutritional solutions. With a focus on nutraceuticals, the company
              aims to harness scientific knowledge to create products that
              promote wellness and prevent various health issues.
            </p>
            <p>
              The company&apos;s commitment to providing formula-driven
              nutritional products underscores its dedication to addressing both
              preventative and supplementary measures for health concerns. By
              translating scientific research into tangible solutions,
              <strong>NEUTRICO INDIA</strong> strives to uplift the health of
              individuals worldwide.
            </p>
            <p>
              As a leader in the field of medical nutrition,
              <strong>NEUTRICO INDIA</strong> highlighting its expertise in
              developing products that cater to various health needs. Through
              its innovative approach, the company offers nutritional solutions
              tailored to specific demographics, in gynecological segment
            </p>
            <p>
              By focusing on areas such as women&apos;s health,
              <strong>NEUTRICO INDIA</strong> demonstrates its comprehensive
              approach to addressing diverse health challenges. Through its
              efforts, the company aims to make a meaningful impact on global
              health and wellness.
            </p>
          </section>
        </div>
      </div>
      <section className="hoc container clear">
        <section id="services" className="hoc container clear">
          <ul className="nospace group grid-3">
            <li className="one_third">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-hand-holding-heart"></i>
                  </a>
                  Legacy Of Trust:
                </h6>
                <p>
                  NEUTRICO INDIA has established a legacy of trust, acceptance,
                  and recommendation within the medical fraternity. Through its
                  commitment to excellence and innovation, the company offers a
                  diverse range of top-quality products for the healthcare
                  industry.
                </p>
                <p>
                  These products are widely utilized and endorsed by healthcare
                  professionals across the country.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
            <li className="one_third">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-capsules"></i>
                  </a>
                  Research Based methods
                </h6>
                <p>
                  The company&apos;s dedication to evidence-based medicine
                  translates into products with strong scientific backing,
                  enhancing their credibility and effectiveness.
                </p>
                <p>
                  Their commitment to rigorous research ensures the highest
                  quality standards in their products, providing safe and
                  effective solutions for healthcare professionals.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
            <li className="one_third">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-heart"></i>
                  </a>
                  Impact & Thrive
                </h6>
                <p>
                  A revolution in personalized wellness: We envision a future
                  where science-backed nutraceuticals empower individuals to
                  live their healthiest, happiest lives. (Emphasizes both
                  personalization and impact)
                </p>
                <p>
                  The global standard for evidence-based wellness: Our vision is
                  to be the leading provider of innovative, scientifically
                  proven nutraceutical solutions that elevate global health.
                  (Focuses on leadership and scientific rigor)
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default WhoWeAre;
