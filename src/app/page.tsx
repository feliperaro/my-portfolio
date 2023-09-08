import AboutMe from './components/about-me'
import Experience from './components/experience'
import Footer from './components/footer'
import Header from './components/header'
import Info from './components/info'


import styles from './styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <Header 
            name='Felipe Roque' 
            title='Full-Stack Developer & RPA Solutions'
          />
        </header>
        <main className={styles.main}>
          <AboutMe 
            description="I started my development journey in 2019, mastering Python and web technologies. In 2020, I launched my career as a Python Developer focused in creating RPA solutions. I've since expanded my skills to Python, Java, JavaScript, TypeScript and others, I'm comfortable working with technologies like React Native, React, Node, Express.js, Python, SQL & NoSQL, and more. Great experience building RPA and I'm seeking for new business opportunities."
            subDescription="My goal is to innovate through tech, building impactful solutions and create businesses."/>
          <Experience />
          <Info />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
  )
}
