import { type PropsWithChildren } from "react";

interface CvSectionProps extends PropsWithChildren {
    readonly title: string;
}

export default function CvSection(props: CvSectionProps) {
  return (
    <section>
      <div>
        <h2>{ props.title }</h2>
      </div>
      { props.children }
    </section>
  )
}
