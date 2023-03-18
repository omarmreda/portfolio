import NavMenu from '../components/NavMenu/NavMenu'
import MainSection from '../components/MainSection/MainSection'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import ContactMe from '../components/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <div>
            <NavMenu />
            <MainSection />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}
