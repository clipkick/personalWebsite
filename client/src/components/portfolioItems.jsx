import React from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import PortfolioDetails from './portfolioDetails';

const PortfolioItems = ({ stateFunction }) => {
  return (
    <div className="row portfolio-container">
      {/* item 1 */}
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="/img/portfolio/personalWebsite/cover.jpg" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>This Website</h4>
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
                    title: 'My Personal Website',
                    images: [
                      { id: 0, src: 'personalWebsite/cover.jpg' },
                      { id: 1, src: 'personalWebsite/portfolio.jpg' },
                      { id: 2, src: 'personalWebsite/about.jpg' },
                    ],
                    link: 'https://github.com/clipkick/personalWebsite',
                    description: `This is my personal website. Thank you for visiting.
                    It has been built starting with a template from bootstrapmade.
                    I then took the HTML template apart and created this website using Node.js and React.
                    In the github this should be tagged as v1.0. 
                    My next step with the site is to incorperate MongoDB on the backend.`,
                  }}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>

      {/* item 2 */}
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="/img/portfolio/radioWebsites/ckpr.jpg" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Radio Websites</h4>
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
                    title: 'Radio Websites',
                    images: [
                      { id: 0, src: 'radioWebsites/ckpr.jpg' },
                      { id: 1, src: 'radioWebsites/rock94.jpg' },
                      { id: 2, src: 'radioWebsites/ckprthunderbay.jpg' },
                    ],
                    link: 'https://ckpr.com',
                    description: `These are a set of websites created while working at Dougallmedia.
                    In total there are 4 websites for radio stations and 2 for television stations.
                    They all use a similar template to keep branding of Dougallmedia, 
                    but each site has its own style to keep with.
                    They were build with .Net and styled with bootstrap using Microsoft SQL Server
                    to hold the data inputed from a seperate CMS.`,
                  }}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>

      {/* item 3 */}
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="/img/portfolio/chatApp/chat1.png" className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Chat room app</h4>
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
                    title: 'Chat room app',
                    images: [{ id: 0, src: 'chatApp/chat1.png' }],
                    link: 'http://sanderson.zapto.org:3000',
                    description: `This is a really simple chat room app.
                    It has not been styled and has room for improvement.
                    It has been created with Node.js using socket.io for
                    communicating between server and client. This allows one person to send
                    a message and another to receive it immediatly. It also uses
                    MongoDB for persisting the messages between sessions. My next steps on this would be
                    using auth0 for user logins and creating multiple different rooms. Ps. you can't
                    submit a message with "badword" in it.
                    `,
                  }}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioItems.propTypes = {
  stateFunction: PropTypes.func.isRequired,
};

export default PortfolioItems;
