import React from 'react';

const About = () => {
  return (
    <section id="home" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src="./avatar-image.png" alt="welcome" className="img-fluid custom-img" />
          </div>
          <div className="col-md-4">
          <h2>About Me</h2>
            <p>
            Hi there, I'm Cristina Alzuri, a Full-Stack Software Engineer. I've always been a creative and artistic individual, and coding has provided me with an outlet for expressing my creativity. My journey in web development began alongside my husband, and as we delved deeper into this exciting field, our interest and passion only grew. When I'm not coding, you can find me spending quality time with my husband and family and our two dogs, Charlie and Louie.
            </p>
            <p>
            I strongly believe in the power of technology to bring people together and I'm excited to continue learning and growing as a developer as I build innovative solutions to real-world problems. I'm constantly seeking out new ways to expand my skill set and take on new challenges. I'm eager to apply my expertise to help bring your vision to life. Let's work together to create something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;