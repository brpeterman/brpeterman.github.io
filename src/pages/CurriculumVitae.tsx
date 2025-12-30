import styled from "styled-components";
import CvSection from "../components/CvSection";
import WorkExperience from "../components/WorkExperience";

const WorkExperienceList = styled.ul`
  list-style: none;
  padding: 0;`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;`;

const SkillsColumn = styled.div`
  flex: 1;
  min-width: 100px;
  max-width: 300px;`;

const SkillsList = styled.ul`
  padding-left: 1rem;`;

const AccomplishmentsList = styled.ul`
  & li {
    margin-bottom: 0.5rem;
  }`;

const AccomplishmentHighlight = styled.strong`
  font-weight: bold;
  color: var(--highlight);`;

const TeamsList = styled.ul`
  list-style: none;`;

const TeamHeader = styled.h5`
  font-size: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid var(--fg);`;

const KeyContributionsHeader = styled.h6`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.1rem;`

export default function CurriculumVitae() {
  return (
    <>
      <title>Brandon Peterman | Résumé</title>
      <section>
        <CvSection title='Experience'>
          <WorkExperienceList>
            <WorkExperience
              company="Shopbop | An Amazon Company"
              location="Madison, Wisconsin"
              title="Software Development Engineer II (L5)"
              description="Shopbop is an online retailer of high-end fashion and is a wholly-owned subsidiary of Amazon.
                As a Software Development Engineer, I designed, built, and maintained systems across the company,
                contributing wherever my skills could benefit the business."
              startYear={2017}
              endYear={2025}>
              <h4>Key Responsibilities and Accomplishments</h4>
              <AccomplishmentsList>
                <li>
                  <AccomplishmentHighlight>Collaborated with teams across Amazon</AccomplishmentHighlight> to implement scalable, cost-effective systems.
                  My system designs leveraged the awesome scale of Amazon where possible and built novel solutions where
                  Shopbop's unique touch was required.
                </li>
                <li>
                  <AccomplishmentHighlight>Provided devops support</AccomplishmentHighlight> by participating in an on-call rotation, responding to
                  production issues, and maintaining the health of our systems. Most of my teams owned dozens of
                  services, jobs, and processes that could require diagnosis at any time.
                </li>
                <li>
                  <AccomplishmentHighlight>Mentored interns and junior developers</AccomplishmentHighlight>, guiding them through the software
                  development lifecycle and helping them grow their skills.
                </li>
                <li>
                  <AccomplishmentHighlight>Produced lasting documentation</AccomplishmentHighlight> of systems I built, owned, or otherwise touched.
                  Documentation is an ongoing effort that's often neglected. I always try to leave code in a better state
                  for the next developer who has to figure out what's happening.
                </li>
                <li>
                  <AccomplishmentHighlight>Built automation for code safety</AccomplishmentHighlight> that reduced human error and prevented
                  breaking changes from reaching production.
                </li>
                <li>
                  <AccomplishmentHighlight>Reviewed systems and code</AccomplishmentHighlight> at every level from design to implementation to operational
                  review.
                </li>
              </AccomplishmentsList>
              <h4>Teams</h4>
              <TeamsList>
                <li>
                  <TeamHeader>2017&mdash;2018: Shiren</TeamHeader>
                  <p>
                    The Shiren team operated the customer-facing website (<a href="https://www.shopbop.com">shopbop.com</a>).
                    Shiren was a full-stack team, running a Tomcat server with a legacy Javascript frontend. I worked toward
                    modernizing the system and migrating it off of a very low ROI Oracle database.
                  </p>
                  <KeyContributionsHeader>Key Contributions</KeyContributionsHeader>
                  <ul>
                    <li>Led the migration from Oracle RDB to simpler, more scalable solutions.</li>
                    <li>Migrated the legacy Struts website to Spring MVC.</li>
                  </ul>
                </li>
                <li>
                  <TeamHeader>2018&mdash;2021: IPA</TeamHeader>
                  <p>
                    As a founding member of the IPA team, I built the API platform that would unify the mobile app and website
                    under a common set of concepts and data structures. I worked closedly with mobile and web developers to
                    design sane, reusable APIs.
                  </p>
                  <KeyContributionsHeader>Key Contributions</KeyContributionsHeader>
                  <ul>
                    <li>Built and maintained 100+ API endpoints that now drive the mobile app and website.</li>
                    <li>Built automation and infrastructure to ensure safe deployment of API changes.</li>
                    <li>Modernized monitoring and alerting systems for API health and performance.</li>
                  </ul>
                </li>
                <li>
                  <TeamHeader>2021&mdash;2024: Yahara</TeamHeader>
                  <p>
                    On the Yahara team, I was the primary owner and architect of the API systems initially built by the IPA team.
                    The team had broad scope, so I also contributed to the development and rollout of a new React-based
                    framework that would eventually replace the legacy Shiren system.
                  </p>
                  <KeyContributionsHeader>Key Contributions</KeyContributionsHeader>
                  <ul>
                    <li>Set standards for away-team contributions and built tooling to enforce them.</li>
                    <li>Built front-end tooling to support the content development team in building React components.</li>
                  </ul>
                </li>
                <li>
                  <TeamHeader>2024&mdash;2025: Product Shopping Team</TeamHeader>
                  <p>
                    The Product Shopping Team owns the systems and workflows that operate the product catalog. As a PST developer,
                    I worked closely with catalog editors, style coordinators, and other business users to produce and enhance
                    the tools they use to get products to to the site with the highest quality possible.
                  </p>
                  <KeyContributionsHeader>Key Contributions</KeyContributionsHeader>
                  <ul>
                    <li>Designed and built a brand new photo studio inventory management system.</li>
                  </ul>
                </li>
              </TeamsList>
            </WorkExperience>
            <WorkExperience
              company="Epic Systems Corporation"
              location="Verona, Wisconsin"
              title="Software Developer"
              description="Epic is the dominant player in the US electronic health record (EHR) market.
                As a Software Developer, I researched, designed, and developed patient management and scheduling functionality
                for Epic's Hyperspace product suite, including both database and user interface design."
              startYear={2011}
              endYear={2016}>
              <KeyContributionsHeader>Key Contributions</KeyContributionsHeader>
              <ul>
                <li>Designed and developed a scheduling workflow designed to enhance engagement between patients and care providers.</li>
                <li>Presented new feature previews to end users and stakeholders at Epic's annual User Group Meeting.</li>
                <li>Worked directly with end users to discover their needs and pain points in order to address them in future versions of the software.</li>
                <li>Supervised interns, guiding design and implementation of summer projects.</li>
              </ul>
            </WorkExperience>
          </WorkExperienceList>
        </CvSection>
        <CvSection title="Education">
          <h3>University of Rochester</h3>
          <p>Rochester, New York</p>
          <p>Graduated with a Bachelor of Science Cum Laude in Computer Science with a focus on systems development.</p>
        </CvSection>
        <CvSection title="Skills and Proficiencies">
          <SkillsContainer>
            <SkillsColumn>
              <h4>Languages</h4>
              <SkillsList>
                <li>Java</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
              </SkillsList>
            </SkillsColumn>
            <SkillsColumn>
              <h4>Technologies</h4>
              <SkillsList>
                <li>React</li>
                <li>Node.js</li>
                <li>Spring</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
                <li>CDK</li>
                <li>Git</li>
                <li>JAX-RS</li>
                <li>Elasticsearch</li>
              </SkillsList>
            </SkillsColumn>
            <SkillsColumn>
              <h4>Concepts</h4>
              <SkillsList>
                <li>Object-Oriented Programming</li>
                <li>Inversion of Control</li>
                <li>Infrastructure as Code</li>
                <li>Testable Architecture</li>
                <li>Microservices Architecture</li>
                <li>RESTful APIs</li>
                <li>DevOps Practices</li>
                <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                <li>Accessible Software (A11y)</li>
              </SkillsList>
            </SkillsColumn>
          </SkillsContainer>
        </CvSection>
      </section>
    </>
  )
}
