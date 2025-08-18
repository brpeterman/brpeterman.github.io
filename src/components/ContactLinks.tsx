import styled from "styled-components";
import GithubIcon from "../assets/icons/github.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import CaraIcon from "../assets/icons/cara.svg?react";
import EmailIcon from "../assets/icons/email.svg?react";

const ContactLink = styled.a`
  padding: 0.2rem;`;

export default function ContactLinks() {
  return (
    <>
      <ContactLink href="https://www.github.com/brpeterman" target="_blank" title="GitHub">
        <GithubIcon/>
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/in/brpeterman" target="_blank" title="LinkedIn">
        <LinkedInIcon/>
      </ContactLink>
      <ContactLink href="https://cara.app/brpeterman" target="_blank" title="Cara">
        <CaraIcon/>
      </ContactLink>
      <ContactLink href="mailto:brpeterman@gmail.com?subject=Let&apos;s chat!" title="Email">
        <EmailIcon/>
      </ContactLink>
    </>
  );
}
