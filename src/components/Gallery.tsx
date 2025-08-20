import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Artwork } from "../index";
import ArtworkTile from "./ArtworkTile";
import CloseIcon from "../assets/icons/close.svg?react";

const GalleryGrid = styled.section`
  gap: 1rem;
  padding: 0;`;

const ArtworkPane = styled.dialog`
  background-color: var(--bg);
  color: var(--fg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  border: none;`;

const GalleryImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 90dvh;
  margin: auto;`;

const ArtworkInfo = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: auto;`

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  position: absolute;
  top: 0px;
  left: 0px;`;

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
  imageIds: ["starry-night-chameleon"]
}, {
  title: "Globe Frog",
  medium: "Chalk on concrete",
  size: "5' x 5'",
  description: "Entry for the 2025 Wausau Chalkfest.",
  imageIds: ["globe-frog"]
}, {
  title: "Hop Frog",
  medium: "Acrylic on concrete",
  size: "26' x 5'",
  description: "This mural is an accent piece for my vegetable garden.",
  imageIds: ["hop-frog"]
}, {
  title: "Mooneater",
  medium: "Acrylic on fiberboard",
  size: "24\" x 48\"",
  description: "Personal project.",
  imageIds: ["mooneater"]
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

  const closeImagePane = () => {
    setCurrentImage(null);
    getArtworkPane().close();
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
            key={artwork.imageIds[0]}
            artwork={artwork}
            getThumbnail={getThumbnail}
            showArtwork={showImage}
          />
        ))}
      </GalleryGrid>
      <ArtworkPane id="artwork-pane">
        {currentImage && (
          <>
            <CloseButton onClick={closeImagePane}>
              <CloseIcon/>
            </CloseButton>
            <GalleryImage
              src={getFullImage(currentImage.imageIds[0])}
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
