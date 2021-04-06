import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Context as CampaignContext } from './campaignContext';

const MapEdit = ({ map, setEdit, setMap }) => {
  const { campaign } = useContext(CampaignContext);
  const [, setError] = useState(null);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      // posts data, gets new map from the response and adds it to the maps array then returns to maps
      const data = new FormData(e.target);
      data.append('campaignId', campaign._id);
      const response = await axios.put(`/api/map/${map._id}`, data);
      // campaign.maps.push(response.data);
      console.log(response.data);
      const mapIndex = campaign.maps.findIndex((map) => map._id == response.data._id);
      campaign.maps = [
        ...campaign.maps.slice(0, mapIndex),
        response.data,
        ...campaign.maps.slice(mapIndex + 1),
      ];
      setMap(response.data);
      setEdit(false);
    } catch (error) {
      // check error to see if validation error or 500 error
      setError(error.message);
    }
  };
  return (
    <form onSubmit={submitData} encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="titleText">Title:</label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="titleText"
          defaultValue={map.title}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descriptionText">Description:</label>
        <textarea
          name="description"
          defaultValue={map.description}
          className="form-control"
          style={{ height: '120px' }}
          id="descriptionText"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="mapFile">Map File (only needed if replacing):</label>
        <input type="file" name="map" id="mapFile" className="form-control"></input>
      </div>
      <input type="submit" value="Edit Map" className="btn btn-primary" />
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setEdit(false);
        }}
      >
        Cancel Edit
      </button>
    </form>
  );
};

MapEdit.propTypes = {
  map: PropTypes.object,
  setEdit: PropTypes.func,
  setMap: PropTypes.func,
};
export default MapEdit;
