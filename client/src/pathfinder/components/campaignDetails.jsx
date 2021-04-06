import React, { useContext, useEffect } from 'react';

import { Context as CampaignContext } from './campaignContext';

const CampaignDetails = () => {
  const { campaign, error, setCampaignData } = useContext(CampaignContext);

  useEffect(() => {
    setCampaignData();
  }, []);

  if (error) {
    return (
      <section className="campaignDetails Error">
        <div className="container">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      </section>
    );
  }
  if (!campaign.title) {
    return (
      <section className="campaignDetails">
        <div className="container">
          <h1>Details</h1>
          <p>No campaign selected, please select a camapign</p>
        </div>
      </section>
    );
  }
  if (!campaign.description) {
    return (
      <section className="campaignDetails">
        <div className="container">
          <h1>Details</h1>
          <p>Loading...</p>
        </div>
      </section>
    );
  }
  return (
    <section className="campaignSelector">
      <div className="container">
        <h1>Details for &quot;{campaign.title}&quot;</h1>
        <p>{campaign.description}</p>
      </div>
    </section>
  );
};

export default CampaignDetails;
