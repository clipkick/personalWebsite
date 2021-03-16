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
            So you want to know more about me? Alright. The first real spark I found for programming
            was back in highschool. I will always remember when a student said &quot;but it&apos;s
            the excat same as theirs and theirs works&quot;. The teacher jumped up on the table and
            explained that computers process things literaly. Not in those words and not calmly.
          </p>
          <p>
            I then went on to study at Lakehead University. There I learned many things, including
            partying and drinking and of course coding. I went through two co-ops while I was
            studying, one was at a company called GRK Fasteners where they were going through an
            expansion and creating US based company and website.
          </p>
        </div>
      </div>
    </div>
  );
}

AboutPoints.propTypes = {
  points: PropTypes.object.isRequired,
};
