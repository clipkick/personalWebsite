import React from 'react';
import PropTypes from 'prop-types';

function Interest({ interest, iconClass, color }) {
  return (
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className={`ri-${iconClass}-line`} style={{ color: color }}></i>
        <h3>{interest}</h3>
      </div>
    </div>
  );
}

export default function Interests() {
  return (
    <div className="interests container">
      <div className="section-title">
        <h2 className="mb-0">Interests</h2>
      </div>
      <div className="row">
        <Interest interest="Databases" iconClass="database-2" color="#e80368" />
        <Interest interest="Programming" iconClass="computer" color="#47aeff" />
        <Interest interest="Javascript" iconClass="pages" color="#4233ff" />
        <Interest interest="Technology" iconClass="tablet" color="#ffa76e" />

        <Interest interest="Reading" iconClass="book-open" color="#ffbb2c" />
        <Interest interest="Biking" iconClass="riding" color="#5578ff" />
        <Interest interest="Cooking" iconClass="restaurant" color="#b20969" />
        <Interest interest="Magic the Gathering" iconClass="magic" color="#11dbcf" />

        <Interest interest="Pathfinder" iconClass="route" color="#b2904f" />
        <Interest interest="World Creation" iconClass="global" color="#29cc61" />
        <Interest interest="Anime" iconClass="video" color="#e361ff" />
        <Interest interest="Gaming" iconClass="game" color="#ff5828" />
      </div>
    </div>
  );
}

Interest.propTypes = {
  interest: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  color: PropTypes.string,
};
