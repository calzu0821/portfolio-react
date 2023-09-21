import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h2>Welcome to My Portfolio</h2>
            <p>Designing and coding with purpose and passion!</p>
          </div>
          <div className="col-md-4">
            <img src="./planets.png" alt="planets" className="img-fluid custom-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;