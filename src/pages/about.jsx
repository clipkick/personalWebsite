import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AboutMe from '../components/aboutme';
import Interests from '../components/interests';
import Skills from '../components/skills';

export default function About() {
  const [sectionClass, setClass] = useState('about');

  useEffect(() => {
    setTimeout(() => {
      setClass('about section-show');
    }, 100);
  }, []);
  return (
    <section id="about" className={sectionClass}>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutMe setter={setClass} />
      <Skills />
      <Interests />
    </section>
  );
}
