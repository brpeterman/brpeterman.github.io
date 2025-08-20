import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Artwork } from "../index";
import { modulo } from "../index";
import ArtworkTile from "./ArtworkTile";
import CloseIcon from "../assets/icons/close.svg?react";
import LeftChevronIcon from "../assets/icons/left-chevron.svg?react";
import RightChevronIcon from "../assets/icons/right-chevron.svg?react";

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

const GalleryNavButton = styled.button`
  height: 50px;
  width: 25px;
  background: none;
  border: none;
  cursor: pointer;`;

const LeftButton = styled(GalleryNavButton)`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);`;

const RightButton = styled(GalleryNavButton)`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);`;

const ThumbnailCarousel = styled.div`
  text-align: center;
  padding: 1rem;`

const ThumbnailButton = styled.button`
  background: none;
  border: none;
  display: inline-block;`;

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
  imageIds: ["globe-frog", "globe-frog-wide"]
}, {
  title: "Hop Frog",
  medium: "Acrylic on concrete",
  size: "26' x 5'",
  description: "This mural is an accent piece for my vegetable garden.",
  imageIds: ["hop-frog", "hop-frog-wide"]
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
  const [currentWork, setCurrentWork] = useState<Artwork | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const showWork = (artwork: Artwork) => {
    setCurrentWork(artwork);
    setCurrentImage(0);
    getArtworkPane().showModal();
  };

  const closeImagePane = () => {
    setCurrentWork(null);
    getArtworkPane().close();
  };

  const cycleImage = (offset: number) => {
    if (!currentWork) return;
    const newImage = modulo(currentImage + offset, currentWork.imageIds.length);
    setCurrentImage(newImage);
  }

  const nextImage = () => {
    cycleImage(1);
  };

  const previousImage = () => {
    cycleImage(-1);
  };

  const changeImage = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      previousImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    }
  };

  useEffect(() => {
    if (!currentWork) return;
    const pane = getArtworkPane();
    pane.addEventListener("close", closeImagePane);
    pane.addEventListener("keydown", changeImage);
    return () => {
      pane.removeEventListener("close", closeImagePane);
      pane.removeEventListener("keydown", changeImage);
    };
  }, [currentWork, currentImage]);

  const hasMultipleImages = currentWork && currentWork.imageIds.length > 1;

  return (
    <>
      <GalleryGrid>
        {works.map((artwork) => (
          <ArtworkTile
            key={artwork.imageIds[0]}
            artwork={artwork}
            getThumbnail={getThumbnail}
            showArtwork={showWork}
          />
        ))}
      </GalleryGrid>
      <ArtworkPane id="artwork-pane">
        {currentWork && (
          <>
            <CloseButton onClick={closeImagePane}>
              <CloseIcon/>
            </CloseButton>
            { hasMultipleImages && (
              <LeftButton>
                <LeftChevronIcon onClick={previousImage}/>
              </LeftButton>
            ) }
            <GalleryImage
              src={getFullImage(currentWork.imageIds[currentImage])}
              alt={currentWork.title} />
            { hasMultipleImages && (
              <RightButton onClick={nextImage}>
                <RightChevronIcon/>
              </RightButton>
            ) }
            { hasMultipleImages && (
              <ThumbnailCarousel>
                {
                  currentWork.imageIds.map((imageId, index) => (
                    <ThumbnailButton
                      onClick={() => setCurrentImage(index)}
                      key={imageId}>
                      <img
                        alt={`Preview for view ${index + 1} of ${currentWork.title}`}
                        src={getThumbnail(imageId)}
                        className={ index !== currentImage ? "faded" : undefined }/>
                    </ThumbnailButton>
                  ))
                }
              </ThumbnailCarousel>
            )}
            <ArtworkInfo>
              <h3>{currentWork.title}</h3>
              <p><strong>Medium:</strong> {currentWork.medium}</p>
              <p><strong>Size:</strong> {currentWork.size}</p>
              <p>{currentWork.description}</p>
            </ArtworkInfo>
          </>
        ) }
      </ArtworkPane>
    </>
  )
};
