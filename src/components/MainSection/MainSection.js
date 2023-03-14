import './MainSection.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
export default function MainSection() {
    return (
        <div className="main-section" name="sectionOne">
            <div className="left-line"></div>
            <div className="main-paragraph">
                <h2 className="main-heading">Hi, my name is</h2>
                <h1 className="name">Omar Reda</h1>
                <h3 className="main-attach">
                    I enjoy building web applications.
                </h3>
                <p className="main-text">
                    I am looking forward to leverge my skills and my passion
                    about programming to build user interfaces of web
                    applications and using my programming knowledge to code
                    wesites' appearance.
                </p>

                <a
                    href="https://drive.google.com/file/d/1ufZbmvRHgyTsxNmetpMIlGb3vcl31q01/view?usp=sharing"
                    download
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="main-button">Download Resume!</button>
                </a>
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
