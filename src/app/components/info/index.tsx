import SectionTitle from "../section-title";

import "./styles.css"

export default function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>{"Web Development (2023-2024) - Certificate @Tamwood, Toronto"}</span>
            </div>
            <div className="educational-info">
                <span>🎓</span>
                <span>{"Analysis and Software Development (2020-2022) - Technologist College Degree @FIAP, Sao Paulo"}</span>
            </div>
            <div className="educational-info">
                <span>🎓</span>
                <span>{"IT Technical Course (2019-2020) - Technician College Degree @SENAC, Sao Paulo"}</span>
            </div>
            <SectionTitle text="Work Experience"/>
            <div className="work-info">
                <span>🧑‍💻</span>
                <span>{"Full-Stack Software Developer and RPA Solutions (2022-Present) @FRRTechnology, Remote"}</span>
            </div>
            <div className="work-info">
                <span>🧑‍💻</span>
                <span>{"Python RPA Analysis Developer (2022) @CADMUS, Remote"}</span>
            </div>
            <div className="work-info">
                <span>🧑‍💻</span>
                <span>{"Python Developer (2020-2022) @BPATechnologies, Remote"}</span>
            </div>
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>{"EN - Fluent"}</span>
                <span>{"PT-BR - Native Speaker"}</span>
            </div>
      </div>
    )
}