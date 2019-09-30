import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 1rem;
`;

export default function NotFound() {
  return (
    <Container>
      <Title>
        <h1 className="heading has-text-weight-bold">Not Found</h1>{" "}
        <span>
          <Emoji text=":shrug:" />
        </span>
      </Title>
      <Link
        to="/"
        className="button is-primary is-rounded is-uppercase has-text-weight-bold"
      >
        Go Home
      </Link>
    </Container>
  );
}
