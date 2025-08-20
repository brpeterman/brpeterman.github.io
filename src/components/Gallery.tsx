import { useState } from "react";
import styled from "styled-components";
import type { Artwork } from "../index";
import ArtworkTile from "./ArtworkTile";
import { Works } from "../works";
import ArtworkPane from "./ArtworkPane";

const GalleryGrid = styled.section`
  gap: 1rem;
  padding: 0;`;

export default function Gallery() {
  const [currentWork, setCurrentWork] = useState<Artwork | null>(null);

  const showWork = (artwork: Artwork) => {
    setCurrentWork(artwork);
  };

  const closeImagePane = () => {
    setCurrentWork(null);
  };

  return (
    <>
      <GalleryGrid>
        {Works.map((artwork) => (
          <ArtworkTile
            key={artwork.imageIds[0]}
            artwork={artwork}
            showArtwork={showWork}
          />
        ))}
      </GalleryGrid>
      <ArtworkPane currentWork={currentWork} closeCallback={closeImagePane}/>
    </>
  )
};
