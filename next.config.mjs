/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: "re_8dxkiAji_Byz1bLxDK1aLDMkBrSymwrPk",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
