import Navbar from "../components/Navbar";

export default function Contect() {


  return (

    <div>

      <header>
        <Navbar />
        <div className="hero-section">
          <h1>Contact Page</h1>
        </div>
      </header>


      <main>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </main>
    </div>
  )
}
