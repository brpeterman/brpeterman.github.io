import styled from "styled-components";
import ChevronIcon from "../assets/icons/right-chevron.svg?react";

const MainHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 0;
  padding-top: 0;`

const StyledChevronIcon = styled(ChevronIcon)`
  vertical-align: top;`

const JobTitle = styled.div`
  display: inline-block;
  padding: 0.3rem;
  margin-right: 0.3rem;
  font-size: 1.2rem;`;

const Location = styled.div`
  font-style: italic;
  font-size: 1rem;
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
          props.titles.map(title => <JobTitle key={title}><StyledChevronIcon/>{ title }</JobTitle>)
        }
      </div>
      <Location>{ props.location }</Location>
    </>
  );
}
