import styled from "styled-components";
import { Breakpoints, getThumbnail, type Artwork } from "..";

const Tile = styled.button`
  cursor: pointer;
  display: inline-block;
  background: none;
  border: 3px solid var(--fg);
  border-radius: 4px;
  width: 200px;
  height: 200px;
  margin: 0.7rem;
  padding: 0;
  box-sizing: content-box;
  transition: border-color 0.2s;

  &:hover, &:active {
    border-color: var(--accent);
  }

  &:focus {
    outline: 3px solid var(--highlight);
  }
  
  @media only screen and (max-width: ${Breakpoints.Mobile}) {
    width: 100px;
    height: 100px;
  }`

const TileImage = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;`

interface ArtworkTileProps {
  readonly artwork: Artwork;
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
        src={getThumbnail(props.artwork.imageIds[0])}
        alt={props.artwork.title} />
    </Tile>
  );
}
