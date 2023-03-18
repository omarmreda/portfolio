import './NavMenu.css'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
export default function NavMenu() {
    const [status, setStatus] = useState(false)
    const [visible, setVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            )
            setPrevScrollPos(currentScrollPos)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible])
    function handleClick() {
        setStatus(!status)
    }
    return (
        <div className={visible ? 'nav-menu' : 'hidden'}>
            <a href="#nav-icons" className="logo">
                O R
            </a>
            <ul className={status ? 'is-active nav-icons' : 'nav-icons'}>
                <Link
                    activeClass="active"
                    to="sectionOne"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => handleClick()}
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
                    onClick={() => handleClick()}
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
                    onClick={() => handleClick()}
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
                    onClick={() => handleClick()}
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
