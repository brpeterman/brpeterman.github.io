import { NavLink, useLocation } from "react-router";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";
import MenuIcon from "../assets/icons/menu.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";
import { Breakpoints } from "..";
import { useCallback, useEffect } from "react";

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
  max-width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  background-color: var(--card);
  border: none;
  margin: 0;
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

  const closeNavigation = useCallback(() => {
    getNavPane().close();
  }, []);

  // Close navigation when the page changes
  const location = useLocation();
  useEffect(closeNavigation, [location, closeNavigation]);

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
            <NavigationLink to="/about">About</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">Résumé</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/portfolio">Gallery</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/commissions">Commissions</NavigationLink>
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
