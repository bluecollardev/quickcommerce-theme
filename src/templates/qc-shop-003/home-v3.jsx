import React, { Component } from 'react'

export default class HomeV3 extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Modern E-Commerce Template</title>
        {/*SEO Meta Tags*/}
        <meta name="description" content="M-Store - Modern E-Commerce Template" />
        <meta name="keywords" content="shop, e-commerce, modern, minimalist style, responsive, online store, business, mobile, blog, bootstrap, html5, css3, jquery, js, gallery, slider, touch, creative, clean" />
        <meta name="author" content="Rokaux" />
        {/*Mobile Specific Meta Tag*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/*Favicon*/}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        {/* Google Material Icons */}
        <link href="css/vendor/material-icons.min.css" rel="stylesheet" media="screen" />
        {/* Brand Icons */}
        <link href="css/vendor/socicon.min.css" rel="stylesheet" media="screen" />
        {/* Bootstrap */}
        <link href="css/vendor/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* Theme Styles */}
        <link href="css/theme.min.css" rel="stylesheet" media="screen" />
        {/* Page Preloading */}
        {/* Modernizr */}
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
          {/* Navbar */}
          <header className="navbar">
            {/* Navbar Header */}
            <div className="navbar-header">
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
              {/* Mobile Menu Toggle */}
              <a href="#" className="mobile-menu-toggle"><i className="material-icons menu" /></a>
            </div>{/* .navbar-header */}
            {/* Mobile Menu Wrapper */}
            <div className="mobile-menu-wrapper">
              {/* Toolbar */}
              <div className="toolbar">
                <a href="account.html"><i className="material-icons person" /></a>
                <div className="cart-btn">
                  <a href="shopping-cart.html">
                    <i>
                      <span className="material-icons shopping_basket" />
                      <span className="count">2</span>
                    </i>
                  </a>
                </div>{/* .cart-btn */}
                <a href="#" className="subscribe-btn"><i className="material-icons mail_outline" /></a>
              </div>{/* .toolbar */}
              {/* Main Navigation */}
              <nav className="main-navigation">
                <ul className="menu">
                  <li className="menu-item-has-children current-menu-item">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index.html">Home Version 1</a></li>
                      <li><a href="home-v2.html">Home Version 2</a></li>
                      <li className="current-menu-item"><a href="home-v3.html">Home Version 3</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="shop-sidebar-left.html">Shop Sidebar Left</a></li>
                      <li><a href="shop-sidebar-right.html">Shop Sidebar Right</a></li>
                      <li><a href="shop-filters-top.html">Shop Filters Top</a></li>
                      <li><a href="shop-single.html">Single Product</a></li>
                      <li><a href="shopping-cart.html">Shopping Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="login.html">Login / Register Page</a></li>
                      <li><a href="account.html">User Account Page</a></li>
                    </ul>
                  </li>
                  <li><a href="blog.html">Blog</a></li>
                  <li className="menu-item-has-children">
                    <a href="#">Gallery</a>
                    <ul className="sub-menu">
                      <li><a href="gallery-with-gap.html">Gallery With Gap</a></li>
                      <li><a href="gallery-no-gap.html">Gallery No Gap</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="elements.html">Elements</a></li>
                </ul>{/* .menu */}
              </nav>{/* .main-navigation */}
            </div>{/* .mobile-menu-wrapper */}
          </header>{/* .navbar */}
          {/* Main Content Wrapper */}
          <main className="content-wrapper">
            {/* Hero Slider */}
            {/* Data API:
        data-loop="true/false" enable/disable looping
        data-autoplay="true/false" enable/disable carousel autoplay
        data-interval="3000" autoplay interval timeout in miliseconds
        Simply add necessary data attribute to the ".hero-carousel" with appropriate value to adjust carousel functionality.
       */}
            <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
              <div className="inner">
                <div className="slide" style={{backgroundImage: 'url(img/hero-slider/01.jpg)'}}>
                  <div className="container">
                    <div className="absolute from-top" style={{top: '13%'}}>
                      <span className="h1 hidden-xs">New SPA<br />Cosmetics</span>
                    </div>
                    <div className="absolute text-right from-bottom" style={{bottom: '13%', right: 15}}>
                      <span className="h2"><span className="text-thin">Only</span><br /><strong>$127.99</strong></span><br />
                      <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light space-top-none">
                        View Offer
                        <i className="material-icons arrow_forward" />
                      </a>
                    </div>
                  </div>
                </div>{/* .slide */}
                <div className="slide" style={{backgroundImage: 'url(img/hero-slider/02.jpg)'}}>
                  <div className="container text-center padding-top-3x">
                    <span className="h1 from-bottom">Stylish Chair</span><br />
                    <span className="h2 from-bottom"><span className="text-thin">Special offer: </span> <strong>-25%</strong></span><br />
                    <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                      View Offer
                      <i className="material-icons arrow_forward" />
                    </a>
                  </div>
                </div>{/* .slide */}
                <div className="slide" style={{backgroundImage: 'url(img/hero-slider/03.jpg)'}}>
                  <div className="container padding-top-3x">
                    <span className="h1 space-top from-left">Dior Sunglasses</span><br />
                    <span className="h2 from-right"><span className="text-thin">Only <span className="hidden-xs">today</span></span> <strong>-30%</strong></span><br />
                    <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                      View Offer
                      <i className="material-icons arrow_forward" />
                    </a>
                  </div>
                </div>{/* .slide */}
              </div>{/* .inner */}
            </section>{/* .hero-slider */}
            {/* Filters Bar */}
            <section className="container padding-top-3x">
              <div className="filters-bar space-top-half">
                <div className="column">
                  {/* Nav Filters */}
                  <ul className="nav-filters">
                    <li className="active"><a href="#">All</a> <sup>135</sup></li>
                    <li><a href="#">Furniture</a> <sup>42</sup></li>
                    <li><a href="#">Accessories</a> <sup>56</sup></li>
                    <li><a href="#">Lightning</a> <sup>28</sup></li>
                    <li><a href="#">Clocks</a> <sup>10</sup></li>
                  </ul>{/* .nav-filters */}
                </div>{/* .column */}
                <div className="column">
                  <a href="#filters" className="filters-toggle" data-toggle="filters">
                    <i className="material-icons filter_list" />
                    Filters
                  </a>
                  <a href="#search-box" className="search-btn" data-toggle="filters">
                    <i className="material-icons search" />
                  </a>
                </div>
              </div>{/* .filters-bar */}
              <div className="row filters">
                <div className="col-xs-12 filters-pane" id="filters">
                  <div className="row">
                    <div className="col-md-3">
                      {/* Sorting Widget */}
                      <div className="widget widget-sorting">
                        <h3 className="widget-title">Sort By</h3>
                        <ul>
                          <li className="active"><a href="#">
                              <i className="material-icons sort" />
                              Default
                            </a></li>
                          <li><a href="#">
                              <i className="material-icons favorite_border" />
                              Popularity
                            </a></li>
                          <li><a href="#">
                              <i className="material-icons vertical_align_top" />
                              Last entries
                            </a></li>
                          <li><a href="#">
                              <i className="material-icons star_border" />
                              Avarage rating
                            </a></li>
                          <li><a href="#">
                              <i className="material-icons sort_by_alpha" />
                              Alphabetically
                            </a></li>
                        </ul>
                      </div>{/* .widget.widget-sorting */}
                    </div>
                    <div className="col-md-2">
                      <div className="widget widget-color">
                        <h3 className="widget-title">Color Filter</h3>
                        <ul>
                          <li><a href="#">
                              <span className="color" style={{backgroundColor: '#93c4ef'}} />
                              Blue
                            </a></li>
                          <li><a href="#">
                              <span className="color" style={{backgroundColor: '#a7c04d'}} />
                              Green
                            </a></li>
                          <li><a href="#">
                              <span className="color" style={{backgroundColor: '#ef0568'}} />
                              Red
                            </a></li>
                          <li><a href="#">
                              <span className="color" style={{backgroundColor: '#ffce2b'}} />
                              Yellow
                            </a></li>
                        </ul>
                      </div>{/* .widget.widget-color */}
                    </div>
                    <div className="col-md-3">
                      {/* Price Range Widget */}
                      {/* Please note: Only one Range Slider allowed on the page! */}
                      <div className="widget widget-catesgories">
                        <h3 className="widget-title">Price Range</h3>
                        <form method="post" className="price-range-slider" data-start-min={250} data-start-max={650} data-min={0} data-max={1000} data-step={1}>
                          <div className="ui-range-slider" />
                          <footer className="ui-range-slider-footer">
                            <div className="column">
                              <button type="submit" className="btn btn-ghost btn-sm btn-default">Filter</button>
                            </div>
                            <div className="column">
                              <div className="ui-range-values">
                                <div className="ui-range-value-min">
                                  $<span />
                                  <input type="hidden" />
                                </div> -
                                <div className="ui-range-value-max">
                                  $<span />
                                  <input type="hidden" />
                                </div>
                              </div>
                            </div>
                          </footer>
                        </form>{/* .price-range-slider */}
                      </div>{/* .widget.widget-categories */}
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                      {/* Tags Widget */}
                      <div className="widget widget-tags">
                        <h3 className="widget-title">Popular Tags</h3>
                        <a href="#">Interior</a>
                        <a href="#">Electro</a>
                        <a href="#">Bags</a>
                        <a href="#">Cuttlery</a>
                        <a href="#">Downloadable</a>
                        <a href="#">Digital goods</a>
                        <a href="#">HiFi</a>
                      </div>{/* .widget.widget-price */}
                    </div>
                  </div>{/* .row */}
                </div>{/* .col-xs-12.filters-pane#filters */}
                <form className="col-xs-12 filters-pane" id="search-box">
                  <input type="text" className="form-control" placeholder="Type and hit enter" />
                </form>{/* .col-xs-12.filters-pane#search-box */}
              </div>{/* .row.filters */}
            </section>{/* .container */}
            {/* Shop Catalog */}
            <section className="container padding-bottom-3x">
              <div className="row">
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <span className="shop-label text-danger">Sale</span>
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th01.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Storage Box</a></h3>
                      <span className="shop-item-price">
                        <span className="old-price">$49.00</span>
                        $38.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th02.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                      <span className="shop-item-price">
                        $125.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th03.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Glass Vase</a></h3>
                      <span className="shop-item-price">
                        $62.50
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <span className="item-rating text-warning">
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star_half" />
                        <i className="material-icons star_border" />
                      </span>
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th04.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Alarm Clock</a></h3>
                      <span className="shop-item-price">
                        $178.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th05.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Wall Clock</a></h3>
                      <span className="shop-item-price">
                        $69.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th06.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">LED Lighting</a></h3>
                      <span className="shop-item-price">
                        $130.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <span className="shop-label text-warning">Popular</span>
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th07.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                      <span className="shop-item-price">
                        $99.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th08.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Hook Basket</a></h3>
                      <span className="shop-item-price">
                        $112.35
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <span className="item-rating text-warning">
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star_border" />
                      </span>
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th09.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                      <span className="shop-item-price">
                        $118.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th10.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                      <span className="shop-item-price">
                        $85.90
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th11.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Stylish Chair</a></h3>
                      <span className="shop-item-price">
                        $417.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th15.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Tissue Holder</a></h3>
                      <span className="shop-item-price">
                        $76.40
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th13.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Storage Jar</a></h3>
                      <span className="shop-item-price">
                        $19.80
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <span className="item-rating text-warning">
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star" />
                        <i className="material-icons star_half" />
                        <i className="material-icons star_border" />
                      </span>
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th14.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                      <span className="shop-item-price">
                        $299.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
                {/* Item */}
                <div className="col-lg-3 col-sm-6">
                  <div className="shop-item">
                    <div className="shop-thumbnail">
                      <a href="shop-single.html" className="item-link" />
                      <img src="img/shop/th16.jpg" alt="Shop item" />
                      <div className="shop-item-tools">
                        <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                          <i className="material-icons favorite_border" />
                        </a>
                        <a href="#" className="add-to-cart">
                          <em>Add to Cart</em>
                          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                            <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="shop-item-details">
                      <h3 className="shop-item-title"><a href="shop-single.html">Pendant Lamp</a></h3>
                      <span className="shop-item-price">
                        $27.00
                      </span>
                    </div>
                  </div>{/* .shop-item */}
                </div>{/* .col-lg-3.col-sm-6 */}
              </div>{/* .row */}
              {/* Load More Btn */}
              <a href="#" className="load-more-btn space-top space-bottom">Load More <sup>25</sup></a>
            </section>{/* .container */}
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
                  Payment Methods
                  <small>We support one of the following payment methods.</small>
                </h3>
                <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
                {/* Scroll To Top Button */}
                <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
              </div>{/* .column */}
            </footer>{/* .footer */}
          </main>{/* .content-wrapper */}
          {/* Subscribe Popup */}
          <div className="subscribe-popup-wrap">
            <div className="inner">
              <div className="subscribe-popup">
                <a href="#" className="close-btn"><i className="material-icons close" /></a>
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
              </div>
            </div>
          </div>{/* .subscribe-popup */}
          <div className="subscribe-backdrop" />
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}