import './MainSection.css'
import LazyLoad from 'react-lazy-load'
export default function MainSection() {
    const handleDownloadPdf = () => {
        const link = document.createElement('a')
        link.href = '/resume.pdf'
        link.download = 'my_resume.pdf'
        link.click()
    }
    return (
        <div className="main-section" name="sectionOne">
            <div className="left-line"></div>
            <div className="main-paragraph">
                <div className="column">
                    <h2 className="main-heading">Hi there,</h2>
                    <h1 className="name">I am Omar Reda</h1>
                    <h3 className="main-attach">Frontend Web developer.</h3>
                    <p className="main-text">
                        I've had the opportunity to work on multiple web
                        applications.I've honed my skills in designing,building
                        and maintaining responsive web apps. If you're looking
                        for a frontend developer who can bring your ideas to
                        life with creativity, skill, and dedication, look no
                        further! I would love to hear more about your project.
                    </p>

                    <button className="main-button" onClick={handleDownloadPdf}>
                        My Resume here!
                    </button>
                </div>
                <LazyLoad
                    once
                    placeholder={<div className="placeholder"></div>}
                >
                    <div className="pic-container"></div>
                </LazyLoad>
            </div>

            <div className="right-line"></div>
        </div>
    )
}
