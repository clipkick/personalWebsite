import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import CampaignSelector from '../components/campaignSelector';
import { Context as CampaignContext } from '../components/campaignContext';
import CharacterDetails from '../components/mapDetails';
import CharacterAdd from '../components/characterAdd';
import CharacterEdit from '../components/CharacterEdit';
import Loading from '../components/loading';

const Characters = () => {
  const { campaign, error, getError, editPermissions, setCharData } = useContext(CampaignContext);
  const [charDetail, setCharDetail] = useState(null);
  const [edit, setEdit] = useState(false);
  const location = useLocation().pathname;

  const navigate = useNavigate();

  if (
    location != '/pathfinder/characters/details' &&
    location != '/pathfinder/characters/add' &&
    edit
  )
    setEdit(false);

  useEffect(() => {
    if (location == '/pathfinder/characters/details' && !campaign.title)
      navigate('/pathfinder/characters');
    if (campaign._id) setCharData();
  }, [campaign]);
  //--------
  // sets content so surrunding html is not copied many times
  let contents;
  if (getError()) {
    contents = <pre>{JSON.stringify(error, null, 2)}</pre>;
  } else if (edit && charDetail && location == '/pathfinder/characters/details') {
    contents = <CharacterEdit char={charDetail} setEdit={setEdit} setChar={setCharDetail} />;
  } else if (charDetail && location == '/pathfinder/characters/details') {
    contents = <CharacterDetails char={charDetail} setChar={setCharDetail} setEdit={setEdit} />;
  } else if (!campaign.title) {
    contents = (
      <>
        <p>No campaign selected, please select a camapign</p>
        <CampaignSelector />
      </>
    );
  } else if (!campaign.characters) {
    contents = <Loading />;
  } else {
    contents = (
      <>
        <div className="row mb-2">
          {campaign.characters.map((char) => {
            return (
              <div
                key={char._id}
                onClick={() => {
                  setCharDetail(char);
                  navigate('details');
                }}
                className="charList col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <div className="border d-flex align-items-center justify-content-between ps-1">
                  {char.name}
                  <img
                    className="charImage thumbnail align-right"
                    src={'/img/pathfinder/' + campaign._id + '/' + char.characterImage}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {edit ? (
          <CharacterAdd setEdit={setEdit} />
        ) : editPermissions.map ? (
          <Link
            to="add"
            className="btn btn-dark"
            onClick={() => {
              setEdit(true);
            }}
          >
            Add new Character
          </Link>
        ) : (
          ''
        )}
      </>
    );
  }

  return (
    <section className="chars">
      <div className="container">
        <h1 className="pageTitle">Characters - {campaign.title}</h1>
        {contents}
      </div>
    </section>
  );
};

export default Characters;
