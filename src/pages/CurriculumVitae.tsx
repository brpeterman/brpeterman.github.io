import ListSection from "../components/ListSection";
import WorkExperience from "../components/WorkExperience";
import "./CurriculumVitae.css";

export default function CurriculumVitae() {
  return (
    <section id="curriculum-vitae">
      <ListSection title='Experience'>
        <WorkExperience
          company="Shopbop | An Amazon Company"
          location="Madison, Wisconsin"
          title="Software Development Engineer II (L5)"
          description="Shopbop is an online retailer of high-end fashion and is a wholly-owned subsidiary of Amazon.
            As a Software Development Engineer, I designed, built, and maintained systems across the company,
            contributing wherever my skills could benefit the business."
          startYear={2017}
          endYear={2025}>
          <h4>Key Responsibilities</h4>
          <ul>
            <li>
              Collaborated with teams across Amazon to implement scalable, cost-effective systems.
            </li>
            <li>
              Provided devops support by participating in an on-call rotation, responding to production issues, and maintaining the health of our systems.
            </li>
            <li>
              Mentored interns and junior developers, guiding them through the software development lifecycle and helping them grow their skills.
            </li>
          </ul>
          <h4>Teams</h4>
          <ul>
            <li>
              <h5>2017&mdash;2019: Shiren</h5>
              <p>
                The Shiren team operated the customer-facing website (<a href="https://www.shopbop.com">shopbop.com</a>).
                Shiren was a full-stack team, running a Tomcat server with a legacy Javascript frontend. I worked toward
                modernizing the system and migrating it off of a very low ROI Oracle database.
              </p>
            </li>
            <li>
              <h5>2019&mdash;2021: IPA</h5>
              <p>
                As a founding member of the IPA team, I built the API platform that would unify the mobile app and website
                under a common set of concepts and data structures. I worked closedly with mobile and web developers to
                design sane, reusable APIs.
              </p>
            </li>
            <li>
              <h5>2021&mdash;2024: Yahara</h5>
              <p>
                On the Yahara team, I was the primary owner and architect of the API systems initially built by the IPA team.
                The team had broad scope, so I also contributed to the development and rollout of a new React-based
                framework that would eventually replace the legacy Shiren system.
              </p>
            </li>
            <li>
              <h5>2024&mdash;2025: Product Shopping Team</h5>
              <p>
                The Product Shopping Team owns the systems and workflows that operate the product catalog. As a PST developer,
                I worked closely with catalog editors, style coordinators, and other business users to produce and enhance
                the tools they use to get products to to the site with the highest quality possible.
              </p>
            </li>
          </ul>
        </WorkExperience>
        <WorkExperience
          company="Epic Systems Corporation"
          location="Verona, Wisconsin"
          title="Software Developer"
          description="Epic is the dominant player in the US electronic health record (EHR) market.
            As a Software Developer, I researched, designed, and developed patient management and scheduling functionality
            for Epic's Hyperspace product suite, including both database and user interface design."
          startYear={2022}
          endYear={2016}>
          <h4>Key Contributions</h4>
          <ul>
            <li>Designed and developed a scheduling workflow designed to enhance engagement between patients and care providers.</li>
            <li>Worked directly with end users to discover their needs and pain points in order to address them in future versions of the software.</li>
            <li>Supervised interns, guiding design and implementation of summer projects.</li>
          </ul>
        </WorkExperience>
      </ListSection>
      <ListSection title="Education">
        <h3>University of Rochester</h3>
        <p>Rochester, New York</p>
        <p>Graduated with a Bachelor of Science in Computer Science with a focus on system development.</p>
      </ListSection>
      <ListSection title="Skills and Proficiencies">
        <div className="skills-container">
          <div className="skills-column">
            <h4>Languages</h4>
            <ul>
              <li>Java</li>
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skills-column">
            <h4>Technologies</h4>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Spring</li>
              <li>PostgreSQL</li>
              <li>AWS</li>
              <li>CDK</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="skills-column">
            <h4>Concepts</h4>
            <ul>
              <li>Object-Oriented Programming</li>
              <li>Inversion of Control</li>
              <li>Infrastructure as Code</li>
              <li>Testable Architecture</li>
              <li>Microservices Architecture</li>
              <li>RESTful APIs</li>
              <li>DevOps Practices</li>
              <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
              <li>Accessible Software (A11y)</li>
            </ul>
          </div>
        </div>
      </ListSection>
    </section>
  )
}
