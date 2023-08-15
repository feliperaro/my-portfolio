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
              description="I'm a developer since 2019 when I started learning Programming and Web Development, I got my first job to work as a Python Developer in 2020. I've been working since then using languages like Python, JavaScript, TypeScript, Java, and PHP. Nowadays, I'm building mobile and web apps using React, Next.js, React Native, Flask, Django, and others if you need. I have great experiences creating RPA solutions with Python, I'm passionate about DevOps & Cloud Computing and AWS."
              subtitle="I'm looking for new opportunities to learn something new technologies and build great products for people. Always ready for the next challenge!"/>
            <Experience />
            <Info />
          </main>
          <footer className={styles.footer}>
            <Footer />
          </footer>
      </div>
  )
}
