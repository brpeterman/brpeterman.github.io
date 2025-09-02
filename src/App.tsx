import { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Navigation from './components/Navigation.tsx';
import About from './pages/About.tsx';
import CurriculumVitae from './pages/CurriculumVitae.tsx';
import Portfolio from './pages/Portfolio.tsx';
import { Breakpoints, isTheme, Theme } from './index';
import ContactLinks from './components/ContactLinks.tsx';
import styled from 'styled-components';
import Commissions from './pages/Commissions.tsx';

type PageType = "main" | "cv" | "portfolio" | "commissions";

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

const HeaderSection = styled.header`
  @media only screen and (max-width: ${Breakpoints.Mobile}) {
    margin-left: 50px;
  }`

const NavSection = styled.nav`
  position: absolute;
  top: 0;
  left: 0;`

const MainSection = styled.main`
  background-color: var(--card);
  padding: 1rem;
  border-radius: 12px;`;

const FooterSection = styled.footer`
  margin-top: 2rem;
  text-align: center;`;

export default function App(props: AppProps) {
  const [theme, setTheme] = useState(getPreferredTheme());

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
    pageName = "Gallery";
  } else if (props.page === "commissions") {
    pageContent = <Commissions />
    pageName = "Commissions";
  } else {
    pageContent = <About />;
  }

  return (
    <>
      <MainLayout>
        <NavSection>
          <Navigation
            theme={theme}
            toggleTheme={toggleTheme}/>
        </NavSection>

        <HeaderSection>
          <Header
            name="Brandon Peterman"
            titles={["Senior Software Developer", "Artist"]}
            location="Madison, Wisconsin"
            pageName={pageName}
          />
        </HeaderSection>

        <MainSection>
          { pageContent }
        </MainSection>
        <FooterSection>
          <ContactLinks />
        </FooterSection>
      </MainLayout>
    </>
  )
}
