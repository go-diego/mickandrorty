import React from "react";
import styled from "styled-components";
import Puff from "./Puff";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Loader = styled(Puff)`
  height: 100px;
  width: 100px;
`;

export default function Loading() {
  return (
    <Container>
      <Loader color="#00d1b2" />
      <h1 className="heading has-text-weight-bold">Loading...</h1>
    </Container>
  );
}
