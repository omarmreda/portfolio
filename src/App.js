import './App.css'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import MainSection from './components/MainSection/MainSection'
import NavMenu from './components/NavMenu/NavMenu'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
    return (
        <div className="App">
            <NavMenu />
            <MainSection />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default App
