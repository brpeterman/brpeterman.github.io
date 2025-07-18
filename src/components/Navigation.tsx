import { NavLink } from "react-router";
import "./Navigation.css";

interface NavigationProps {
  readonly collapsed: boolean;
  readonly setCollapsed: (collapsed: boolean) => void;
}

export default function Navigation(props: NavigationProps) {
  return (
    <>
      <div className="navigation-icon">
        <button
          aria-label="Open/close navigation"
          aria-expanded={!props.collapsed}
          onClick={() => props.setCollapsed(!props.collapsed)}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <section
        className={ "navigation" + (props.collapsed ? " collapsed" : "") }
        role="navigation">
        <div className="navigation-list">
          <div className="navigation-item">
            <NavLink to="/" onClick={() => props.setCollapsed(!props.collapsed)}>About</NavLink>
          </div>
          <div className="navigation-item">
            <NavLink to="/cv" onClick={() => props.setCollapsed(!props.collapsed)}>Résumé</NavLink>
          </div>
          <div className="navigation-item">
            <NavLink to="/portfolio" onClick={() => props.setCollapsed(!props.collapsed)}>Portfolio</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
