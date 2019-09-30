import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";
import Puff from "./Puff";

const Img = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;

const Loader = styled(Puff)`
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

interface Props {
  src: string;
  alt: string;
  isLoading: boolean;
  className?: string;
  loaderColor?: string;
}

export default function Image({
  src,
  alt,
  isLoading,
  className,
  loaderColor
}: Props) {
  return (
    <React.Fragment>
      {isLoading && <Loader color={loaderColor} />}
      {!isLoading && (
        <ProgressiveImage src={src} placeholder="">
          {(src: string, loading: boolean) => {
            return loading ? (
              <Loader color={loaderColor} />
            ) : (
              <Img className={className} src={src} alt={alt} />
            );
          }}
        </ProgressiveImage>
      )}
    </React.Fragment>
  );
}
