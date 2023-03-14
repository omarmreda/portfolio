import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className="contact-section" name="contactMe">
            <div className="logo2">O R</div>
            <div className="form-holder">
                <h3 className="form-title">Get in Touch</h3>
                <form action="/" className="form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="label"
                        autoComplete="email"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="label"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a message"
                        required
                        className="label"
                        autoComplete="off"
                    />

                    <button type="submit" href="/" className="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
