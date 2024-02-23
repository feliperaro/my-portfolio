import SectionTitle from "../section-title";

const EducationSection = (props: {
  course: string;
  courseType: string;
  location: string;
  school: string;
  schoolWebsiteUrl: string;
  period: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <span>
        <a
          className="hover:font-bold"
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
  companyWebsiteUrl: string;
  jobTitle: string;
  location: string;
  period: string;
}) => {
  const isFRR = props.company === "FRRTechnology";
  const COMPANY_URL = isFRR
    ? props.companyWebsiteUrl
    : `https://${props.companyWebsiteUrl}`;

  return (
    <div className="flex flex-col items-center">
      <span>
        <a
          className="hover:font-bold"
          href={COMPANY_URL}
          target={isFRR ? "_self" : "_blank"}
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
            location="Toronto"
            period="2023-2024"
            school="Tamwood"
            schoolWebsiteUrl="tamwood.com"
          />
          <EducationSection
            course="Analysis and Software Development"
            courseType="Technologist College Degree"
            location="Sao Paulo"
            period="2020-2022"
            school="FIAP"
            schoolWebsiteUrl="fiap.com.br"
          />
          <EducationSection
            course="IT Technical Course"
            courseType="Technician College Degree"
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
            companyWebsiteUrl="/frr-technology"
            jobTitle="Full-Stack & RPA Developer"
            location="Remote"
            period="2022-Present"
          />
          <WorkSection
            company="CADMUS"
            companyWebsiteUrl="cadmus.com.br"
            jobTitle="Python RPA Analysis Developer"
            location="Remote"
            period="2022"
          />
          <WorkSection
            company="BPATechnologies"
            companyWebsiteUrl="bpatechnologies.com"
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
