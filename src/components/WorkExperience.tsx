import { useState, type PropsWithChildren } from "react";
import "./WorkExperience.css";

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
    <li className="work-experience-item">
      <section className="experience">
        <div className="experience-header">
          <div className="timespan">{ `${props.startYear}—${props.endYear}` }</div>
          <div className="job-summary">
            <h3>{ props.company }</h3>
            <div className="job-title">{ props.title }</div>
          </div>
          <div className="location">{ props.location }</div>
          <p>{ props.description }</p>
          <div className="expand">
            <button
              className="expand-button"
              onClick={ () => setCollapsed(!collapsed) }
              aria-expanded={!collapsed}>
              {collapsed ? "▼ Learn More" : "▲ Collapse" }
            </button>
          </div>
        </div>
        <div className={"experience-content" + (collapsed ? " collapsed" : "")}>
          { props.children }
        </div>
      </section>
    </li>
  )
}
