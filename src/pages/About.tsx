import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-5">WTF is this?</h1>
          <p>
            <b>Mick and Rorty</b> is an unofficial web application that allows
            the user to search through a list of{" "}
            <a
              href="https://www.adultswim.com/videos/rick-and-morty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty
            </a>{" "}
            characters, locations, and episodes.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-5">Nerd Talk</h1>
          <p>
            <b>Mick and Rorty</b> was created as a way for me to learn{" "}
            <code>redux-saga</code> and <code>Typescript</code>. It is a ReactJS
            application bootstrapped with <code>CRA</code> that uses{" "}
            <code>Bulma</code> and <code>styled-components</code> for styling
            and <code>Redux</code> for state management. If you want to know
            more, you can reach me at <b>hola@godiego.me</b>.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <h1 className="title is-size-5">Attribution</h1>
          <p>
            <b>Mick and Rorty</b> uses the wonderful{" "}
            <a
              href="https://rickandmortyapi.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty API
            </a>{" "}
            created by{" "}
            <a
              href="https://axelfuhrmann.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axel Fuhrmann
            </a>
            .
          </p>
          <p>
            The cool Rick icon on the navigation bar came from{" "}
            <a
              href="https://icons8.com/icon/57324/rick-sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons8
            </a>
            .
          </p>
          <p>
            The cool Morty icon on the navigation bar came from{" "}
            <a
              href="https://icons8.com/icon/84291/morty-smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons8
            </a>
            .
          </p>
          <p>
            Background patterns are available for use at{" "}
            <a
              href="https://www.heropatterns.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hero Patterns
            </a>
            .
          </p>
          <p>
            The "puff" animation used to show something is in a loading state
            was developed by{" "}
            <a
              href="https://samherbert.net/svg-loaders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam
            </a>
            .
          </p>
          <p>
            Rick and Morty is created by Justin Roiland and Dan Harmon for{" "}
            <a href="https://www.adultswim.com" rel="noopener noreferrer">
              Adult Swim
            </a>
            . The data and images are used without claim of ownership and belong
            to their respective owners.
          </p>
        </div>
      </section>
    </Layout>
  );
}
