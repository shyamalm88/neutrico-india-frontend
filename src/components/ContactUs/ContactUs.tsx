"use client";
import React, { lazy } from "react";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  query: string;
};

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendEmail({
      fullName: data.fullName,
      to: "neutricoindia@gmail.com",
      email: data.email,
      subject: "Query For Neutrico-india",
      text: data.query,
    });
  };

  const containerRef = React.useRef<HTMLInputElement>(null);
  const resend = new Resend(process.env.RESEND_API_KEY);

  const sendEmail = async (qObj: {
    fullName: string;
    email: string;
    to: string;
    subject: string;
    text: string;
  }) => {
    const { data, error } = await resend.emails.send({
      from: qObj.email,
      to: qObj.to,
      subject: `${qObj.subject} From ${qObj.fullName}`,
      text: qObj.text,
    });

    if (error) {
      alert("While Sending mail some error happened");
    }

    if (data) {
      reset();
    }
  };

  return (
    <div className="wrapper row2">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace ">Contact Us: </p>
          <h2 className="nospace ">NEUTRICO INDIA </h2>
          <h6 className="heading font-sm">
            A321, Master Mind 4, Royal Palms, Goregaon (East), Mumbai,
            Maharashtra- 400065
          </h6>
        </div>
        <div className="boxWrapper">
          <div className="box">
            <section className="formcarry-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-name">Full Name</label>
                  <input
                    type="text"
                    id="fc-generated-1-name"
                    placeholder="Your first and last name"
                    {...register("fullName", {
                      required: true,
                    })}
                  />
                  {errors.fullName?.type === "required" && (
                    <p role="error" className="error">
                      Full name is required
                    </p>
                  )}
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-email">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="fc-generated-1-email"
                    placeholder="john@doe.com"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p role="error" className="error">
                      Email is required
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p role="error" className="error">
                      Valid Email is required
                    </p>
                  )}
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-message">Your message</label>
                  <textarea
                    id="fc-generated-1-message"
                    placeholder="Enter your message..."
                    {...register("query", {
                      required: true,
                      pattern: /^[ A-Za-z0-9_@./#&+-]*$/,
                    })}
                    maxLength={250}
                  ></textarea>
                  {errors.query?.type === "required" && (
                    <p role="error" className="error">
                      Your Query is required
                    </p>
                  )}
                  {errors.query?.type === "pattern" && (
                    <p role="error" className="error">
                      Your Query should only have _@./#&+- special characters.
                    </p>
                  )}
                </div>

                <div className="formcarry-block">
                  <button type="submit">Send</button>
                </div>
              </form>
            </section>
          </div>
          <div className="box map" ref={containerRef} id="script-container">
            <Image
              src={`/images/location.png`}
              width={989}
              height={691}
              alt="mumbai office"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
