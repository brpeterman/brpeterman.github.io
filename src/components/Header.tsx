import "./Header.css";

interface HeaderProps {
    readonly name: string;
    readonly titles: string[];
    readonly location: string;
    readonly pageName?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <section className="main-header">
      <h1>{ props.name + (props.pageName ? ` — ${props.pageName}` : "") }</h1>
      <div className="titles">
        {
          props.titles.map(title => <div className="job-title">{ title }</div>)
        }
      </div>
      <div className="location">{ props.location }</div>
    </section>
  );
}
