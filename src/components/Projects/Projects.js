import './Projects.css'
import project1 from '../../assets/e-commerce.jpg'
import medical from '../../assets/medical.jpg'
import reads from '../../assets/reads.jpg'
import { useEffect, useRef } from 'react'
export default function Projects() {
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
        <div name="projects">
            <div className="projects-section" ref={sectionRef}>
                <h2 className="projects">Projects</h2>
                <h4 className="subtitle">Samples I have built</h4>
                <div className="project-list">
                    <div className="project-container">
                        <div className="firstProject">
                            <a
                                href="https://e-commerce-six-blush.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="pData"
                            >
                                <img
                                    src={project1}
                                    alt="e-commerce"
                                    className="project1"
                                />
                            </a>

                            <div className="descreption">
                                <div className="card">
                                    <h4 className="featured">
                                        Feautred Project
                                    </h4>
                                    <h4 className="project-title">
                                        <a
                                            href="https://e-commerce-six-blush.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            O-Burger
                                        </a>
                                    </h4>
                                    <div className="card-attach">
                                        E-commerce project using React and Redux
                                        to build a store for sandwiches and
                                        juices where the user can buy a sanwich
                                        and juice and update the items count.
                                    </div>
                                    <ul class="technology">
                                        <li>React</li>
                                        <li>Redux</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="project-2">
                            <a
                                href="https://medical-angular.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="pData"
                            >
                                <img
                                    src={medical}
                                    alt="e-commerce"
                                    className="project1"
                                />
                            </a>

                            <div className="descreption2">
                                <div className="card2">
                                    <h4 className="featured">
                                        Feautred Project
                                    </h4>

                                    <h4 className="project-title">
                                        <a
                                            href="https://medical-angular.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Medical App
                                        </a>
                                    </h4>

                                    <div className="card-attach">
                                        Medical app using Angular and Tailwind
                                        Css providing some medical features like
                                        submiting health problem with
                                        registration and authentication using
                                        Firebase.
                                    </div>
                                    <ul class="technology">
                                        <li>Angular</li>
                                        <li>Tailwind</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="project-3">
                            <a
                                href="https://github.com/omarmreda/reads"
                                target="_blank"
                                rel="noreferrer"
                                className="pData"
                            >
                                <img
                                    src={reads}
                                    alt="e-commerce"
                                    className="project1"
                                />
                            </a>

                            <div className="descreption2">
                                <div className="card3">
                                    <h4 className="featured">
                                        Feautred Project
                                    </h4>

                                    <h4 className="project-title">
                                        <a
                                            href="https://github.com/omarmreda/reads"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Reads App
                                        </a>
                                    </h4>

                                    <div className="card-attach">
                                        Book library App using React where the
                                        user can move the book between three
                                        main shelves Reading , Currently reading
                                        and want to read.
                                    </div>
                                    <ul class="technology">
                                        <li>React</li>
                                        <li>React Router</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
