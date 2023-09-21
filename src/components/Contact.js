import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center d-flex justify-content-center align-items-center">
    <div className="container section-content">
        <h2 className="text-center">Contact</h2>
        <p>
        I'm always thrilled to team up with individuals and organizations who share the same passion for creating fantastic digital experiences. Whether you have a project in mind or just want to have a friendly chat about the latest trends in web development, I'd genuinely love to connect with you. Let's work together to bring ideas to life and help shape the future of the web!
        </p>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-3">
              <div className="card-body">
                <h4>Contact Form</h4>
                <form action="https://formspree.io/f/xeqbrzdd" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="5" name="message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;