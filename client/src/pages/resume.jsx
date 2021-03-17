import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ResumeItem from '../components/resumeItem';

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
            <h3 className="resume-title">Sumary</h3>
            {/* Use <resumeItems type="Summary"/> in future */}
            <ResumeItem
              title="Adam Sanderson"
              description={`Determined Web Developer lends more than 8 years of expertise in developing
              web-planning projects in fast-paced environments requiring fast turnaround. Blends
              detailed knowledge of programming aspects with interpersonal, communicative
              nature. Solid comprehension of problematic SEO, marketing and security obstacles.
              Thorough grasp of SQL and VBScript contributes to generating custom script for
              specific organizational needs.`}
              list={[
                { id: 1, value: 'Thunder Bay, P7B 5J2, ON CA' },
                { id: 2, value: '(807) 251-0894' },
                { id: 3, value: 'asanderson900@gmail.com' },
              ]}
              extraClass="pb-0"
            />
            <h3 className="resume-title">Education</h3>
            <ResumeItem
              title="Honours Bachelor of Science, Computer Science"
              date="2006 - 2011"
              description="Lakehead University, Thunder Bay, ON CA"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <ResumeItem
              title="Web Developer"
              date="2011 - 2020"
              description="Dougallmedia, Thunder Bay, ON"
              list={[
                'Created and Managed over 8 websites and databases',
                `Gathered and defined customer requirements to develop 
                clear specifications for creating well-organized`,
                `Collaborated on all stages of systems development lifecycle, from requirement
                gathering to production`,
                `Developed custom database objects, stored procedures and delivered application
                support.`,
              ]}
            />
            <ResumeItem
              title="Application Developer"
              date="May 2010 - September 2010"
              description="Tbaytel, Thunder Bay, ON"
              list={[
                `Worked closely with other team members in such tasks as troubleshooting and
                debugging.`,
                'Maintained previously written code',
                'Wrote code for database-driven applications.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
