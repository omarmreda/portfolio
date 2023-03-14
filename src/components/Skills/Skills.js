import img from '../../assets/me.png'
import './Skills.css'
import { useEffect, useRef } from 'react'
export default function Skills() {
    const sectionRef = useRef(null)
    useEffect(() => {
        const section = sectionRef.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add('visible')
                    observer.disconnect()
                }
            })
        })
        observer.observe(section)
        return () => {
            observer.disconnect()
        }
    }, [])
    return (
        <div className="skills-section" name="skills" ref={sectionRef}>
            <div className="skills-paragraph">
                <h2 className="skills">Skills</h2>
                <div className="items">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Angular</li>
                    </ul>
                    <ul>
                        <li>Tailwind</li>
                        <li>Git</li>
                        <li>Redux</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
            <div className="img-attach">
                <div className="img-container">
                    <img src={img} alt="Omar" className="omar" />
                </div>
            </div>
        </div>
    )
}
