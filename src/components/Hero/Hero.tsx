import React from "react";
import CallToAction from "../CallToAction/CallToAction";

function Hero() {
  return (
    <>
      <div
        className="wrapper bgded overlay"
        style={{
          backgroundImage: `url('images/istockphoto-1418999502-1024x1024.jpg')`,
          backgroundSize: "cover",
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
              <a className="btn" href="#">
                <strong>Contact Us</strong>
              </a>
            </footer>
          </article>
        </div>
      </div>
      <CallToAction />
    </>
  );
}

export default Hero;
