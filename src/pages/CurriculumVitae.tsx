import ListSection from "../components/ListSection";
import WorkExperience from "../components/WorkExperience";

export default function CurriculumVitae() {
  return (
    <section id="curriculum-vitae">
      <ListSection title='Experience'>
        <WorkExperience
          company="Shopbop | An Amazon Company"
          location="Verona, Wisconsin"
          title="Software Development Engineer II (L5)"
          startYear={2017}
          endYear={2025}>
          <ul>
            <li>
                Item 1
            </li>
          </ul>
        </WorkExperience>
        <WorkExperience
          company="Epic Systems Corporation"
          location="Madison, Wisconsin"
          title="Software Developer"
          startYear={2022}
          endYear={2016}>
          <p>Researched, designed, and developed patient management and scheduling functionality for Epic's Hyperspace product suite, including both database and user interface design.</p>
          <ul>
            <li>Designed and developed a scheduling workflow designed to enhance engagement between patients and care providers.</li>
            <li>Worked directly with end users to discover their needs and pain poinrs in order to address them in future versions of the software.</li>
            <li>Supervised interns, guiding design and implementation of summer projects.</li>
          </ul>
        </WorkExperience>
      </ListSection>
    </section>
  )
}
