import './NavMenu.css'
import { Link } from 'react-scroll'
import { useState } from 'react'
export default function NavMenu() {
    const [status, setStatus] = useState(false)

    function handleClick() {
        setStatus(!status)
    }
    return (
        <div className="nav-menu">
            <a href="#nav-icons" className="logo">
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
            <button
                className={status ? 'is-active hamburger' : 'hamburger'}
                onClick={() => handleClick()}
            >
                <div className="bar"></div>
            </button>
        </div>
    )
}
