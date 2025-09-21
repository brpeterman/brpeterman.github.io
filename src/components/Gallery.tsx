import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Artwork } from "../index";
import ArtworkTile from "./ArtworkTile";
import { Works } from "../works";
import ArtworkPane from "./ArtworkPane";
import { useNavigate, useParams } from "react-router";
import ArtworkMetadata from "./ArtworkMetadata";

const GalleryGrid = styled.section`
  gap: 1rem;
  padding: 0;`;

export default function Gallery() {
  const [currentWork, setCurrentWork] = useState<Artwork | null>(null);
  const { workId } = useParams();
  const navigate = useNavigate();

  const showWork = (artwork: Artwork) => {
    navigate(`/portfolio/${artwork.id}`);
  };

  const closeImagePane = () => {
    navigate("/portfolio");
  };

  useEffect(() => {
    if (workId) {
      const work = Works.find((w) => w.id === workId) ?? null;
      setCurrentWork(work);
    } else {
      setCurrentWork(null);
    }
  }, [workId]);

  return (
    <>
      { currentWork ?
        <ArtworkMetadata artwork={currentWork} /> :
        <title>Brandon Peterman | Gallery</title>
      }
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
