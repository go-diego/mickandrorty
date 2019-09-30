import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return (
    <Section className="section">
      <Container className="container">{children}</Container>
    </Section>
  );
}
