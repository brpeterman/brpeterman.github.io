import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import ContactLinks from "./ContactLinks";
import "./Navigation.css";

interface NavigationProps {
  readonly collapsed: boolean;
  readonly setCollapsed: (collapsed: boolean) => void;
  readonly theme: string;
  readonly toggleTheme: () => void;
}

export default function Navigation(props: NavigationProps) {
  const collapseNavigation = () => {
    props.setCollapsed(true);
  };

  return (
    <>
      <button
        className="navigation-icon"
        aria-label="Open/close navigation"
        aria-expanded={!props.collapsed}
        onClick={() => props.setCollapsed(!props.collapsed)}>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 12L20 12" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6L20 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <section
        className={ "navigation" + (props.collapsed ? " collapsed" : "") }
        role="navigation">
        <button className="navigation-icon navigation-close-button"
          aria-label="Close navigation"
          onClick={() => collapseNavigation()}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
            <path d="M6 6L18 18" stroke="currentcolor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div className="navigation-list">
          <div className="navigation-item"> 
            <NavLink to="/" onClick={() => collapseNavigation()}>About</NavLink>
          </div>
          <div className="navigation-item">
            <NavLink to="/cv" onClick={() => collapseNavigation()}>Résumé</NavLink>
          </div>
          <div className="navigation-item">
            <NavLink to="/portfolio" onClick={() => collapseNavigation()}>Portfolio</NavLink>
          </div>
          <ThemeToggle
            theme={props.theme}
            toggleTheme={props.toggleTheme}
          />
        </div>
      </section>
    </>
  );
}
