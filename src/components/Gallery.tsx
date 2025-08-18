import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Artwork } from "../index";
import ArtworkTile from "./ArtworkTile";

const GalleryGrid = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0;`;

const ArtworkPane = styled.dialog`
  background-color: var(--bg);
  color: var(--fg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;`;

const GalleryImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 90vh;
  margin: auto;`;

const ArtworkInfo = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: auto;`

function getThumbnail(imageId: string) {
  return `/gallery/thumbnails/${imageId}.jpg`;
}

function getFullImage(imageId: string) {
  return `/gallery/full/${imageId}.jpg`;
}

const works: Artwork[] = [{
  title: "Starry Night Chameleon",
  medium: "Chalk on concrete",
  size: "5' x 5'",
  description: "First-place winner at the 2024 ArtInfusion chalk art competition in Janesville, Wisconsin. Theme: \"Live Your Art!\"",
  imageId: "starry-night-chameleon"
}, {
  title: "Globe Frog",
  medium: "Chalk on concrete",
  size: "5' x 5'",
  description: "Entry for the 2025 Wausau Chalkfest.",
  imageId: "globe-frog"
}, {
  title: "Hop Frog",
  medium: "Acrylic on concrete",
  size: "26' x 5'",
  description: "This mural is an accent piece for my vegetable garden.",
  imageId: "hop-frog"
}, {
  title: "Mooneater",
  medium: "Acrylic on fiberboard",
  size: "24\" x 48\"",
  description: "Personal project.",
  imageId: "mooneater"
}];

function getArtworkPane() {
  return document.getElementById("artwork-pane") as HTMLDialogElement;
}

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState<Artwork | null>(null);

  const showImage = (artwork: Artwork) => {
    setCurrentImage(artwork);
    getArtworkPane().showModal();
  };

  useEffect(() => {
    if (currentImage) {
      getArtworkPane().showModal();
    }
  }, [currentImage]);

  useEffect(() => {
    const pane = getArtworkPane();
    if (!pane) return;
    pane.addEventListener("close", () => setCurrentImage(null));
    return () => {
      pane.removeEventListener("close", () => setCurrentImage(null));
    };
  }, []);

  return (
    <>
      <GalleryGrid>
        {works.map((artwork) => (
          <ArtworkTile
            key={artwork.imageId}
            artwork={artwork}
            getThumbnail={getThumbnail}
            showArtwork={showImage}
          />
        ))}
      </GalleryGrid>
      <ArtworkPane id="artwork-pane">
        {currentImage && (
          <>
            <GalleryImage
              src={getFullImage(currentImage.imageId)}
              alt={currentImage.title} />
            <ArtworkInfo>
              <h3>{currentImage.title}</h3>
              <p><strong>Medium:</strong> {currentImage.medium}</p>
              <p><strong>Size:</strong> {currentImage.size}</p>
              <p>{currentImage.description}</p>
            </ArtworkInfo>
          </>
        ) }
      </ArtworkPane>
    </>
  )
};
