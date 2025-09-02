import { NavLink } from "react-router";

export default function About() {
  return (
    <section>
      <h2>Software Development</h2>
      <p>
        I am a software developer with extensive experience designing and building web-scale applications.
        Presently, I'm seeking new opportunities, especially in non-profit and sustainability-focused organizations.
        If you're trying to build a better world, please <a href="mailto:brpeterman@gmail.com?subject=Let&apos;s chat!">reach out</a>!
      </p>

      <h2>Art</h2>
      <p>
        I am a traditional artist working mainly in pastel, acrylic, and chalk.
        Most of my work is human and pet portraits, though I'll sprinkle in some surrealism from time to time.
        If my style speaks to you, please take a look at <NavLink to="/commissions">commissions</NavLink>!
      </p>
    </section>
  );
}
