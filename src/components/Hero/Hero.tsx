import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div
        className="wrapper bgded overlay"
        style={{
          backgroundImage: `url('images/stock-photo-young-indian-pregnant-woman-visiting-doctor-at-the-hospital-pregnancy-checkup-2184882427-transformed.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="pageintro" className="hoc clear">
          <article>
            <p>NEUTRICO INDIA.</p>
            <h3 className="heading">
              Converting scientific knowledge into nutritional solutions to
              enhance the health of humanity.
            </h3>
            <footer>
              <Link className="btn" href="/contact">
                <strong>Contact Us</strong>
              </Link>
            </footer>
          </article>
        </div>
      </div>
      <CallToAction />
    </>
  );
}

export default Hero;
