import type { Artwork } from "../index";

interface ArtworkMetadataProps {
  readonly artwork: Artwork;
}

export default function ArtworkMetadata(props: ArtworkMetadataProps) {
  return (
    <>
      <title>{ `Brandon Peterman | ${props.artwork.title}` }</title>
      <meta property="og:title" content={props.artwork.title} />
      <meta property="og:description" content={props.artwork.description} />
      <meta property="og:image" content={`https://bpeterman.com/gallery/thumbnails/${props.artwork.imageIds[0]}.jpg`} />
      <meta property="og:site_name" content="Brandon Peterman" />
    </>
  );
}
