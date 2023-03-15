import './MainSection.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
export default function MainSection() {
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
                    <a
                        href="https://drive.google.com/file/d/1ufZbmvRHgyTsxNmetpMIlGb3vcl31q01/view?usp=sharing"
                        download
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="main-button">My Resume here!</button>
                    </a>
                </div>
                <div className="pic-container"></div>
            </div>

            <a
                href="https://github.com/omarmreda"
                target="_blank"
                rel="noreferrer"
            >
                <img src={github} alt="github" className="github-icon" />
            </a>
            <a
                href="https://linkedin.com/in/omarmreda"
                target="_blank"
                rel="noreferrer"
            >
                <img src={linkedin} alt="github" className="linkedin-icon" />
            </a>
            <div className="right-line"></div>
            <p className="fixed-p">This portoflio is developed with React.js</p>
        </div>
    )
}
