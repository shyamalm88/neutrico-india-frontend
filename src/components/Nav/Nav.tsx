import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({ active }: any) {
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
              <Link href="/">Neutrico India</Link>
            </h1>
          </div>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li className={active === "home" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={active === "about" ? "active" : ""}>
              <Link href="/about">About</Link>
            </li>

            <li className={active?.includes("product") ? "active" : ""}>
              <Link href="/products" className="drop">
                Products
              </Link>
              <ul>
                <li>
                  <a href="#">All Products</a>
                </li>
                <li>
                  <a href="#">Product Categories</a>
                </li>
              </ul>
            </li>
            <li className={active === "health_professionals" ? "active" : ""}>
              <Link href="/health_professionals">Health Professionals</Link>
            </li>
            <li className={active === "contact" ? "active" : ""}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
