import styled from "styled-components";
import type { Artwork } from "..";

const Tile = styled.button`
  cursor: pointer;
  display: block;
  background: none;
  border: 3px solid var(--fg);
  border-radius: 4px;
  width: 200px;
  height: 200px;
  padding: 0;
  box-sizing: content-box;`

const TileImage = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;`

interface ArtworkTileProps {
  readonly artwork: Artwork;
  readonly getThumbnail: (imageId: string) => string;
  readonly showArtwork: (artwork: Artwork) => void;
}

export default function ArtworkTile(props: ArtworkTileProps) {
  return (
    <Tile
      onClick={() => props.showArtwork(props.artwork)}
      aria-label={`Toggle details for ${props.artwork.title}`}
      title={props.artwork.title}
    >
      <TileImage
        src={props.getThumbnail(props.artwork.imageId)}
        alt={props.artwork.title} />
    </Tile>
  );
}
