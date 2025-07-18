import { useState } from 'react';
import './App.css'
import Header from './components/Header.tsx';
import Navigation from './components/Navigation.tsx';
import About from './pages/About.tsx';
import CurriculumVitae from './pages/CurriculumVitae.tsx';
import Portfolio from './pages/Portfolio.tsx';

type PageType = "main" | "cv" | "portfolio";

interface AppProps {
  readonly page?: PageType;
}

export default function App(props: AppProps) {
  const [navCollapsed, setNavCollapsed] = useState(true);

  let pageContent = null;
  let pageName = undefined;
  if (props.page === "cv") {
    pageContent = <CurriculumVitae/>
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
            setCollapsed={setNavCollapsed}/>
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
