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
              title='Full-Stack Web Developer & RPA Solutions'
            />
          </header>
          <main className={styles.main}>
            <AboutMe 
              description="I'm a developer since 2020 when I started my career with 18 years old. I've been working since then using programming languages like Python, JavaScript, TypeScript, Java, PHP and using frameworks like React, Next.js, Django, Flask, Spring and others. I have experience creating RPA solutions using Python, I'm passionate about DevOps & Cloud Computing using AWS and Docker. I'm looking for new opportunities to improve my skills and build something great for people."
              subtitle="I'm always ready for the next challenge. Let's go!"/>
            <Experience />
            <Info />
          </main>
          <footer className={styles.footer}>
            <Footer />
          </footer>
      </div>
  )
}
