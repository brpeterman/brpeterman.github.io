import { type PropsWithChildren } from "react";

interface ListSectionProps extends PropsWithChildren {
    readonly title: string;
}

export default function ListSection(props: ListSectionProps) {
  return (
    <section className="list-section">
      <div className="section-header">
        <h2>{ props.title }</h2>
      </div>
      <ul className="section-content">
        { props.children }
      </ul>
    </section>
  )
}