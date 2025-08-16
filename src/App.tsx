import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header.tsx';
import Navigation from './components/Navigation.tsx';
import About from './pages/About.tsx';
import CurriculumVitae from './pages/CurriculumVitae.tsx';
import Portfolio from './pages/Portfolio.tsx';
import { isTheme, Theme } from './index';

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
      <div className="main-layout">
        <section className="main-layout-navigation">
          <Navigation
            collapsed={navCollapsed}
            setCollapsed={setNavCollapsed}
            theme={theme}
            toggleTheme={toggleTheme}/>
        </section>

        <section className="main-layout-header">
          <Header
            name="Brandon Peterman"
            titles={["Software Developer", "Artist"]}
            location="Madison, Wisconsin"
            pageName={pageName}
          />
        </section>
      </div>

      <section className="main-layout-content">
        { pageContent }
      </section>
    </>
  )
}
