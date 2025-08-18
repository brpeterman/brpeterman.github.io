import styled from "styled-components";
import { Theme } from "..";
import LightIcon from "../assets/icons/light.svg?react";
import DarkIcon from "../assets/icons/dark.svg?react";

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;`

interface ThemeToggleProps {
  readonly theme: string;
  readonly toggleTheme: () => void;
}

export default function ThemeToggle(props: ThemeToggleProps) {
  return (
    <ThemeToggleButton
      aria-label="Toggle dark mode"
      onClick={props.toggleTheme}
    >
      {props.theme === Theme.Dark ? <LightIcon/> : <DarkIcon/>}
    </ThemeToggleButton>
  );
}
