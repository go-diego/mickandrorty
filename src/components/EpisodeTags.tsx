import React from "react";

interface Props {
  episodes: {
    id: number;
    episode: string;
    name: string;
  }[];
}

export default function EpisodeTags({ episodes }: Props) {
  return (
    <div className="field is-grouped is-grouped-multiline">
      {episodes &&
        episodes.map(episode => {
          return (
            <div key={episode.id} className="control">
              <div className="tags has-addons">
                <span className="tag is-dark">{episode.episode}</span>
                <span className="tag is-primary">{episode.name}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
