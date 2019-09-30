import React from "react";
import { Base64 } from "js-base64";
import styled from "styled-components";
import Image from "./Image";
import StretchedLink from "./StretchedLink";

const Card = styled.div`
  height: 100%;
`;

interface Props {
  isLoading: boolean;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

export default function CharacterCard({
  isLoading,
  id,
  image,
  name,
  species
}: Props) {
  return (
    <Card className="card">
      <div className="card-image has-background-dark">
        <figure className="image is-4by3">
          <Image
            isLoading={isLoading}
            src={image}
            alt={name}
            loaderColor="#00d1b2"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">
          <StretchedLink src={`/character/${Base64.encode(`${id}`)}`}>
            {name}
          </StretchedLink>
        </p>
        <p className="subtitle is-6">{species}</p>
      </div>
    </Card>
  );
}
