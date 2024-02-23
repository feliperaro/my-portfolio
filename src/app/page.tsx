import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Info from "./components/info";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header name="Felipe Ramos Roque" title="Full Stack Software Developer" />
      <main className="flex flex-col gap-1 pt-10 lg:pl-48 lg:pr-48 items-center w-full">
        <AboutMe
          description="Started my software developer career in 2019, learning Python programming and web development. I'm working with Full Stack Web technologies, Mobile Development and RPA development using Python programming. I've expanded my skills to Python, JavaScript, Java, TypeScript and others, I'm comfortable working with technologies like React Native, Node.js, Python, SQL & NoSQL Databases, AWS, Git, and others."
          subDescription="I'm seeking for new opportunities. My goal is to innovate through tech, building new solutions, improve and create businesses."
        />
        <Experience
          text="Working as a Software Developer since 2020, I'm familiar with Python Programming, RPA Solutions, Full-Stack Web Development, Mobile, Cloud & DevOps.

I'm currently looking for new opportunities to help teams as a Full-Stack Web Developer, Mobile Developer, DevOps, Python Developer and/or RPA Developer."
        />
        <Info />
      </main>
      <Footer />
    </div>
  );
}
