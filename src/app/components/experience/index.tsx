import SectionTitle from "../section-title";
import Skill from "../skill";

import "./styles.css"


export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>{"2-3 years working as a Software Developer, I'm familiar with Web Development Full-Stack, Python Programming and RPA Solutions."}</p>
            <p>{"I'm currently looking for new opportunities to help teams as a"} <em>{"Full-Stack Web Developer, Mobile Developer, DevOps, Python Developer and/or RPA Developer"}</em>.</p>
            <div className="experience-time">
                <Skill technology="Python" measure={3} years="3 years"/>
                <Skill technology="RPA" measure={3} years="3 years"/>
                <Skill technology="JavaScript" measure={3} years="3 years"/>
                <Skill technology="HTML, CSS" measure={3} years="3 years"/>
                <Skill technology="Node" measure={2} years="2 years"/>
                <Skill technology="MongoDB" measure={2} years="2 years"/>
                <Skill technology="React" measure={2} years="2 years"/>
                <Skill technology="React Native" measure={2} years="2 years"/>
                <Skill technology="AWS" measure={2} years="2 years"/>
                <Skill technology="TypeScript" measure={1} years="1 year"/>
                <Skill technology="Express.js" measure={1} years="1 year"/>
                <Skill technology="Java" measure={1} years="1 year"/>
                <Skill technology="PHP" measure={1} years="1 year"/>
          </div>
        </div>
    )
}