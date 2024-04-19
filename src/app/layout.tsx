import type { Metadata } from "next";
import "./globals.css";
import local from "next/font/local";

const deacon = local({
  src: [
    {
      path: "../../public/webfonts/fa-brands-400.woff",
      weight: "400",
    },
    {
      path: "../../public/webfonts/fa-regular-400.eot",
      weight: "400",
    },
    {
      path: "../../public/webfonts/fa-solid-900.eot",
      weight: "900",
    },
  ],
  variable: "--fa",
});

export const metadata: Metadata = {
  title: "Neutrico India",
  description: `NEUTRICO INDIA is dedicated to the advancement of global health through its research-driven approach to developing nutritional solutions. With a focus on nutraceuticals, the company aims to harness scientific knowledge to create products that promote wellness and prevent various health issues. The company's commitment to providing formula-driven nutritional products underscores its dedication to addressing both preventative and supplementary measures for health concerns. By translating scientific research into tangible solutions, NEUTRICO INDIA strives to uplift the health of individuals worldwide.
As a leader in the field of medical nutrition, NEUTRICO INDIA highlighting its expertise in developing products that cater to various health needs. Through its innovative approach, the company offers nutritional solutions tailored to specific demographics, in gynecological segment By focusing on areas such as women's health, NEUTRICO INDIA demonstrates its comprehensive approach to addressing diverse health challenges. Through its efforts, the company aims to make a meaningful impact on global health and wellness.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="keywords"
        content="Neutrico, Neutrico India, NeutricoIndia, Neutrition, nutraceuticals"
      />
      <meta property="og:title" content="Neutrico India" />
      <meta
        property="og:description"
        content={`NEUTRICO INDIA is dedicated to the advancement of global health through its research-driven approach to developing nutritional solutions. With a focus on nutraceuticals, the company aims to harness scientific knowledge to create products that promote wellness and prevent various health issues. The company's commitment to providing formula-driven nutritional products underscores its dedication to addressing both preventative and supplementary measures for health concerns. By translating scientific research into tangible solutions, NEUTRICO INDIA strives to uplift the health of individuals worldwide.
As a leader in the field of medical nutrition, NEUTRICO INDIA highlighting its expertise in developing products that cater to various health needs. Through its innovative approach, the company offers nutritional solutions tailored to specific demographics, in gynecological segment By focusing on areas such as women's health, NEUTRICO INDIA demonstrates its comprehensive approach to addressing diverse health challenges. Through its efforts, the company aims to make a meaningful impact on global health and wellness.`}
      />
      <meta property="og:image" content="/images/logo.png" />
      <body id="top">{children}</body>
    </html>
  );
}
