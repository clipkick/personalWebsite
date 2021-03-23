import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'node-html-parser';

function AboutPoints({ points }) {
  if (!points) return <h1>Loading</h1>;
  return (
    <div className="col-lg-6">
      <ul>
        {points.map((point) => {
          return (
            <li key={point.id}>
              <i className="bi bi-chevron-right"></i>
              <strong>{point.name}:</strong>
              <span>{point.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function AboutMe({ primer, leftPoints, rightPoints, fullDescription }) {
  const paragraphize = (input) => {
    const paragraphs = parse(input).querySelectorAll('p');

    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph.innerHTML}</p>);
  };
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
          <p className="font-italic">{primer}</p>
          <div className="row">
            <AboutPoints points={leftPoints} />
            <AboutPoints points={rightPoints} />
          </div>
          {paragraphize(fullDescription)}
        </div>
      </div>
    </div>
  );
}

AboutPoints.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AboutMe.propTypes = {
  primer: PropTypes.string.isRequired,
  leftPoints: PropTypes.array.isRequired,
  rightPoints: PropTypes.array.isRequired,
  fullDescription: PropTypes.string.isRequired,
};
