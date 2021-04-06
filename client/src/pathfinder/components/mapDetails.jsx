import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <>
      {editPermissions.map ? (
        <button
          type="button"
          style={{ float: 'left' }}
          onClick={() => {
            setEdit(true);
          }}
          className="btn btn-dark"
        >
          Edit Map
        </button>
      ) : (
        ''
      )}
      <button
        type="button"
        style={{ float: 'right' }}
        onClick={() => {
          setMap(null);
        }}
        className="btn btn-light"
      >
        Return to all maps
      </button>
      <div className="d-flex justify-content-center">
        <h2>{map.title}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <img className="mapImage" src={'/img/pathfinder/' + campaign._id + '/' + map.fileName} />
      </div>
      {map.description ? <p className="mt-2"> {map.description} </p> : <Loading />}
      <button
        type="button"
        onClick={() => {
          setMap(null);
        }}
        className="btn btn-light"
      >
        Return to all maps
      </button>
    </>
  );
};

MapDetails.propTypes = {
  map: PropTypes.object,
  setMap: PropTypes.func,
  setEdit: PropTypes.func,
};
export default MapDetails;
