import React from "react";

function Evidence() {
  return (
    <div
      className="wrapper bgded"
      style={{
        backgroundImage: `url('images/indian-doctor.jpg')`,
        backgroundPosition: "right",
        backgroundSize: "50%",
      }}
    >
      <div className="hoc split clear">
        <section>
          <p>Evidence-Based Practice</p>
          <h6 className="heading font-x2">NEUTRICO INDIA </h6>
          <p className="btmspace-30">
            prioritizes evidence-based practice, ensuring that its products are
            supported by scientific research and clinical studies. This
            commitment to evidence-based medicine enhances the credibility of
            the company&apos;s products and strengthens the trust of healthcare
            professionals in their efficacy and safety.
          </p>
          <ul className="nospace btmspace-50">
            <li className="btmspace-10">
              <i className="fas fa-check-circle"></i> The company places a high
              importance on utilizing scientific evidence as the foundation for
              its practices and product development.
            </li>
            <li className="btmspace-10">
              <i className="fas fa-check-circle"></i> Ensuring that all products
              undergo rigorous scientific research and clinical trials to
              validate their effectiveness and safety.
            </li>
            <li className="btmspace-10">
              <i className="fas fa-check-circle"></i> Demonstrating a steadfast
              dedication to using credible scientific evidence to inform
              decision-making and product development processes.
            </li>
            <li className="btmspace-10">
              <i className="fas fa-check-circle"></i> By basing products on
              solid scientific evidence, the company boosts its credibility
              within the healthcare community and among consumers.
            </li>
            <li className="btmspace-10">
              <i className="fas fa-check-circle"></i> Healthcare professionals
              and consumers can trust the efficacy and safety of the
              company&apos;s products, fostering stronger relationships and
              confidence in their use.
            </li>
          </ul>
          <footer>
            <a className="btn" href="#">
              View Details &raquo;
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Evidence;
