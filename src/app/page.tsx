import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Info from "./components/info";

import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <body className={styles.container}>
      <Header name="Felipe Ramos Roque" title="Full Stack Software Developer" />
      <main className={styles.main}>
        <AboutMe
          description="Started my software developer career in 2019, learning Python programming and web development. I have 2 diplomas in great tech schools in Brazil, Computer Technical Diploma at @Senac (2019 - 2020) & Analysis and Systems Development at @FIAP (2020-2022). I'm working with Full Stack Web technologies, Mobile Development and RPA development using Python programming. In 2020, I started my first job as a Python Developer focused in creating and supporting RPA solutions at @BPA. I've expanded my skills to Python, JavaScript, Java, TypeScript and others, I'm comfortable working with technologies like React, React Native, Node, Express.js, Python, Django, Flask, Java and Spring, SQL & NoSQL Databases, AWS, Azure, Git, and others."
          subDescription="I'm seeking for new opportunities. My goal is to innovate through tech, building new solutions, improve and create businesses."
        />
        <Experience
          text="Working as a Software Developer since 2020, I'm familiar with Python Programming, RPA Solutions, Full-Stack Web Development, Mobile, Cloud & DevOps.

I'm currently looking for new opportunities to help teams as a Full-Stack Web Developer, Mobile Developer, DevOps, Python Developer and/or RPA Developer."
        />
        <Info />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </body>
  );
}
