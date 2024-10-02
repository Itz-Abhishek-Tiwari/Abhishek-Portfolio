import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const url = 'http://127.0.0.1:8000/';

  const [value, setValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(url + 'contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
}

