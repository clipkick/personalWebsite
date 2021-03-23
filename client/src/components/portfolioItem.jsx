import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import PortfolioDetails from './portfolioDetails';

const PortfolioItem = ({ stateFunction, item }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img
          src={`/img/portfolio/${item.images[0].src}`}
          className="img-fluid"
          alt={item.images[0].alt}
        />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <Popup
            onOpen={() => {
              stateFunction('portfolio');
            }}
            onClose={() => {
              stateFunction('portfolio section-show');
            }}
            trigger={
              <a href="#" className="portfolio-details-lightbox" title="Portfolio Details">
                Full Details
              </a>
            }
            modal
          >
            {(close) => (
              <PortfolioDetails
                close={close}
                details={{
                  title: item.title,
                  images: item.images,
                  links: item.links,
                  description: item.description,
                }}
              />
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  stateFunction: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default PortfolioItem;
