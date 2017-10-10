import React, { Component } from 'react'

export default class MyClass extends Component {
    render() {
        return (
            <div />
        )
    }
}

export default class PagePreloader extends Component {
    render() {
        return (
            {/* Adding/Removing class ".page-preloading" is enabling/disabling background smooth page transition effect and spinner. Make sure you also added/removed link to page-preloading.js script in the <head> of the document. */}
            {/* Page Pre-Loader */}
            <div className="page-preloader">
              <div className="preloader">
                <img src="img/preloader.gif" alt="Preloader" />
              </div>
            </div>{/* .page-preloader */}
        )
    }
}

export default class SiteLogo extends Component {
    render() {
        return (
            {/* Site Logo */}
            <a href="index.html" className="site-logo visible-desktop">
              <span>[</span> M
              <span className="text-gray">/</span>
              STORE <span>]</span>
            </a>{/* site-logo.visible-desktop */}
            <a href="index.html" className="site-logo visible-mobile">
              <span>[</span> M <span>]</span>
            </a>{/* site-logo.visible-mobile */}
        )
    }
}

export default class LanguageSwitcher extends Component {
    render() {
        return (
            {/* Language Switcher */}
            <div className="lang-switcher">
              <div className="lang-toggle">
                <img src="img/flags/GB.png" alt="English" />
                <i className="material-icons arrow_drop_down" />
                <ul className="lang-dropdown">
                  <li><a href="#"><img src="img/flags/FR.png" alt="French" />FR</a></li>
                  <li><a href="#"><img src="img/flags/DE.png" alt="German" />DE</a></li>
                  <li><a href="#"><img src="img/flags/IT.png" alt="Italian" />IT</a></li>
                </ul>
              </div>
            </div>{/* .lang-switcher */}
        )
    }
}

export default class Features extends Component {
    render() {
        return (
            {/* Features */}
            <section className="container space-top space-bottom padding-top-3x padding-bottom-3x">
            <div className="row">
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons location_on" />
                  </div>
                  <h4 className="feature-title">Free World-Wide Shipping</h4>
                  <p className="feature-text">Free shipping on all orders over $100</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons autorenew" />
                  </div>
                  <h4 className="feature-title">Money Back Guarantee</h4>
                  <p className="feature-text">We return money within 30 days</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons headset_mic" />
                  </div>
                  <h4 className="feature-title">24/7 Online Support</h4>
                  <p className="feature-text">Friendly 24/7 customer support</p>
                </div>
              </div>
              {/* Feature */}
              <div className="col-md-3 col-sm-6">
                <div className="feature text-center">
                  <div className="feature-icon">
                    <i className="material-icons credit_card" />
                  </div>
                  <h4 className="feature-title">Secure Online Payments</h4>
                  <p className="feature-text">We posess SSL / Secure Certificate</p>
                </div>
              </div>
            </div>{/* .row */}
            </section>{/* .container */}
        )
    }
}

export default class Brands extends Component {
    render() {
        return (
            {/* Brands */}
            <section className="container padding-top-2x padding-bottom">
            <hr />
            <h3 className="text-center padding-top-2x">More brands</h3>
            <div className="row padding-top">
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/01.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/02.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/03.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/04.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/05.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
              {/* Brand */}
              <div className="col-sm-4 col-xs-6">
                <a href="#" className="brand">
                  <div className="brand-logo opacity-75">
                    <img src="img/brands/06.svg" alt="Brand" />
                  </div>
                  <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.</p>
                </a>
              </div>
            </div>{/* .row */}
            </section>{/* .container */}
            {/* Video Popup */}
            <div className="fw-section space-top-2x padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className="container padding-top-3x padding-bottom-3x text-center">
              <div className="space-top-3x space-bottom">
                {/* Add ".light-skin" class to alter appearance. */}
                <a href="https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0" className="video-popup-btn">
                  <i className="material-icons play_arrow" />
                </a>
              </div>
              <p className="space-bottom-2x">M-Store - your reliable partner.</p>
            </div>
            </div>{/* .fw-section */}
        )
    }
}

export default class SpecialOffer extends Component {
    render() {
        return (
            {/* Special Offer */}
            <div className="col-lg-3 col-md-4">
            <div className="info-box text-center">
              <h2>Special Offer<br /><span className="text-danger">-30%</span></h2>
              <a href="shop-single.html" className="inline">
                <img src="img/shop/special-offer.jpg" alt="Special Offer" />
              </a>
              <h3 className="lead text-normal space-bottom-half"><a href="shop-single.html" className="link-title">FLOS Outdoor Lightning</a></h3>
              <span className="lead text-normal text-gray text-crossed">$800.00</span>
              <span className="h4 text-normal text-danger">$560.00</span>
              {/* Countdown */}
              {/* Date Format: month/day/year. "date-time" data attribute is required. */}
              <div className="countdown space-top-half padding-top" data-date-time="07/30/2017 12:00:00">
                <div className="item">
                  <div className="days">00</div>
                  <span className="days_ref">Days</span>
                </div>
                <div className="item">
                  <div className="hours">00</div>
                  <span className="hours_ref">Hours</span>
                </div>
                <div className="item">
                  <div className="minutes">00</div>
                  <span className="minutes_ref">Mins</span>
                </div>
                <div className="item">
                  <div className="seconds">00</div>
                  <span className="seconds_ref">Secs</span>
                </div>
              </div>{/* .counter */}
            </div>{/* .info-box */}
            <div className="padding-bottom-2x visible-xs" />
            </div>{/* .col-lg-3.col-md-4 */}
        )
    }
}
