import React from 'react';
import PropTypes from 'prop-types';

const dateExist = (date) => {
  if (date) return <h5>{date}</h5>;
  return '';
};

/**
 * takes in an ordinary array and returns an array of keyed objects
 * @param {takes in an array} array
 * @returns an object with id and value
 */
const keyArray = (array) => array.map((value, id) => ({ id, value }));

const ResumeItem = ({ title, date, description, list, extraClass }) => {
  if (list && typeof list[0] === 'string') list = keyArray(list);
  return (
    <div className={extraClass ? 'resume-item ' + extraClass : 'resume-item'}>
      <h4>{title}</h4>
      {dateExist(date)}
      <p>
        <em>{description}</em>
      </p>
      {list ? (
        <ul>
          {list.map((listItem) => (
            <li key={listItem.id}>{listItem.value}</li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

// list can either be sent in as array or array of keyed object
// i should change this to take in a single object with all these properties
ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string.isRequired,
  list: PropTypes.array,
  extraClass: PropTypes.string,
};

export default ResumeItem;
