import React from 'react';
import PropTypes from 'prop-types';

export default function Interests({ interests }) {
  return (
    <div className="interests container">
      <div className="section-title">
        <h2 className="mb-0">Interests</h2>
      </div>
      <div className="row">
        {interests.map((interest) => (
          <div key={interest.id} className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className={`ri-${interest.iconClass}-line`} style={{ color: interest.color }}></i>
              <h3>{interest.interest}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.object),
};
