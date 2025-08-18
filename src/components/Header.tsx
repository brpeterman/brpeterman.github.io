import styled from "styled-components";

const MainHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;`

const JobTitle = styled.div`
  display: inline-block;
  padding: 0.3rem;
  border-radius: 0.8rem;
  border: 1px solid var(--fg);
  margin-right: 0.3rem;`;

const Location = styled.div`
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;`

interface HeaderProps {
    readonly name: string;
    readonly titles: string[];
    readonly location: string;
    readonly pageName?: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <MainHeader>{ props.name + (props.pageName ? ` — ${props.pageName}` : "") }</MainHeader>
      <div>
        {
          props.titles.map(title => <JobTitle key={title}>{ title }</JobTitle>)
        }
      </div>
      <Location>{ props.location }</Location>
    </>
  );
}
