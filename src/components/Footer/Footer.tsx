import Image from "next/image";
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
          <h6 className="heading">Popular Products</h6>
          <ul className="nospace clear latestimg">
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p1.png"} alt="" layout="fill" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p2.png"} alt="" layout="fill" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p1.png"} alt="" layout="fill" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p2.png"} alt="" width="75" height="75" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p1.png"} alt="" width="75" height="75" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p2.png"} alt="" width="75" height="75" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p1.png"} alt="" width="75" height="75" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p2.png"} alt="" width="75" height="75" />
              </a>
            </li>
            <li>
              <a className="imgover" href="#">
                <Image src={"/images/p1.png"} alt="" width="75" height="75" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
