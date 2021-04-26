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
      const response = await axios.post(`/api/${campaign._id}/character`, data);
      campaign.characters.push(response.data);
      setEdit(false);
    } catch (error) {
      // check error to see if validation error or 500 error
      setError(error.message);
    }
  };
  const formFields = [
    { name: 'name', type: 'text', title: 'Name:', required: true },
    { name: 'characterKnown', type: 'checkbox', title: 'Is Character Known?: ' },
    { name: 'background', type: 'editor', title: 'Background:', required: true },
    { name: 'knownBackground', type: 'editor', title: 'Background known to players:' },
    { name: 'phisicalDescription', type: 'editor', title: 'Description:', required: true },
    { name: 'characterImage', type: 'file', title: 'Picture:', accept: 'image/*' },
    { name: 'characterFilename', type: 'file', title: 'PDF Char Sheet:', accept: '.pdf' },
    { name: 'characterLink', type: 'text', title: 'Link to Char Sheet:' },
    { name: 'charactertext', type: 'editor', title: 'Char Sheet in Text' },
    { name: 'affiliations', type: 'text', title: 'All Affiliations' },
    { name: 'affiliationsKnown', type: 'text', title: 'Affiliations known to players' },
  ];

  const getEditor = (id, name) => (
    <>
      <div>
        <span
          className="linkSpan"
          onClick={(e) => {
            e.target.textContent == 'Show Editor'
              ? (e.target.textContent = 'Hide Editor')
              : (e.target.textContent = 'Show Editor');
            document.querySelector(`.tinyDiv.${id}`).classList.toggle('d-none');
          }}
        >
          Show Editor
        </span>
      </div>
      <div className={`tinyDiv ${id} d-none`}>
        <Editor
          apiKey="ykvskhqy0toczlrzgdad9bbrn2etsrisenrm4iarmppfn7m8"
          init={{ height: 300 }}
          id={id}
          textareaName={name}
          plugins="code"
          toolbar="undo redo | styleselect | 
bold italic | alignleft aligncenter alignright alignjustify | 
bullist numlist outdent indent | code"
        />
      </div>
    </>
  );

  return (
    <div className="container mt-5">
      <h3>Add a new Character</h3>

      <div className="row">
        <div className="col">{error ? <p>Errors here: {error}</p> : ''}</div>
      </div>

      <form onSubmit={submitData} encType="multipart/form-data">
        <input type="submit" value="Add New Character" className="btn btn-primary" />
        {formFields.map((field) => (
          <div className="form-group mb-2" key={field.name}>
            <label htmlFor={field.name + field.type}>{field.title}</label>
            {field.type === 'editor' ? (
              getEditor(field.name + field.type, field.name)
            ) : (
              <input
                type={field.type}
                className={field.type == 'checkbox' ? 'form-check-input' : 'form-control'}
                name={field.name}
                id={field.name + field.type}
                accept={field.accept}
                required={field.required}
              />
            )}
          </div>
        ))}
        <input type="submit" value="Add New Character" className="btn btn-primary" />
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
