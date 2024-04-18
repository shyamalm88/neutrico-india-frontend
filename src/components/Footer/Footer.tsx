import Image from "next/image";
import Link from "next/link";
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
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="one_quarter">
          <h6 className="heading">Important Links</h6>
          <ul className="nospace linklist">
            <li>
              <a
                href="/files/fssi.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                FSSAI Certificate
              </a>
            </li>
          </ul>
        </div>
        <div className="one_quarter last">
          <h6 className="heading">Popular Products</h6>
          <ul className="nospace clear latestimg">
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
