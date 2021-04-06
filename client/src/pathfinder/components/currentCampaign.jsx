import React, { useContext } from 'react';

import { Context as CampaignContext } from '../components/campaignContext';

const CurrentCampaign = () => {
  const { campaign } = useContext(CampaignContext);

  if (!campaign._id) {
    return <div className="campaign">No campaign selected</div>;
  }
  return (
    <div className="campaign">
      Current campaign is {campaign.title}
      <br />
      Current campaign id is {campaign._id}
    </div>
  );
};

export default CurrentCampaign;
