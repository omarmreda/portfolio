import './Skills.css'
import { useEffect, useRef } from 'react'
export default function Skills() {
    const sectionRef = useRef(null)
    const circleRef = useRef(null)
    const dotRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]
    useEffect(() => {
        const section = sectionRef.current
        const circle = circleRef.current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    dotRefs.forEach((ref) => {
                        ref.current.classList.add('active')
                    })
                    circle.classList.add('active')
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
                <div className="circles">
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[0]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[1]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[2]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[3]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circles">
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[4]}></div>
                            <svg id="angular-svg">
                                <circle
                                    ref={circleRef}
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    id="angular"
                                ></circle>
                                <circle
                                    ref={circleRef}
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    id="angular"
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    70<span>%</span>
                                </h3>
                                <p>Angular</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[5]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>Tailwind</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[6]}></div>
                            <svg id="git-svg">
                                <circle
                                    ref={circleRef}
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    id="git"
                                ></circle>
                                <circle
                                    ref={circleRef}
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    id="git"
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    80<span>%</span>
                                </h3>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-percent">
                        <div className="percent">
                            <div className="dot" ref={dotRefs[7]}></div>
                            <svg>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    ref={circleRef}
                                ></circle>
                            </svg>
                            <div className="number">
                                <h3>
                                    90<span>%</span>
                                </h3>
                                <p>Redux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
