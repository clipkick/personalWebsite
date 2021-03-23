import React from 'react';
import { Waypoint } from 'react-waypoint';
import PropTypes from 'prop-types';

function Skill({ sideSkills }) {
  return (
    <>
      {sideSkills.map((skill) => (
        <div className="progress" key={skill.id}>
          <span className="skill">
            {skill.skill} <i className="val">{skill.percent}%</i>
          </span>
          <div className="progress-bar-wrap">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={skill.percent}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Skills({ skills }) {
  function SkillsLoad() {
    let progress = [];
    progress = document.querySelectorAll('.progress .progress-bar');
    progress.forEach((bar) => {
      bar.style.width = bar.getAttribute('aria-valuenow') + '%';
    });
  }
  const leftSkills = skills.splice(0, skills.length / 2);
  return (
    <div className="skills container">
      <Waypoint onEnter={SkillsLoad} />
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">
        <div className="col-lg-6">
          <Skill sideSkills={leftSkills} />
          {/* <Skill name={'HTML'} percent={100} />
          <Skill name={'CSS'} percent={90} />
          <Skill name={'Javascript'} percent={80} /> */}
        </div>

        <div className="col-lg-6">
          <Skill sideSkills={skills} />
          {/* <Skill name={'.net'} percent={90} />
          <Skill name={'SQL'} percent={80} />
          <Skill name={'Mongodb'} percent={70} /> */}
        </div>
      </div>
    </div>
  );
}

Skill.propTypes = {
  sideSkills: PropTypes.arrayOf(PropTypes.object),
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object),
};
