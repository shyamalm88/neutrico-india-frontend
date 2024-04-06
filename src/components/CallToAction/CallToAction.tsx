import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <div className="wrapper row9">
      <section id="ctdetails" className="hoc clear">
        <ul className="nospace clear">
          <li className="one_quarter first">
            <div className="block clear">
              <Link href="tel:+918910477479">
                <i className="fas fa-phone"></i>
              </Link>
              <span>
                Give us a call: <strong>+91 (8910) 477 479</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <Link href="mailto:neutricoindia@gmail.com">
                <i className="fas fa-envelope"></i>
              </Link>
              <span>
                Send us a mail: <strong>neutricoindia@gmail.com</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <a>
                <i className="fas fa-clock"></i>
              </a>
              <span>
                Mon. - Sat.: <strong>08.00am - 10.00pm</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <Link className="btn" href="/contact">
              <strong>Get A Quote</strong>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CallToAction;
