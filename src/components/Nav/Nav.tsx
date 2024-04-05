import React from "react";

function Nav() {
  return (
    <div className="wrapper row1">
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <h1>
            <a href="index.html">Neutrico India</a>
          </h1>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a className="drop" href="#">
                Pages
              </a>
              <ul>
                <li>
                  <a href="pages/gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="pages/full-width.html">Full Width</a>
                </li>
                <li>
                  <a href="pages/sidebar-left.html">Sidebar Left</a>
                </li>
                <li>
                  <a href="pages/sidebar-right.html">Sidebar Right</a>
                </li>
                <li>
                  <a href="pages/basic-grid.html">Basic Grid</a>
                </li>
                <li>
                  <a href="pages/font-icons.html">Font Icons</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
