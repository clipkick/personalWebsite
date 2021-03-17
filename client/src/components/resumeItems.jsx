import React from 'react';
import PropTypes from 'prop-types';
import ResumeItem from './resumeItem';

const ResumeItems = ({ type }) => {
  // use api to get resume items by type then render all them
  return <ResumeItem type={type} />;
};

ResumeItems.propTypes = {
  type: PropTypes.string,
};
export default ResumeItems;
