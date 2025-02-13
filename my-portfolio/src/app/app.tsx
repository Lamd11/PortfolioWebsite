import type { AppProps } from "next/app";
import "@/styles/globals.css"; // Ensure this is correctly placed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
