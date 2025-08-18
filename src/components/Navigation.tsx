import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";
import { Breakpoints } from "../contants";
import MenuIcon from "../assets/icons/menu.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";

const NavigationIcon = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;`;

const CloseButton = styled(NavigationIcon)`
  position: absolute;
  top: 0px;
  left: 0px;`;

const NavigationPane = styled.dialog`
  width: 100dvw;
  height: 100dvh;
  background-color: var(--card);
  border: none;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;`

const NavigationList = styled.div`
  @media only screen and (max-width: ${Breakpoints.Mobile}) {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }`;

const NavigationItem = styled.div`
  font-size: 1.5rem;`

const NavigationLink = styled(NavLink)`
  color: var(--fg);
  text-decoration: none;
  
  &.active {
    font-weight: bold;
  }
    
  &:hover, &:focus {
    color: var(--highlight)
  }`;

interface NavigationProps {
  readonly theme: string;
  readonly toggleTheme: () => void;
}

export default function Navigation(props: NavigationProps) {
  const getNavPane = () => document.getElementById("navigation-pane") as HTMLDialogElement;

  const openNavigation = () => {
    getNavPane().showModal();
  };

  const closeNavigation = () => {
    getNavPane().close();
  };

  return (
    <>
      <NavigationIcon
        aria-label="Open/close navigation"
        onClick={openNavigation}>
        <MenuIcon/>
      </NavigationIcon>
      <NavigationPane
        id="navigation-pane"
        role="navigation">
        <CloseButton
          aria-label="Close navigation"
          onClick={closeNavigation}>
          <CloseIcon/>
        </CloseButton>
        <NavigationList>
          <NavigationItem> 
            <NavigationLink to="/" onClick={closeNavigation}>About</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/cv" onClick={closeNavigation}>Résumé</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/portfolio" onClick={closeNavigation}>Portfolio</NavigationLink>
          </NavigationItem>
          <ThemeToggle
            theme={props.theme}
            toggleTheme={props.toggleTheme}
          />
        </NavigationList>
      </NavigationPane>
    </>
  );
}
