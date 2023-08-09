import Image from "next/image"

import "./styles.css"

interface SkillProps {
    technology: string,
    image: string,
    years: string,
    measure: number,
}

export default function Skill (props : SkillProps) {
    return (
        <div className="experience-language">
            <span>{props.technology}</span>
            <div className="experience-unit">
                <div className={`experience-measure measure-${props.measure}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}