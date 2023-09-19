import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'MyHealthSpace',
      description: 'Full-Stack web application using MERN, GraphQL, and API.',
      imageSrc: 'myhealthspace.jpg',
      deployedLink: 'https://my-health-space-e9d209a11adb.herokuapp.com/',
      githubLink: 'https://github.com/andreaber23/myhealthspace.git'
    },
    {
      title: 'MyWorkoutPal',
      description: 'Full-Stack fitness tracker application.',
      imageSrc: 'myworkoutpal.jpg',
      deployedLink: 'https://myworkoutpal-fb26ea75640f.herokuapp.com/',
      githubLink: 'https://github.com/calzu0821/my-workout-pal.git'
    },
  ];
  
  const Portfolio = () => {
    return (
      <section id="portfolio" className="py-5 text-center d-flex justify-content-center align-items-center">
        <div className="container">
          <h2 className="text-center">Portfolio</h2>
          <div className="row">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  