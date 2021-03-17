import React from 'react';
import PropTypes from 'prop-types';

function AboutPoints({ points }) {
  const pointArray = [];
  for (const point in points) {
    pointArray.push(
      <li key={point}>
        <i className="bi bi-chevron-right"></i> <strong>{point}:</strong>
        <span>{points[point]}</span>
      </li>
    );
  }
  return (
    <div className="col-lg-6">
      <ul>{pointArray}</ul>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="about-me container">
      <div className="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="/img/me.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Full Stack Developer</h3>
          <p className="font-italic">
            I am a full stack developer that has 9 years of experience. I am passionate about
            learning and expanding my knowledge base.
          </p>
          <div className="row">
            <AboutPoints
              points={{
                Birthday: 'May 1 1987',
                Phone: '+1(807) 251-0894',
                City: 'Thunder Bay, CA',
              }}
            />
            <AboutPoints
              points={{
                Website: 'sanderson.zapto.org',
                Email: 'asanderson900@gmail.com',
              }}
            />
          </div>
          <p>
            So you want to know more about me? Alright. I come from a small town in northeastern
            Ontario. From there I studied computer science at Lakehead University for 5 years where
            I had 2 co-ops. Shortly after I graduated was hired at Dougallmedia.
          </p>
          <p>
            When I started at Dougallmedia there was one other programmer there that showed me the
            ropes. After about two years he left the company and Dougallmedia decided to not hire
            anyone else. It took me some time to get used to working alone, but I managed it
            eventually.
          </p>
          <p>
            When covid hit, Dougallmedia laied off many employees, including me. After that I fell
            into a funk for a few months until my family helped me out of it. After that I became
            much more motivated and started learning new languages, specically Javascript with
            Node.js and React. Due to my new found motivation I have re-discovered my passion for
            programming.
          </p>
        </div>
      </div>
    </div>
  );
}

AboutPoints.propTypes = {
  points: PropTypes.object.isRequired,
};
