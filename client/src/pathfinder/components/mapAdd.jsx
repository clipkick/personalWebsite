import React, { useContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

import { Context as CampaignContext } from './campaignContext';

const mapAdd = ({ setEdit }) => {
  const { campaign } = useContext(CampaignContext);
  const { error, setError } = useState(null);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      // posts data, gets new map from the response and adds it to the maps array then returns to maps
      const data = new FormData(e.target);
      data.append('campaignId', campaign._id);
      const response = await axios.post(`/api/${campaign._id}/map`, data);
      campaign.maps.push(response.data);
      setEdit(false);
    } catch (error) {
      // check error to see if validation error or 500 error
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add a new map</h3>

      <div className="row">
        <div className="col">{error ? <p>Errors here: {error}</p> : ''}</div>
      </div>

      <form onSubmit={submitData} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="titleText">Title:</label>
          <input type="text" className="form-control" name="title" id="titleText" required />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionText">Description:</label>
          {/* <textarea
            name="description"
            className="form-control"
            style={{ height: '120px' }}
            id="descriptionText"
          ></textarea> */}
          <Editor
            apiKey="ykvskhqy0toczlrzgdad9bbrn2etsrisenrm4iarmppfn7m8"
            init={{ height: 300 }}
            id="descriptionText"
            textareaName="description"
            plugins="code"
            toolbar="undo redo | styleselect | 
          bold italic | alignleft aligncenter alignright alignjustify | 
          bullist numlist outdent indent | code"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mapFile">Map File:</label>
          <input
            type="file"
            name="map"
            id="mapFile"
            className="form-control"
            accept="image/*"
            required
          ></input>
        </div>
        <input type="submit" value="Add New Map" className="btn btn-primary" />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setEdit(false);
          }}
        >
          Cancel Add
        </button>
      </form>
    </div>
  );
};

mapAdd.propTypes = {
  setEdit: PropTypes.func,
};

export default mapAdd;
