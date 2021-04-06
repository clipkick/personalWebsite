import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Context as CampaignContext } from './campaignContext';

const CampaignSelector = ({ homepage }) => {
  const { campaign, createCampaign, error, getError, setError } = useContext(CampaignContext);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('/api/campaign');
      setData(response.data);
    } catch (error) {
      setError({ error, getCount: 0 });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (getError()) {
    return (
      <section className="campaignSelector Error">
        <div className="container">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      </section>
    );
  }
  if (!data) {
    return (
      <section className="campaignSelector">
        <div className="container">
          <h1>Select a Campaign</h1>
          {campaign.title ? <p>Current Camapign is : {campaign.title}</p> : ''}
          <p>Loading ...</p>
        </div>
      </section>
    );
  }
  return (
    <section className="campaignSelector">
      <div className="container">
        <h1>Select a Campaign</h1>
        {campaign.title ? <p>Current Camapign is : {campaign.title}</p> : ''}
        <ul>
          {data.map((newCampaign) => (
            <li key={newCampaign._id}>
              <Link
                to={homepage ? 'details' : '#'}
                onClick={() => {
                  createCampaign(newCampaign);
                }}
              >
                {newCampaign.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

CampaignSelector.propTypes = {
  homepage: PropTypes.bool,
};

export default CampaignSelector;
