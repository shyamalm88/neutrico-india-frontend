"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-modal/styles.css";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("react-responsive-modal"), {
  loading: () => <p>Loading...</p>,
});
const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => <p>Loading...</p>,
});

const data = [
  {
    url: "https://youtu.be/krroDXWxGz4",
    poster: "v1.png",
    title: "Pregnancy",
    transcript: `Neutrico India is a trusted company known for providing nutritional products that are specifically formulated to support the health and well-being of pregnant women. These nutritional products are carefully designed to meet the unique dietary needs of expectant mothers and to support the healthy development of the baby.Neutrico India, as a trusted provider of nutritional products, likely offers a range of high-quality supplements specifically tailored for pregnant women. It's important for pregnant women to consult with their healthcare providers before starting any new supplements to ensure that they are safe and appropriate for their individual needs. Additionally, healthcare providers may recommend specific products based on the woman's nutritional status, medical history, and dietary intake.`,
  },
  {
    url: "https://youtu.be/XgbYI5Jghms",
    poster: "v2.png",
    title: "Polycystic Ovary Syndrome",
    transcript: `While there isn't specific information available about products from Neutrico India, here are some general benefits that nutritional products designed for PCOS (Polycystic Ovary Syndrome) may offer:Weight Management: PCOS is often associated with weight gain and obesity. Nutritional products formulated for PCOS may support weight management efforts by promoting satiety, boosting metabolism, and encouraging fat loss while preserving lean mass.function.
It's important to note that individual responses to nutritional products may vary, and it's advisable to consult with a healthcare professional before starting any new supplements, especially if you have a medical condition like PCOS. Additionally, personalized recommendations based on your specific health needs and goals can help optimize the benefits of nutritional products for PCOS management.`,
  },
  // {
  //   url: "https://youtu.be/EnW1ELfke6I?si=l-0kQ3xV2ONR3jlc",
  //   poster: "v3.jpg",
  //   title: "Neutrifem from NEUTRICO INDIA",
  //   transcript: `in the beautiful journey of pregnancy your body needs extra care and nutrition to support the growth and development of your baby introducing nutram protein powder a specially formulated supplement designed to meet the unique nutritional packed with essential vitamins minerals and DHA give your baby the best start in life with nutram protein powder it's not just a supplement it's a commitment to a healthier future for you and your baby.`,
  // },
  // {
  //   url: "https://youtu.be/JDAI8IGPrmM?si=ae7fCJZ-8XnNaJYY",
  //   poster: "v4.jpg",
  //   title: "Neutrithin from NEUTRICO INDIA",
  //   transcript: `In our busy lives, maintaining fitness and health is indeed crucial. Neutrithin from NEUTRICO INDIA is presented as a comprehensive dietary solution aimed at supporting overall fitness and health.`,
  // },
];

function VideoDescription() {
  const [open, setOpen] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");
  const [videoData, setVideoData] = React.useState(data);
  const [item, setItem] = React.useState(null);

  const onOpenModal = (e: any, item: any) => {
    e.preventDefault();
    setOpen(true);
    setVideoUrl(item.url);
    setItem(item);
  };
  const onCloseModal = () => {
    setOpen(false);
    setVideoUrl("");
    setItem(null);
  };
  return (
    <>
      <div
        className="bgded overlay"
        style={{ backgroundImage: `url('images/demo/backgrounds/01.png')` }}
      >
        <article className="hoc container clear">
          <ul id="latest" className="nospace group grid-3 videoGroup">
            {videoData.map((item) => {
              return (
                <li className="one_third" key={item.url}>
                  <article>
                    <figure>
                      <a
                        className="imgover"
                        onClick={(e) => onOpenModal(e, item)}
                      >
                        <Image
                          src={`/images/${item.poster}`}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </a>
                    </figure>
                    <div className="excerpt">
                      <h4 className="heading">{item.title}</h4>
                      <p>{item.transcript.substring(0, 200)}</p>
                      <footer>
                        <a
                          onClick={(e) => onOpenModal(e, item)}
                          className="readMore"
                        >
                          Read More
                        </a>
                      </footer>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
      <Modal open={open} onClose={onCloseModal} center blockScroll>
        <h2>Product Details</h2>
        <div className="modalVideoAndTransScript">
          <ReactPlayer url={(item as any)?.url} />
          <div className="transScriptPart">
            <h2>{(item as any)?.title}</h2>
            <p>{(item as any)?.transcript}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default VideoDescription;
