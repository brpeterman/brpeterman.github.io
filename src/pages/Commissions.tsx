import { COMMISSIONS_OPEN } from "..";

export default function Commissions() {
  return (
    <section>
      { COMMISSIONS_OPEN ? (
        <p>
          I am currentky open to commissions! If you'd like me to produce work for you, please <a href="mailto:brpeterman@gmail.com?subject=Commission inquiry">contact me</a> with the following details about the work you'd like to have completed:
          <ul>
            <li>
              <strong>Type of work</strong>: Public art, small work, installation, etc.
            </li>
            <li>
              <strong>Time frame</strong>: What time constraints will I be working with? Provide all relevant deadlines.
            </li>
            <li>
              <strong>Subject matter</strong>: I can work with you to produce a design, but a rough idea can get us started.
            </li>
            <li>
              <strong>Medium</strong>: What materials do you want me to use? I work primarily in acrylic, pastel, and chalk.
            </li>
            <li>
              <strong>Budget</strong>: What dollar amount are you comfortable with? If travel is involved, what stipend can you provide?
            </li>
          </ul>
        </p>
      ) : (
        <p>Commissions are currently closed.</p>
      )}
    </section>
  );
}
