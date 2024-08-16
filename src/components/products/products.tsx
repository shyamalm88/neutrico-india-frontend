import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div className="wrapper row2">
      <section className="hoc container clear">
        <section id="services" className="hoc container clear">
          <ul className="nospace group grid-3">
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-spa"></i>
                  </a>
                  NEUTRIFEM:
                </h6>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={"/images/p2.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>

                <p>
                  NEUTRIFEM is a scientifically formulated well balanced
                  nutritional solution for pregnant women for nourished health
                  throughout pregnancy and lactation and improved fetal health
                  outcomes. NEUTRIFEM is a evened nutritional supplement,
                  providing comprehensive nourishment for healthy mother and
                  healthy baby
                </p>
                <ul>
                  <li>Pregnancy</li>
                  <li>Lactation</li>
                </ul>
                <p>
                  <strong>Ingredients</strong>: Skimmed Milk Powder,
                  Maltodextrin, Soy Protein Isolate, Inulin (Dietary fibre),
                  Oleic Sunflower Oil Powder, Evening Primrose Oil Powder,
                  Minerals, DHA rich Algal Oil Powder, Vitamins, Sucralose,
                  Natural Cocoa Powder.
                </p>
                <p>
                  <strong>Direction to use:</strong>: Add 2 tablespoons (30g)
                  twice a day in 100ml of lukewarm milk to make a paste. Further
                  add lukewarm milk or water to reconstitute the volume upto
                  240ml or as directed by your Physician/Nutritionist.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-spa"></i>
                  </a>
                  NEUTRITHIN:
                </h6>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={"/images/p1.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <p>
                  NEUTRITHIN is a natural and comprehensive meal replacement
                  formula for effective and long term weight loss. Provides 3
                  natural fat burners and 27 essential vitamins and minerals.
                </p>
                <ul>
                  <li>Obesity</li>
                  <li>Overweight</li>
                  <li>
                    Obesity related complications, such as PCOS (Polycystic
                    Ovary Syndrome), Joint Pain, Male & Female Infertility
                  </li>
                </ul>
                <p>
                  <strong>Ingredients</strong>: Skimmed Milk Powder,
                  Maltodextrin, Whey Protein Concentrate, Oat Fiber, Inulin
                  (Dietary Fibre), Corn Syrup Solids, Soy Protein Isolate,
                  nature identical vanilla flavour, Oleic Sunflower Oil Powder,
                  Minerals, Cellulose Gel Powder, Hydroxycitric Acid, Vitamins,
                  L-Carnitine, Xanthan Gum, Carrageenan and Sucralose.
                </p>
                <p>
                  <strong>Direction to use:</strong>: Add two scoops (40g) once
                  a day in 100ml of skimmed milk to make a paste. Further add
                  skimmed milk to reconstitute the volume upto 240ml or as
                  directed by your Physician/Nutritionist.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Products;
