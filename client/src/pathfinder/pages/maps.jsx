import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CampaignSelector from '../components/campaignSelector';
import { Context as CampaignContext } from '../components/campaignContext';
import MapDetails from '../components/mapDetails';
import MapAdd from '../components/mapAdd';
import MapEdit from '../components/mapEdit';
import Loading from '../components/loading';

const Maps = () => {
  const { campaign, error, getError, editPermissions, setMapData } = useContext(CampaignContext);
  const [mapDetail, setMapDetail] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (campaign._id) setMapData();
  }, [campaign]);

  // sets content so surrunding html is not copied many times
  let contents;
  if (getError()) {
    contents = <pre>{JSON.stringify(error, null, 2)}</pre>;
  } else if (edit && mapDetail) {
    contents = <MapEdit map={mapDetail} setEdit={setEdit} setMap={setMapDetail} />;
  } else if (mapDetail) {
    contents = <MapDetails map={mapDetail} setMap={setMapDetail} setEdit={setEdit} />;
  } else if (!campaign.title) {
    contents = (
      <>
        <p>No campaign selected, please select a camapign</p>
        <CampaignSelector />
      </>
    );
  } else if (!campaign.maps) {
    contents = <Loading />;
  } else {
    contents = (
      <>
        <div className="row mb-2">
          {campaign.maps.map((map) => {
            return (
              <div
                key={map._id}
                onClick={() => {
                  setMapDetail(map);
                }}
                className="mapList col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <div className="border d-flex align-items-center justify-content-between ps-1">
                  {map.title}
                  <img
                    className="mapImage thumbnail align-right"
                    src={'/img/pathfinder/' + campaign._id + '/' + map.fileName}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {edit ? (
          <MapAdd setEdit={setEdit} />
        ) : editPermissions.map ? (
          <Link
            to="add"
            className="btn btn-dark"
            onClick={() => {
              setEdit(true);
            }}
          >
            Add new Map
          </Link>
        ) : (
          ''
        )}
      </>
    );
  }

  return (
    <section className="maps">
      <div className="container">
        <h1 className="pageTitle">Maps - {campaign.title}</h1>
        {contents}
      </div>
    </section>
  );
};

export default Maps;
