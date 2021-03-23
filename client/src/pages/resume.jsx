import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ResumeItems from '../components/resumeItems';

export default function Resume() {
  const [resumeClass, setClass] = useState('resume');

  useEffect(() => {
    setTimeout(() => {
      setClass('resume section-show');
    }, 100);
  }, []);
  return (
    <section id="resume" className={resumeClass}>
      <Helmet>
        <title>My Resume</title>
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <ResumeItems type="summary" />

            <h3 className="resume-title">Education</h3>
            <ResumeItems type="education" />
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <ResumeItems type="experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
