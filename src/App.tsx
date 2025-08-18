import { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Navigation from './components/Navigation.tsx';
import About from './pages/About.tsx';
import CurriculumVitae from './pages/CurriculumVitae.tsx';
import Portfolio from './pages/Portfolio.tsx';
import { isTheme, Theme } from './index';
import ContactLinks from './components/ContactLinks.tsx';
import styled from 'styled-components';
import { Breakpoints } from './contants.ts';

type PageType = "main" | "cv" | "portfolio";

interface AppProps {
  readonly page?: PageType;
}

function getPreferredTheme() {
  const preferredTheme = localStorage.getItem("theme") || Theme.Dark;
  if (isTheme(preferredTheme)) {
    return preferredTheme;
  }
  if (typeof window === "undefined") return Theme.Dark;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? Theme.Light : Theme.Dark;
}

const MainLayout = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  
  @media only screen and (max-width: ${Breakpoints.Mobile}) {
    width: 100%;
  }`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;`

const Main = styled.main`
  background-color: var(--card);
  padding: 1rem;
  border-radius: 12px;`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;`;

export default function App(props: AppProps) {
  const [theme, setTheme] = useState(getPreferredTheme());
  const [navCollapsed, setNavCollapsed] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  let pageContent = null;
  let pageName = undefined;
  if (props.page === "cv") {
    pageContent = <CurriculumVitae />
    pageName = "Résumé";
  } else if (props.page === "portfolio") {
    pageContent = <Portfolio />;
    pageName = "Portfolio";
  } else {
    pageContent = <About />;
  }

  return (
    <>
      <MainLayout>
        <Nav>
          <Navigation
            collapsed={navCollapsed}
            setCollapsed={setNavCollapsed}
            theme={theme}
            toggleTheme={toggleTheme}/>
        </Nav>

        <header>
          <Header
            name="Brandon Peterman"
            titles={["Senior Software Developer", "Artist"]}
            location="Madison, Wisconsin"
            pageName={pageName}
          />
        </header>

        <Main>
          { pageContent }
        </Main>
        <Footer>
          <ContactLinks />
        </Footer>
      </MainLayout>
    </>
  )
}
