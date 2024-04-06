import Link from "next/link";
import React from "react";

function OtherPagesHero() {
  return (
    <>
      <div
        className="wrapper bgded overlay"
        style={{
          backgroundImage: `url('images/stock-photo-pregnancy-test-kit-female-hand-hold-positive-pregnant-test-with-silk-ribbon-on-pink-banner-2117923835-transformed.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="pageintroOther" className="hoc clear">
          <article>
            <p>About NEUTRICO INDIA.</p>
            <h3 className="heading">
              We are dedicated to the advancement of global health through its
              research-driven approach to developing nutritional solutions.
            </h3>
            <footer>
              <Link className="btn" href="/contact">
                <strong>Contact Us</strong>
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}

export default OtherPagesHero;
