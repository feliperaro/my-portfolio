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
            <Image
                src={props.image}
                alt={`Skill ${props.technology} Logo`}
                width={40}
                height={40}
                priority
            />
            <div className="experience-unit">
                <div className={`experience-measure measure-${props.measure}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}