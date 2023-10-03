import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Info from "./components/info";

import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header
          name="Felipe Roque"
          title="Full-Stack Web, Mobile Developer & RPA Python Developer"
        />
      </header>
      <main className={styles.main}>
        <AboutMe
          description="I started my software developer journey in 2019, learning basics of web development and Python. I have 2 great diplomas in great schools in São Paulo, Brazil, Computer Technical Diploma at @Senac (2019 - 2020) & Analysis and Systems Developement at @FIAP (2020-2022). I'm working now with Full Stack Web technologies, Mobile Development and Python programming. In 2020, I started my first job as a Python Developer focused in creating and supporting RPA solutions at @BPA. I've expanded my skills to Python, JavaScript, TypeScript, Java, and others, I'm comfortable working with technologies like React, Next.js, React Native, Node, Express.js, Python, Django, Java, Spring, SQL & NoSQL Databases, AWS, Git, and more. Great experience building RPA."
          subDescription="I'm seeking for new business opportunities. My goal is to innovate through tech, building impactful solutions, improve and create businesses."
        />
        <Experience />
        <Info />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
