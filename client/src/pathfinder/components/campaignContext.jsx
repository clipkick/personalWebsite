import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CampaignClass from '../campaignClass';

export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const { campaign: initialCampaign, editPermissions, children } = props;

  // Use State to keep the values
  const [campaign, setCampaign] = useState(initialCampaign);
  // errors need to be passed in state context since errors occur here
  const [error, setError] = useState({});

  /**
   * Takes in an object and sets campaign to a new campaign of that object
   * @param {_id, title}
   */
  const createCampaign = ({ _id, title }) => {
    setCampaign(new CampaignClass({ _id, title }));
  };

  /**
   * Checks if you have full campaign data and if not grabs it from server
   * and saves it in the camapign object
   */
  const setCampaignData = async () => {
    try {
      if (!campaign.description) {
        const response = await axios.get(`/api/${campaign._id}/details`);
        setCampaign(
          new CampaignClass({
            ...campaign,
            GM: response.data.GM,
            description: response.data.description,
          })
        );
      }
    } catch (error) {
      setError({ error, getCount: 0 });
    }
  };

  /**
   *
   * Checks to see if map data has been set
   * If not retreives map data from server and saves in context
   * @param {*} mapId
   */
  const setMapData = async (mapId = null) => {
    try {
      if (!campaign.maps) {
        const response = await axios.get(`/api/${campaign._id}/map`);
        setCampaign(
          new CampaignClass({
            ...campaign,
            maps: response.data,
          })
        );
      } else if (mapId) {
        try {
          const { index: mapIndex, map } = await campaign.getMapAndIndexById(mapId);
          // const mapIndex = campaign.maps.findIndex((map) => map._id == mapId);
          if (mapIndex > -1 && !map.description) {
            const mapResponse = await axios.get(`/api/${campaign._id}/map/${map._id}`);

            setCampaign(
              new CampaignClass({
                ...campaign,
                maps: [
                  ...campaign.maps.slice(0, mapIndex),
                  mapResponse.data,
                  ...campaign.maps.slice(mapIndex + 1),
                ],
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      setError({ error, getCount: 0 });
    }
  };

  /**
   *
   * Checks to see if character data has been set
   * If not retreives map data from server and saves in context
   * can set basic details without id and full details with id
   * @param {*} charId
   */
  const setCharData = async (charId = null) => {
    try {
      if (!campaign.characters) {
        const response = await axios.get(`/api/${campaign._id}/character`);
        setCampaign(
          new CampaignClass({
            ...campaign,
            characters: response.data,
          })
        );
      } else if (charId) {
        try {
          const { index: charIndex, char } = await campaign.getCharacterAndIndexById(charId);
          if (charIndex > -1 && !campaign.getCharacterSheet(char)) {
            const mapResponse = await axios.get(`/api/${campaign._id}/character/${char._id}`);

            setCampaign(
              new CampaignClass({
                ...campaign,
                characters: [
                  ...campaign.characters.slice(0, charIndex),
                  mapResponse.data,
                  ...campaign.characters.slice(charIndex + 1),
                ],
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      setError({ error, getCount: 0 });
    }
  };

  /**
   * Checks to see if there was an error, so that errors in the state do not persist
   * it only return true the first time the error is checked.
   * @returns boolean
   */
  const getError = () => {
    if (error.getCount == 0) {
      error.getCount = 1;
      return true;
    }
    return false;
  };

  //sets permissions for editing
  // const editPermissions = {
  //   map: true,
  //   character:true,
  // };

  // Make the context object:
  const campaignContext = {
    campaign,
    error: error.error,
    getError,
    editPermissions,
    createCampaign,
    setCampaignData,
    setError,
    setMapData,
    setCharData,
  };

  // pass the value in provider and return
  return <Context.Provider value={campaignContext}>{children}</Context.Provider>;
};

Provider.propTypes = {
  campaign: PropTypes.object,
  editPermissions: PropTypes.object,
  children: PropTypes.any,
};

Provider.defaultProps = {
  campaign: new CampaignClass({}),
};
