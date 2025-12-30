import { useState, type PropsWithChildren } from "react";
import styled from "styled-components";

const WorkExperienceItem = styled.li`
  border-left: 3px solid var(--fg);
  padding: 1rem;
  margin-bottom: 1rem;
  padding-top: 0;
  padding-bottom: 0;`;

const Timespan = styled.div`
  font-size: 1.4rem;
  color: var(--accent);
  font-weight: bold;
  margin-bottom: 0;`

const CompanyHeader = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.1rem;`

const ExpandExperienceButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--fg);
  border-radius: 0.5rem;
  background: none;
  color: var(--fg);
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover, &:focus {
    background-color: var(--accent);
    color: var(--bg);
  }`

const WorkExperienceContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s ease-in-out;

  &.collapsed {
    grid-template-rows: 0fr;
  }`;

const WorkExperienceContent = styled.div`
  grid-template-rows: 1fr;
  overflow: hidden;`;

interface WorkExperienceProps extends PropsWithChildren {
    readonly company: string;
    readonly location: string;
    readonly title: string;
    readonly description: string;
    readonly startYear: number;
    readonly endYear: number;
}

export default function WorkExperience(props: WorkExperienceProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <WorkExperienceItem>
      <div>
        <Timespan>{ `${props.startYear}—${props.endYear}` }</Timespan>
        <div>
          <CompanyHeader>{ props.company }</CompanyHeader>
          <div className="job-title">{ props.title }</div>
        </div>
        <div>{ props.location }</div>
        <p>{ props.description }</p>
        <div>
          <ExpandExperienceButton
            onClick={ () => setCollapsed(!collapsed) }
            aria-expanded={!collapsed}>
            {collapsed ? "▼ Learn More" : "▲ Collapse" }
          </ExpandExperienceButton>
        </div>
      </div>
      <WorkExperienceContainer className={collapsed ? " collapsed" : ""}>
        <WorkExperienceContent>
          { props.children }
        </WorkExperienceContent>
      </WorkExperienceContainer>
    </WorkExperienceItem>
  )
}
