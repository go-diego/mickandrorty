import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ogImg from "../static/thumbnail.png";
import msIcon from "../static/ms-icon.png";
import androidIcon from "../static/android-icon.png";
import appleIcon from "../static/apple-icon.png";
import favicon from "../static/favicon.png";

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
          content="Mick and Rorty is an unofficial web application that allows the user to search through a list of Rick and Morty characters, locations, and episodes using the Rick and Morty API."
        />
        <meta property="og:image" content={ogImg} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={msIcon} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="57x57" href={appleIcon} />
        <link rel="icon" type="image/png" sizes="48x48" href={androidIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
