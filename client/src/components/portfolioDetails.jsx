import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Helmet } from 'react-helmet';

// Import Swiper styles
// import 'swiper/swiper.scss';

const PortfolioDetails = ({ close, details }) => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div id="portfolio-details" className="portfolio-details">
      <Helmet>
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="/css/pagination.css" rel="stylesheet" />
        <link href="/css/navigation.css" rel="stylesheet" />
      </Helmet>
      <div className="portfolio-close" onClick={close}>
        X
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="portfolio-title">{details.title} Details</h2>
            <Swiper
              navigation
              pagination={{ clickable: true, el: '.swiper-pagination' }}
              spaceBetween={50}
            >
              {details.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={'img/portfolio/' + image.src} className="img-fluid" alt={image.id} />
                </SwiperSlide>
              ))}

              <div className="swiper-pagination"></div>
              {/* <div className="swiper-pagination">prev</div> */}
            </Swiper>
          </div>

          <div className="col-lg-4 portfolio-info">
            <h3>Website Links</h3>
            <ul>
              {/* <li>
                <strong>Project date</strong>: 01 March, 2020
              </li> */}
              {details.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.href}</a>
                </li>
              ))}
            </ul>

            <p>{details.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioDetails.propTypes = {
  close: PropTypes.func,
  details: PropTypes.object,
};

export default PortfolioDetails;
