import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";

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
`;

interface Props {
  children: React.ReactNode;
}

export default function Loading({ children }: Props) {
  return (
    <Container>
      <Title>
        <h1 className="heading has-text-weight-bold">Error</h1>{" "}
        <span>
          <Emoji text=":skull:" />
        </span>
      </Title>

      {children && <p>{children}</p>}
    </Container>
  );
}
