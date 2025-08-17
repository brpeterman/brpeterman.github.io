import { useState } from "react";

interface ArtworkTileProps {
  readonly title: string;
  readonly medium: string;
  readonly size: string;
  readonly description: string;
  readonly image: string;
  readonly thumbnail: string;
}

export default function ArtworkTile(props: ArtworkTileProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className="artwork-tile"
      onClick={() => setCollapsed(false)}
      role="button"
      aria-expanded={!collapsed}
      aria-label={`Toggle details for ${props.title}`}
      tabIndex={0}
    >
      <img src={props.thumbnail} alt={props.title} />
      <div className={ "lightbox artwork-details" + (collapsed ? " collapsed" : "") }>
        <img src={props.image} alt={props.title} className="gallery-image" />
        <h3>{props.title}</h3>
        <p><strong>Medium:</strong> {props.medium}</p>
        <p><strong>Size:</strong> {props.size}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
