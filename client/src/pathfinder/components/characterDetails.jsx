/* eslint-disable indent */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import Loading from './loading';
import { Context as CampaignContext } from '../components/campaignContext';

const MapDetails = ({ map, setMap, setEdit }) => {
  const { campaign, editPermissions, setMapData } = useContext(CampaignContext);

  // map = campaign.maps.find((campaignMap) => campaignMap._id == map._id);

  useEffect(() => {
    if (!map.description) {
      setMapData(map._id);
      setMap(campaign.maps.find((campaignMap) => campaignMap._id == map._id));
    }
  }, [campaign]);

  const getButton = (className, onClick, text, float) => {
    return (
      <button type="button" style={{ float: float }} onClick={onClick} className={className}>
        {text}
      </button>
    );
  };

  return (
    <>
      {editPermissions.map
        ? getButton('btn btn-dark', () => setEdit(true), 'Edit Map', 'left')
        : ''}
      {getButton('btn btn-light', () => setMap(null), 'Return to all maps', 'right')}
      <div className="d-flex justify-content-center">
        <h2>{map.title}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <img className="mapImage" src={'/img/pathfinder/' + campaign._id + '/' + map.fileName} />
      </div>
      {map.description ? (
        <p
          className="mt-2 mapDescription"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(map.description) }}
        ></p>
      ) : (
        <Loading />
      )}
      {getButton('btn btn-light', () => setMap(null), 'Return to all maps')}
    </>
  );
};

MapDetails.propTypes = {
  map: PropTypes.object,
  setMap: PropTypes.func,
  setEdit: PropTypes.func,
};
export default MapDetails;
