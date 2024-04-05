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
  description: "Neutrico India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
