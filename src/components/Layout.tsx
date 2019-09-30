import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ogImg from "../static/thumbnail.png";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Mick & Rorty</title>
        <meta property="og:url" content="https://mickandrorty.netlify.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mick & Rorty" />
        <meta
          property="og:description"
          content="An Unofficial Rick and Morty app"
        />
        <meta property="og:image" content={ogImg} />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
