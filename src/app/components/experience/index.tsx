import SectionTitle from "../section-title";
import Skill from "../skill";

import "./styles.css";

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        {
          "Working as a Software Developer since 2020, I'm familiar with Python Programming, RPA Solutions, Full-Stack Web Development, Mobile, Cloud & DevOps."
        }
      </p>
      <p>
        {"I'm currently looking for new opportunities to help teams as a "}
        <em>
          {
            "Full-Stack Web Developer, Mobile Developer, DevOps, Python Developer and/or RPA Developer"
          }
        </em>
        .
      </p>
      <div className="experience-time">
        <Skill technology="HTML5 & CSS3" measure={3} years="4 years" />
        <Skill technology="JavaScript" measure={3} years="4 years" />
        <Skill technology="Python" measure={3} years="4 years" />
        <Skill technology="RPA" measure={3} years="3 years" />
        <Skill technology="MySQL" measure={3} years="3 years" />
        <Skill technology="Java" measure={2} years="2 years" />
        <Skill technology="C#" measure={2} years="2 years" />
        <Skill technology="Node" measure={2} years="2 years" />
        <Skill technology="MongoDB" measure={2} years="2 years" />
        <Skill technology="React" measure={2} years="2 years" />
        <Skill technology="React Native" measure={2} years="2 years" />
        <Skill technology="AWS" measure={2} years="2 years" />
        <Skill technology="TypeScript" measure={1} years="1 year" />
        <Skill technology="Next.js" measure={1} years="1 year" />
        <Skill technology="Express.js" measure={1} years="1 year" />
        <Skill technology="PHP" measure={1} years="1 year" />
      </div>
    </div>
  );
}
