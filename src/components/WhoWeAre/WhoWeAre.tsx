import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <div className="wrapper row2">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <h2 className="nospace ">Who We Are?</h2>
          <h6 className="heading font-sm">
            We&apos;re a dedicated team leveraging science and technology to
            create tailored, sustainable nutritional solutions for all,
            empowering individuals to thrive.
          </h6>
        </div>
        <ul id="latest" className="nospace group grid-3">
          <li className="one_third">
            <article>
              <figure>
                <a className="imgover" href="#">
                  <Image
                    src="/images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </figure>
              <div className="excerpt">
                <ul className="nospace meta clear">
                  <li>
                    <i className="fas fa-user"></i> <a href="#">CEO</a>
                  </li>
                  <li>
                    <time>06 Apr 2045</time>
                  </li>
                </ul>
                <h6 className="heading">Pratip Mazumder</h6>
                <p>
                  Ipsum fusce a arcu nulla dolor pellentesque imperdiet sagittis
                  lacinia velit donec eleifend dignissim erat morbi.
                </p>
                <footer>
                  <a href="#">Read More</a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article>
              <figure>
                <a className="imgover" href="#">
                  <Image
                    src="/images/dragos-gontariu-GH-mSApoKO0-unsplash.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </figure>
              <div className="excerpt">
                <ul className="nospace meta clear">
                  <li>
                    <i className="fas fa-user"></i> <a href="#">Admin</a>
                  </li>
                  <li>
                    <time>05 Apr 2045</time>
                  </li>
                </ul>
                <h6 className="heading">Sagittis mauris nulla</h6>
                <p>
                  Ultricies pede id eros pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis.
                </p>
                <footer>
                  <a href="#">Read More</a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article>
              <figure>
                <a className="imgover" href="#">
                  <Image
                    src="/images/speaker-3.jpg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </figure>
              <div className="excerpt">
                <ul className="nospace meta clear">
                  <li>
                    <i className="fas fa-user"></i> <a href="#">Admin</a>
                  </li>
                  <li>
                    <time>04 Apr 2045</time>
                  </li>
                </ul>
                <h6 className="heading">Egestas donec augue</h6>
                <p>
                  Sed nunc rutrum egestas suspendisse ultrices ipsum non nisi
                  mauris felis nibh placerat nec feugiat vel vestibulum.
                </p>
                <footer>
                  <a href="#">Read More</a>
                </footer>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WhoWeAre;
