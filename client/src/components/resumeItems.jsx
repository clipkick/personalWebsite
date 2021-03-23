import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ResumeItem from './resumeItem';
import axios from 'axios';

const ResumeItems = ({ type }) => {
  // use api to get resume items by type then render all them
  const [resumeItems, setResumeItems] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/resume/${type}`);
      setResumeItems(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!resumeItems) return <h1>Loading...</h1>;
  return (
    <>
      {resumeItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ResumeItem
          title={item.title}
          date={item.date}
          description={item.description}
          list={item.list}
          extraClass={type == 'summary' ? 'pb-0' : undefined}
        />
      ))}
    </>
  );
};

ResumeItems.propTypes = {
  type: PropTypes.string,
};
export default ResumeItems;
