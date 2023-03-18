import './ContactMe.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import contact from '../../assets/contact.png'
import { useState, useEffect } from 'react'
import 'firebase/database'
export default function ContactMe() {
    const [formValid, setFormValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const postData = async (e) => {
        const { name, email, message } = formData
        e.preventDefault()
        const res = await fetch(
            'https://portfolio-e479a-default-rtdb.firebaseio.com/omarform.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            }
        )
        setFormData({ name: '', email: '', message: '' })
        setFormValid(true)
        setShowMessage(true)
    }
    function validateForm() {
        const { name, email, message } = formData
        return name && email && message
    }
    function handleInputChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setFormValid(validateForm())
    }
    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
        }
    }, [showMessage])
    return (
        <div className="contact-section" name="contactMe">
            <div className="logo2">
                <img src={contact} alt="contact" className="contact" />
            </div>
            <div className="form-holder">
                <h3 className="form-title">Get in Touch</h3>
                <form action="/" className="form" onSubmit={postData}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="label"
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="label"
                        autoComplete="email"
                    />

                    <input
                        type="text"
                        name="message"
                        placeholder="Enter a message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="label"
                        autoComplete="off"
                    />

                    <button
                        type="submit"
                        className="submit"
                        disabled={!formValid}
                    >
                        Submit
                    </button>
                    <div className="icons-container">
                        <a
                            href="https://github.com/omarmreda"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="github-icon"
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/omarmreda"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="github"
                                className="linkedin-icon"
                            />
                        </a>
                    </div>
                </form>
                {showMessage && (
                    <div className="form-message">
                        Thank you for your message!
                    </div>
                )}
            </div>
        </div>
    )
}
