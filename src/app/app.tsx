import type { AppProps } from "next/app";
import Head from "next/head";
import "./globals.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Website Title */}
        <title>Daniel Lam</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Daniel Lam's personal portfolio website showcasing projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Daniel Lam, portfolio, web developer, frontend developer, React, Next.js, TypeScript, TailwindCSS"
        />
        <meta name="author" content="Daniel Lam" />

        {/* Open Graph (for social media previews) */}
        <meta property="og:title" content="Daniel Lam - Portfolio" />
        <meta
          property="og:description"
          content="Explore Daniel Lam's projects, skills, and contact details in this modern portfolio website."
        />
        <meta property="og:image" content="/images/preview-image.png" />
        <meta property="og:url" content="https://your-portfolio-link.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Daniel Lam - Portfolio" />
        <meta
          name="twitter:description"
          content="Check out Daniel Lam's projects and skills in this sleek portfolio."
        />
        <meta name="twitter:image" content="/preview-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
