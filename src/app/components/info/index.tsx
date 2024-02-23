import SectionTitle from "../section-title";

const EducationSection = (props: {
  course: string;
  courseType: string;
  hoverColor: string;
  location: string;
  school: string;
  schoolWebsiteUrl?: string;
  period: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <span>
        <a
          className={`hover:${props.hoverColor}`}
          href={`https://${props.schoolWebsiteUrl}`}
          target="_blank"
        >
          @{props.school}
        </a>
        , {props.location}
      </span>
      <p className="w-2/3">{`${props.course} ${props.courseType} (${props.period})`}</p>
    </div>
  );
};

const WorkSection = (props: {
  company: string;
  companyWebsiteUrl?: string;
  hoverColor: string;
  jobTitle: string;
  location: string;
  period: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <span>
        <a
          className={`hover:${props.hoverColor}`}
          href={
            props.companyWebsiteUrl
              ? `https://${props.companyWebsiteUrl}`
              : undefined
          }
          target="_blank"
        >
          @{props.company}
        </a>
        , {props.location}
      </span>
      {`${props.jobTitle} - (${props.period})`}
    </div>
  );
};

export default function Info() {
  return (
    <div className="flex flex-col gap-5 w-5/6">
      <div className="flex flex-col gap-2">
        <SectionTitle text="Education 🎓" />
        <div className="flex flex-col gap-5 mb-5">
          <EducationSection
            course="Web Development"
            courseType="Certificate"
            hoverColor="text-cyan-500"
            location="Toronto"
            period="2023-2024"
            school="Tamwood"
            schoolWebsiteUrl="tamwood.com"
          />
          <EducationSection
            course="Analysis and Software Development"
            courseType="Technologist College Degree"
            hoverColor="text-red-500"
            location="Sao Paulo"
            period="2020-2022"
            school="FIAP"
            schoolWebsiteUrl="fiap.com.br"
          />
          <EducationSection
            course="IT Technical Course"
            courseType="Technician College Degree"
            hoverColor="text-blue-500"
            location="Sao Paulo"
            period="2019-2020"
            school="SENAC"
            schoolWebsiteUrl="sp.senac.br"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle text="Work 🧑‍💻" />
        <div className="flex flex-col gap-5 mb-5">
          <WorkSection
            company="FRRTechnology"
            hoverColor="font-bold"
            jobTitle="Full-Stack & RPA Developer"
            location="Remote"
            period="2022-Present"
          />
          <WorkSection
            company="CADMUS"
            companyWebsiteUrl="cadmus.com.br"
            hoverColor="font-bold"
            jobTitle="Python RPA Analysis Developer"
            location="Remote"
            period="2022"
          />
          <WorkSection
            company="BPATechnologies"
            companyWebsiteUrl="bpatechnologies.com"
            hoverColor="font-bold"
            jobTitle="Python Developer"
            location="Remote"
            period="2020-2022"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle text="Languages" />
        <div className="flex justify-center mb-10 w-full">
          <div className="flex flex-col gap-1 text-start w-fit">
            <span>{"PT-BR - Native"}</span>
            <span>{"EN - Fluent"}</span>
            <span>{"ES - Basic"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
