
import { ReactNode } from "react";
import Landing from './components/Landing'
import Head from "next/head";
import "./globals.css";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
      </Head>
      <body className="min-h-screen w-screen bg-black">
        <Landing />
      </body>
    </html>
  );
};

export default Layout;