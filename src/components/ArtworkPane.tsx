import styled from "styled-components";
import { Breakpoints, getFullImage, getThumbnail, modulo, type Artwork } from "../index";
import { useEffect, useState } from "react";
import CloseIcon from "../assets/icons/close.svg?react";
import LeftChevronIcon from "../assets/icons/left-chevron.svg?react";
import RightChevronIcon from "../assets/icons/right-chevron.svg?react";

interface ArtworkPaneProps {
  readonly currentWork: Artwork | null;
  readonly closeCallback: () => void;
}

const Lightbox = styled.dialog`
  background-color: var(--bg);
  color: var(--fg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  border: none;
  margin: 0;`;

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
  display: inline-block;
  width: 200px;
  height: 200px;
  
  @media only screen and (max-width: ${Breakpoints.Mobile}) {
    width: 100px;
    height: 100px;
  }`;

const CarouselThumbnailImage = styled.img`
  width: 100%;
  height: 100%;`;

function getArtworkPane() {
  return document.getElementById("artwork-pane") as HTMLDialogElement;
}

export default function ArtworkPane(props: ArtworkPaneProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const closeArtworkPane = () => {
    getArtworkPane().close();
    props.closeCallback();
  };

  const cycleImage = (offset: number) => {
    if (!props.currentWork) return;
    const newImage = modulo(currentImage + offset, props.currentWork.imageIds.length);
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
    if (!props.currentWork) return;
    const pane = getArtworkPane();
    pane.addEventListener("close", closeArtworkPane);
    pane.addEventListener("keydown", changeImage);
    pane.showModal();
    return () => {
      pane.removeEventListener("close", closeArtworkPane);
      pane.removeEventListener("keydown", changeImage);
    };
  }, [props.currentWork, currentImage]);

  const hasMultipleImages = props.currentWork && props.currentWork.imageIds.length > 1;

  return (
    <Lightbox id="artwork-pane">
      {props.currentWork && (
        <>
          <CloseButton onClick={closeArtworkPane}>
            <CloseIcon/>
          </CloseButton>
          { hasMultipleImages && (
            <LeftButton>
              <LeftChevronIcon onClick={previousImage}/>
            </LeftButton>
          ) }
          <GalleryImage
            src={getFullImage(props.currentWork.imageIds[currentImage])}
            alt={props.currentWork.title} />
          { hasMultipleImages && (
            <RightButton onClick={nextImage}>
              <RightChevronIcon/>
            </RightButton>
          ) }
          { hasMultipleImages && (
            <ThumbnailCarousel>
              {
                props.currentWork.imageIds.map((imageId, index) => (
                  <ThumbnailButton
                    onClick={() => setCurrentImage(index)}
                    key={imageId}>
                    <CarouselThumbnailImage
                      alt={`Preview for view ${index + 1} of ${props.currentWork?.title}`}
                      src={getThumbnail(imageId)}
                      className={ index !== currentImage ? "faded" : undefined }/>
                  </ThumbnailButton>
                ))
              }
            </ThumbnailCarousel>
          )}
          <ArtworkInfo>
            <h3>{props.currentWork.title} ({ props.currentWork.year })</h3>
            <p><strong>Medium:</strong> {props.currentWork.medium}</p>
            <p><strong>Size:</strong> {props.currentWork.size}</p>
            <p>{props.currentWork.description}</p>
          </ArtworkInfo>
        </>
      ) }
    </Lightbox>
  );
}
