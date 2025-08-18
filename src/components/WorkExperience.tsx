import { useState, type PropsWithChildren } from "react";
import styled from "styled-components";

const WorkExperienceItem = styled.li`
  border-left: 3px solid var(--fg);
  padding: 1rem;
  margin-bottom: 1rem;
  padding-top: 0;
  padding-bottom: 0;`;

const Timespan = styled.div`
  font-size: 1.2rem;
  color: var(--accent);
  font-weight: bold;`

const ExpandExperienceButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--fg);
  border-radius: 0.5rem;
  background: none;
  color: var(--fg);
  font-size: 1rem;`

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
          <h3>{ props.company }</h3>
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
      <div className={collapsed ? " collapsed" : ""}>
        { props.children }
      </div>
    </WorkExperienceItem>
  )
}
