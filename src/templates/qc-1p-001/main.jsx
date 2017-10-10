import React, { Component } from 'react'

export default class Qc1p001 extends Component {
  render() {
    return (
      <div>
        {/* Page Preloading */}
        {/* Body */}
        {/* Adding/Removing class ".page-preloading" is enabling/disabling background smooth page transition effect and spinner. Make sure you also added/removed link to page-preloading.js script in the <head> of the document. */}
        {/* Page Pre-Loader */}
        <div className="page-preloader">
          <div className="preloader">
            <img src="img/preloader.gif" alt="Preloader" />
          </div>
        </div>{/* .page-preloader */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Order Content */}
          <section className="order-content-wrap">
            {/* Close Btn */}
            <span className="close-btn"><i className="material-icons close" /></span>
            {/* Preloader */}
            <div className="preloader">
              <img src="img/preloader.gif" alt="Preloader" />
            </div>
            <div className="inner">
              <form className="order-content">
                {/* Content loaded via Ajax goes here */}
              </form>{/* .order-content */}
            </div>{/* .inner */}
          </section>{/* .order-content-wrap */}
          {/* Order Content Backdrop */}
          <div className="order-content-backdrop" />
          {/* Navbar */}
          <header className="navbar">
            {/* Site Logo */}
            <a href="index.html" className="site-logo visible-desktop">
              <span>[</span> M
              <span className="text-gray">/</span>
              STORE <span>]</span>
            </a>{/* site-logo.visible-desktop */}
            <a href="index.html" className="site-logo visible-mobile">
              <span>[</span> M <span>]</span>
            </a>{/* site-logo.visible-mobile */}
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
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <div className="toolbar-toggle hidden-xs">
                  <i className="material-icons smartphone" />
                  <div className="toolbar-dropdown qr-code">
                    <img src="img/qrcode.png" alt="QR Code" />
                  </div>
                </div>
                <div className="toolbar-toggle">
                  <i className="material-icons menu" />
                  <div className="toolbar-dropdown">
                    <ul className="main-navigation">
                      <li><a href="#home" className="scroll-to">Home</a></li>
                      <li><a href="#features" className="scroll-to">Features</a></li>
                      <li><a href="#accessories" className="scroll-to">Accessories</a></li>
                      <li><a href="#video" className="scroll-to">Video Showcase</a></li>
                      <li><a href="#gallery" className="scroll-to">Gallery</a></li>
                      <li><a href="#feedback" className="scroll-to">Users Feedback</a></li>
                    </ul>
                  </div>
                </div>
                <div className="toolbar-button hidden-xs">
                  <a href="ajax/oculus_rift.html" className="btn btn-pill btn-sm btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                </div>
              </div>{/* .inner */}
            </div>{/* .toolbar */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Hero Section */}
          <section id="home" className="fw-section full-height padding-top-3x padding-bottom-3x" style={{backgroundColor: '#f5f5f5'}} data-offset-top={0}>
            <div className="container padding-top">
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-9 mobile-center">
                  <h1>Most powerful Virtual Reality Headset ever built.</h1>
                  <a href="ajax/oculus_rift.html" className="btn btn-pill btn-ghost btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                  <a href="ajax/specs.html" className="btn btn-pill btn-ghost btn-default ajax-load-link">Check Specs</a>
                </div>
              </div>{/* .row */}
              <div className="padding-top visible-sm visible-xs" />
              {/* Remove class ".layer-parallax" to disable mouse parallax effect. */}
              <div className="layer-parallax">
                <div className="layer" data-depth="0.15">
                  <img src="img/hero-image.jpg" className="block-center" alt="Oculus Rift" />
                </div>
              </div>
            </div>{/* .container */}
          </section>{/* .fw-section#home */}
          {/* Features */}
          <section id="features" className="fw-section padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/features-bg.jpg)'}} data-offset-top={67}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-lg-offset-6 col-md-7 col-md-offset-5">
                  {/* Remove "light-skin" class to switch to dark skin version. */}
                  <div className="feature light-skin">
                    <div className="feature-icon">
                      <img src="img/features/01.png" alt="Feature" />
                    </div>
                    <div className="feature-description">
                      <h3 className="feature-title">The Most Advanced VR Headset</h3>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris.</p>
                    </div>
                  </div>{/* .feature */}
                  <div className="feature light-skin">
                    <div className="feature-icon">
                      <img src="img/features/02.png" alt="Feature" />
                    </div>
                    <div className="feature-description">
                      <h3 className="feature-title">Toltal Gestures Freedom</h3>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris.</p>
                    </div>
                  </div>{/* .feature */}
                  <div className="feature light-skin">
                    <div className="feature-icon">
                      <img src="img/features/03.png" alt="Feature" />
                    </div>
                    <div className="feature-description">
                      <h3 className="feature-title">Xbox One Controller Compatible</h3>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris.</p>
                    </div>
                  </div>{/* .feature */}
                  <div className="feature light-skin">
                    <div className="feature-icon">
                      <img src="img/features/04.png" alt="Feature" />
                    </div>
                    <div className="feature-description">
                      <h3 className="feature-title">Oculus Remote Included</h3>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris.</p>
                    </div>
                  </div>{/* .feature */}
                </div>
              </div>{/* .row */}
            </div>{/* .container */}
          </section>{/* .fw-section#features */}
          {/* Accessories */}
          <section id="accessories" className="fw-section padding-top-3x padding-bottom-3x" data-offset-top={67}>
            <div className="container">
              <h2 className="block-title text-center">
                Oculus Accessories
                <small>Buy accessories. Unleash true power of your VR headset.</small>
              </h2>
              <div className="row space-top-2x">
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/01.jpg" alt="Oculus Touch" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Oculus Touch</h3>
                        <span className="shop-item-price">
                          $199.00
                        </span>
                      </div>
                      <div className="shop-item-order-btn">
                        <a href="ajax/oculus_touch.html" className="btn btn-ghost btn-sm btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/02.jpg" alt="Oculus Sensor" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Oculus Sensor</h3>
                        <span className="shop-item-price">
                          $79.00
                        </span>
                      </div>
                      <div className="shop-item-order-btn">
                        <a href="ajax/oculus_sensor.html" className="btn btn-ghost btn-sm btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/03.jpg" alt="Xbox Controller" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Xbox Controller</h3>
                        <span className="shop-item-price">
                          $50.00
                        </span>
                      </div>
                      <div className="shop-item-order-btn">
                        <a href="ajax/xbox_controller.html" className="btn btn-ghost btn-sm btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/04.jpg" alt="Oculus Remote" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Oculus Remote</h3>
                        <span className="shop-item-price">
                          Free with Rift
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/05.jpg" alt="Oculus Earphones" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Oculus Earphones</h3>
                        <span className="shop-item-price">
                          $49.00
                        </span>
                      </div>
                      <div className="shop-item-order-btn">
                        <a href="ajax/oculus_earphones.html" className="btn btn-ghost btn-sm btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <img src="img/accessories/06.jpg" alt="Oculus Case" />
                    </div>
                    <div className="shop-item-footer">
                      <div className="shop-item-details">
                        <h3 className="shop-item-title">Oculus Case</h3>
                        <span className="shop-item-price">
                          $44.00
                        </span>
                      </div>
                      <div className="shop-item-order-btn">
                        <a href="ajax/oculus_case.html" className="btn btn-ghost btn-sm btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
            </div>{/* .container */}
          </section>{/* .fw-section#accessories */}
          {/* Video Showcase */}
          <section id="video" className="fw-section no-cover padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video-bg.jpg)'}} data-offset-top={67}>
            <div className="container text-center padding-top-3x padding-bottom-3x">
              <div className="padding-top-2x hidden-xs" />
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-8">
                  <h2 className="block-title padding-bottom">
                    Want to see Oculus in action?
                    <small>Watch our short video presentation.</small>
                  </h2>
                  <a href="https://www.youtube.com/watch?v=pN6YCFlS8nU" className="video-popup-btn">
                    <i className="material-icons play_arrow" />
                  </a>
                </div>
              </div>{/* .row */}
              <div className="padding-bottom-3x hidden-xs" />
            </div>{/* .container */}
          </section>{/* .fw-section#video */}
          {/* Gallery */}
          <section id="gallery" className="fw-section padding-top-3x padding-bottom-3x" data-offset-top={67}>
            <div className="container-fluid">
              <h2 className="block-title text-center space-bottom-2x">
                Gallery
                <small>Enjoy the most beautiful industrial design ever.</small>
              </h2>
              <div className="image-carousel" data-loop="true">
                <div className="inner">
                  <img src="img/gallery/01.jpg" alt="Gallery" />
                  <img src="img/gallery/02.jpg" alt="Gallery" />
                  <img src="img/gallery/03.jpg" alt="Gallery" />
                </div>
              </div>
            </div>
          </section>{/* .fw-section#gallery */}
          {/* Testimonials */}
          <section id="feedback" className="fw-section padding-top-3x padding-bottom" data-offset-top={67}>
            <div className="container-fluid">
              <h2 className="block-title text-center space-bottom-2x">
                What Our Buyers Have To Say
                <small>Experienced and enjoyed by thouthands people. Here’s what they think.</small>
              </h2>
              <div className="row">
                <div className="col-lg-10 col-lg-offset-1">
                  <div className="row">
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/01.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Susan Barker, CEO Comp Ltd.
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/02.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Andy Trump, Founder Game
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/03.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Joseph Bran, Dean MIT
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/04.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Nick Coleman, Developer
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/05.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Emma Power, Housewife
                          </div>
                        </footer>
                      </div>
                    </div>
                    {/* Testimonial */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="testimonial">
                        <div className="testimonial-body">
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="testimonial-author-ava">
                            <img src="img/testimonials/06.jpg" alt="Author" />
                          </div>
                          <div className="testimonial-author-info">
                            Jimm Napkin, Plumber
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
            </div>{/* .container */}
          </section>{/* .fw-section#feedback */}
          {/* CTA */}
          <section className="fw-section padding-bottom-3x">
            <div className="container text-center">
              <hr />
              <h2 className="block-title padding-top-2x space-bottom-1x">
                Enjoyed What You See?
                <small>It’s the right time to buy. Oculus at discounted price.</small>
              </h2>
              <a href="ajax/oculus_rift.html" className="btn btn-ghost btn-pill btn-primary waves-effect waves-light ajax-load-link">Order Oculus Rift Now</a>
            </div>
          </section>{/* .fw-section */}
          {/* Footer */}
          <footer className="footer">
            <div className="column">
              <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
              <div className="social-bar text-center space-bottom">
                <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                  <i className="socicon-skype" />
                </a>
                <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="socicon-facebook" />
                </a>
                <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                  <i className="socicon-googleplus" />
                </a>
                <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="socicon-twitter" />
                </a>
                <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                  <i className="socicon-instagram" />
                </a>
              </div>{/* .social-bar */}
              <p className="copyright">© 2016. Made with <i className="text-danger material-icons favorite" /> by rokaux.</p>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Subscription
                <small>To receive latest offers and discounts from the shop.</small>
              </h3>
              <form action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=1194bb7544" method="post" target="_blank" className="subscribe-form" noValidate>
                <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                <button type="submit"><i className="material-icons send" /></button>
              </form>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Payment Methods
                <small>We support one of the following payment methods.</small>
              </h3>
              <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
              {/* Scroll To Top Button */}
              <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
            </div>{/* .column */}
          </footer>{/* .footer */}
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}