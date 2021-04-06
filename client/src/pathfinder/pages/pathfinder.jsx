import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import CurrentCampaign from '../components/currentCampaign';
import CampaignSelector from '../components/campaignSelector';
import { Provider as CampaignProvider } from '../components/campaignContext';

export default function Home() {
  return (
    <CampaignProvider>
      <Helmet>
        <title>Adam&apos;s Pathfinder games</title>
        <link href="/css/stylePathfinder.css" rel="stylesheet" />
      </Helmet>
      <Header />
      {(useLocation().pathname == '/pathfinder') | (useLocation().pathname == '/pathfinder/') ? (
        <CampaignSelector homepage={true} />
      ) : (
        <Outlet />
      )}
      <CurrentCampaign />
    </CampaignProvider>
  );
}
