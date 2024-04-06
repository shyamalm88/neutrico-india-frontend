import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className="wrapper row1">
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <div className="brand">
            <Image
              src={"/images/logo.png"}
              width={60}
              height={60}
              alt="Neutrico India"
            />
            <h1>
              <a href="index.html">Neutrico India</a>
            </h1>
          </div>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a className="drop" href="#">
                Products
              </a>
              <ul>
                <li>
                  <a href="#">All Products</a>
                </li>
                <li>
                  <a href="#">Product Categories</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Health Professionals</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
