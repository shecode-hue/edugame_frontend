import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const faqItems = [
    {
      question: 'What age groups do you teach?',
      answer:
        'Our programs are designed for children aged 7-18 years. We offer different difficulty levels to accommodate various age groups and skill levels.',
    },
    {
      question: 'Do you offer trial classes?',
      answer:
        'Yes, we offer a free introductory class for new students. This allows children to experience our teaching approach before committing to a full course.',
    },
    {
      question: 'What equipment does my child need?',
      answer:
        'For most courses, students need their own laptop. Some courses may have additional requirements such as specific software (which we can help install) or basic art supplies.',
    },
    {
      question: 'Are there any prerequisites for your courses?',
      answer:
        'Our beginner courses have no prerequisites other than basic computer literacy. For intermediate and advanced courses, some prior experience is recommended.',
    },
    {
      question: 'Do you offer any scholarships?',
      answer:
        'We offer a limited number of scholarships for talented students who demonstrate financial need. Please contact us directly to learn more about our scholarship program.',
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Have questions about our programs? We're here to help!</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for contacting Edu-Game Namibia. We will get back to
                  you as soon as possible.
                </p>
                <button
                  className="send-another-btn"
                  onClick={() =>
                    setFormStatus({
                      submitting: false,
                      submitted: false,
                      error: false,
                    })
                  }
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
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
                    value={formData.subject}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon address-icon"></div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>123 Innovation Street, Windhoek, Namibia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon phone-icon"></div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+264 61 123 4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon email-icon"></div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>info@edu-game-namibia.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon hours-icon"></div>
                <div className="info-text">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon facebook"></a>
                <a href="#" className="social-icon twitter"></a>
                <a href="#" className="social-icon instagram"></a>
                <a href="#" className="social-icon youtube"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-pin"></div>
            <p>Interactive map would be displayed here</p>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div className="faq-item" key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Stay updated with our latest courses, events, and special offers.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
