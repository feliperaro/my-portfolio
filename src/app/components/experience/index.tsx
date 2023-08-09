import SectionTitle from "../section-title";
import Skill from "../skill";

import "./styles.css"


export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>{"2-3 years working as a Software Developer, I'm familiar building RPA Solutions using Python."}</p>
            <p>{"I'm currently looking for new opportunities to work as a"} <em>{"Full-Stack Developer"}</em>.</p>
            <div className="experience-time">
                <Skill technology="Python" image="/images/python.png" measure={3} years="3 years"/>
                <Skill technology="JavaScript" image="/images/js.png" measure={3} years="3 years"/>
                <Skill technology="React" image="/images/react.png" measure={2} years="2 years"/>
                <Skill technology="React Native" image="/images/react-native.png" measure={2} years="2 years"/>
                <Skill technology="TypeScript" image="/images/ts.png" measure={2} years="2 years"/>
                <Skill technology="AWS" image="/images/aws.png" measure={2} years="2 years"/>
                <Skill technology="Java" image="/images/java.png" measure={1} years="1 year"/>
                <Skill technology="C#" image="/images/c-sharp.png" measure={1} years="1 year"/>
                <Skill technology="PHP" image="/images/php.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}