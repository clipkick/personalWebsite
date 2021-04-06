import React, { useContext, useEffect } from 'react';

import CampaignSelector from '../components/campaignSelector';
import { Context as CampaignContext } from '../components/campaignContext';

const Details = () => {
  const { campaign, error, getError, setCampaignData } = useContext(CampaignContext);

  useEffect(() => {
    if (campaign._id) setCampaignData();
  }, [campaign]);

  if (getError()) {
    return (
      <section className="details Error">
        <div className="container">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      </section>
    );
  }
  if (!campaign.title) {
    return (
      <section className="details">
        <div className="container">
          <h1>Details</h1>
          <p>No campaign selected, please select a camapign</p>
          <CampaignSelector />
        </div>
      </section>
    );
  }
  if (!campaign.description) {
    return (
      <section className="details">
        <div className="container">
          <h1>Details</h1>
          <p>Loading...</p>
        </div>
      </section>
    );
  }
  return (
    <section className="details">
      <div className="container">
        <h1>Details for &quot;{campaign.title}&quot;</h1>
        <p>{campaign.description}</p>
      </div>
    </section>
  );
};

export default Details;
