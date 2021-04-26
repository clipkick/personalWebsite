import React from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Contact = () => {
  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const statusMessage = form.querySelector('.successError');
    try {
      const submitData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        subject: form.querySelector('#subject').value,
        message: form.querySelector('#message').value,
      };
      const res = await axios.post('/api/contact', submitData);

      if (res.status == 200) {
        statusMessage.style.color = 'green';
        statusMessage.innerHTML = 'Thank you for sending me an email! :)';
        form.querySelector('#name').value = '';
        form.querySelector('#email').value = '';
        form.querySelector('#subject').value = '';
        form.querySelector('#message').value = '';
      } else {
        statusMessage.style.color = 'red';
        statusMessage.innerHTML = `There has been an error sending your email ${res.data}`;
      }
      console.log(res.data);
    } catch (error) {
      statusMessage.style.color = 'red';
      statusMessage.innerHTML = `There has been an error sending your email ${error.message}`;
    }
  };
  return (
    <section id="contact" className="contact">
      <Helmet>
        <title>Contact Me</title>
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <p>Academy Drive, Thunder Bay ON P7B, Canada</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>LinkedIn</h3>
              <div className="social-links">
                {/* <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bi bi-skype"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/adam-sanderson-a5a490172/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>asanderson900@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>+1 (807) 251-0894</p>
            </div>
          </div>
        </div>

        <form onSubmit={submitForm} role="form" className="php-email-form mt-4">
          <div className="row">
            <div className="col">
              <span className="successError"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
