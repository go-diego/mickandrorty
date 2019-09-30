import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
`;

interface Props {
  src: string;
  children: React.ReactNode;
}

export default function StretchedLink({ src, children }: Props) {
  return <StyledLink to={src}>{children}</StyledLink>;
}
