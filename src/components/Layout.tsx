import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
