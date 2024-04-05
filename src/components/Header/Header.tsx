import React from "react";

function Header() {
  return (
    <div className="wrapper row0">
      <section id="ctdetails" className="hoc clear">
        <ul className="nospace clear">
          <li className="one_quarter first">
            <div className="block clear">
              <a href="#">
                <i className="fas fa-phone"></i>
              </a>
              <span>
                Give us a call: <strong>+91 (8910) 477 479</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
              <span>
                Send us a mail: <strong>neutricoindia@gmail.com</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <a href="#">
                <i className="fas fa-clock"></i>
              </a>
              <span>
                Mon. - Sat.: <strong>08.00am - 10.00pm</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <a className="btn" href="#">
              <strong>Get A Quote</strong>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
