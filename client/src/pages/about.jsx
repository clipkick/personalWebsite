import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import AboutMe from '../components/aboutme';
import Interests from '../components/interests';
import Skills from '../components/skills';

export default function About() {
  const [about, setAboutMe] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('/api/about');
      setAboutMe(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!about) return <h1>Loading...</h1>;
  return (
    <section id="about" className="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutMe
        primer={about.primer}
        leftPoints={about.leftPoint}
        rightPoints={about.rightPoint}
        fullDescription={about.fullDescription}
      />
      <Skills skills={about.skills} />
      <Interests interests={about.interests} />
    </section>
  );
}
