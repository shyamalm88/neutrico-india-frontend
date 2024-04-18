import Link from "next/link";
import React from "react";

function OtherPagesHero({ bgURL, title, body }: any) {
  return (
    <>
      <div
        className="wrapper bgded overlay"
        style={{
          backgroundImage: `url(${bgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="pageintroOther" className="hoc clear">
          <article>
            <p>{title}</p>
            <h3 className="heading">{body}</h3>
            <footer>
              <Link className="btn" href="/contact">
                <strong>Contact Us</strong>
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}

export default OtherPagesHero;
