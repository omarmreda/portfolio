import './NavMenu.css'
import { Link } from 'react-scroll'
export default function NavMenu() {
    return (
        <div className="nav-menu">
            <a href="#" className="logo">
                O R
            </a>
            <ul className="nav-icons">
                <Link
                    activeClass="active"
                    to="sectionOne"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <li>About</li>
                </Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <li>Skills</li>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <li>Projects</li>
                </Link>
                <Link
                    activeClass="active"
                    to="contactMe"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <li>Contact Me</li>
                </Link>
            </ul>
        </div>
    )
}
