import React from "react";

function FooterSection() {
  return (
    <div className="wrapper row4">
      <footer id="footer" className="hoc clear">
        <div className="one_quarter first">
          <h6 className="heading">Neutrico India</h6>
          <nav>
            <ul className="nospace linklist">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Contact Us</h6>
          <p className="nospace btmspace-15">
            Velit laoreet et scelerisque facilisis lacinia ut sapien in
            vehicula.
          </p>
          <form action="#" method="post">
            <fieldset>
              <legend>Newsletter:</legend>
              <input
                className="btmspace-15"
                type="text"
                value=""
                placeholder="Name"
              />
              <input
                className="btmspace-15"
                type="text"
                value=""
                placeholder="Email"
              />
              <button className="btn" type="submit" value="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Elementum ligula sed</h6>
          <ul className="nospace linklist">
            <li>
              <a href="#">Feugiat odio a est</a>
            </li>
            <li>
              <a href="#">Ipsum eleifend elementum nullam</a>
            </li>
            <li>
              <a href="#">Vitae ligula etiam ante lectus</a>
            </li>
            <li>
              <a href="#">Venenatis at auctor in</a>
            </li>
            <li>
              <a href="#">Erat volutpat nulla elementum</a>
            </li>
          </ul>
        </div>
        <div className="one_quarter last">
          <h6 className="heading">Lobortis ac velit aliquam</h6>
          <ul className="nospace clear latestimg">
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <img src="images/demo/100x100.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
