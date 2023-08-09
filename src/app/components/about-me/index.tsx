import "./styles.css"

interface AboutMeProps {
    description: string,
    subtitle: string,
}

export default function AboutMe(props: AboutMeProps) {
    return (
        <div className="about-me">
            <h3>{"About me"}</h3>
             <p className="description">{props.description}</p>
             <p><em>{props.subtitle}</em></p>
        </div>
    )
}