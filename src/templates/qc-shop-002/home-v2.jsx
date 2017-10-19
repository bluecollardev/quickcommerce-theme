import React, { Component } from 'react'

export default class HomeV2 extends Component {
  render() {
    return (
      <div>
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
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
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
            {/* Main Navigation */}
            {/* Control the position of navigation via modifier classes: "text-left, text-center, text-right" */}
            <nav className="main-navigation text-center">
              <ul className="menu">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home Version 1</a></li>
                    <li className="current-menu-item"><a href="home-v2.html">Home Version 2</a></li>
                    <li><a href="home-v3.html">Home Version 3</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
                    <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
                    <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
                    <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
                    <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
                    <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
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
                    <li><a href="gallery-fullwidth-with-gap.html">Full Width With Gap</a></li>
                    <li><a href="gallery-fullwidth-no-gap.html">Full Width No Gap</a></li>
                    <li><a href="gallery-boxed-with-gap.html">Boxed With Gap</a></li>
                    <li><a href="gallery-boxed-no-gap.html">Boxed No Gap</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Multilevel</a>
                  <ul className="sub-menu">
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 1</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 2</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Submenu Item 3</a></li>
                    <li><a href="#">Submenu Item 4</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                  </ul>
                </li>
                <li className="hidden-md"><a href="elements.html">Elements</a></li>
              </ul>{/* .menu */}
            </nav>{/* .main-navigation */}
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <a href="#" className="mobile-menu-toggle"><i className="material-icons menu" /></a>
                <a href="account.html"><i className="material-icons person" /></a>
                <div className="cart-btn">
                  <a href="shopping-cart.html">
                    <i>
                      <span className="material-icons shopping_basket" />
                      <span className="count">2</span>
                    </i>
                  </a>
                  {/* Cart Dropdown */}
                  <div className="cart-dropdown">
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item01.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                        <h4 className="item-price">1 x $85.90</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item02.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Storage Box</a></h3>
                        <h4 className="item-price">2 x $38.00</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-subtotal">
                      <div className="column">
                        <span>Subtotal:</span>
                      </div>
                      <div className="column">
                        <span className="amount">$161.90</span>
                      </div>
                    </div>
                  </div>{/* .cart-dropdown */}
                </div>{/* .cart-btn */}
              </div>{/* .inner */}
            </div>{/* .toolbar */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Featured Categories */}
          <section className="container-fluid" style={{paddingTop: 7}}>
            <div className="row">
              <div className="col-md-6">
                <a href="#" className="category-tile">
                  <div className="inner">
                    <div className="column">
                      <h3 className="space-bottom-half">Men Bags</h3>
                      <p className="text-sm text-gray">Starting from $59.99</p>
                    </div>
                    <div className="column">
                      <div className="category-thumb">
                        <img src="img/categories/tile01.jpg" alt="Category" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a href="#" className="category-tile">
                  <div className="inner">
                    <div className="column">
                      <h3>Furniture</h3>
                      <p className="text-sm text-gray">Starting from $126.00</p>
                    </div>
                    <div className="column">
                      <div className="category-thumb">
                        <img src="img/categories/tile02.jpg" alt="Category" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a href="#" className="category-tile">
                  <div className="inner">
                    <div className="column">
                      <h3>Clocks</h3>
                      <p className="text-sm text-gray">Starting from $35.50</p>
                    </div>
                    <div className="column">
                      <div className="category-thumb">
                        <img src="img/categories/tile03.jpg" alt="Category" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <a href="#" className="category-tile">
                  <div className="inner">
                    <div className="column">
                      <h3>Lightning</h3>
                      <p className="text-sm text-gray">Starting from $95.99</p>
                    </div>
                    <div className="column">
                      <div className="category-thumb">
                        <img src="img/categories/tile04.jpg" alt="Category" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>{/* .row */}
          </section>{/* .container-fluid */}
          {/* Product Grid */}
          <section className="container padding-top-3x">
            {/* Bestsellers */}
            <h3 className="text-center">Bestsellers</h3>
            <div className="row padding-top">
              {/* Item */}
              <div className="col-md-4 col-sm-6">
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
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
              </div>{/* .col-md-4.col-sm-6 */}
              <div className="col-md-4 col-sm-6">
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
                    <img src="img/shop/th11.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
              </div>
              {/* Item */}
              <div className="col-md-4 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <a href="shop-single.html" className="item-link" />
                    <img src="img/shop/th16.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
              </div>{/* .col-md-4.col-sm-6 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Special Offer */}
          <section className="fw-section bg-gray padding-top padding-bottom-2x space-top-3x">
            <div className="container">
              {/* Special Offer */}
              <div className="info-box text-center">
                <h2 className="padding-top">Special Offer <span className="text-danger">-30%</span></h2>
                <a href="shop-single.html" className="inline">
                  <img src="img/shop/special-offer2.jpg" alt="Special Offer" />
                </a>
                <h3 className="lead text-normal space-bottom-half"><a href="shop-single.html" className="link-title">Living Room Sofa Transformer</a></h3>
                <span className="lead text-normal text-gray text-crossed">$1900.00</span>
                <span className="h4 text-normal text-danger">$950.00</span><br />
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
            </div>
          </section>
          {/* New Arrivals */}
          <section className="container padding-top-3x space-top-half">
            <h3 className="text-center">New Arrivals</h3>
            <div className="row padding-top">
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <span className="shop-label text-danger">Sale</span>
                    <a href="#" className="item-link" />
                    <img src="img/shop/th05.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
                    <h3 className="shop-item-title"><a href="#">Wall Clock</a></h3>
                    <span className="shop-item-price">
                      <span className="old-price">$69.00</span>
                      $48.00
                    </span>
                  </div>
                </div>{/* .shop-item */}
              </div>{/* .col-lg-3.col-sm-6 */}
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <a href="#" className="item-link" />
                    <img src="img/shop/th06.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
                    <h3 className="shop-item-title"><a href="#">LED Lighting</a></h3>
                    <span className="shop-item-price">
                      $130.00
                    </span>
                  </div>
                </div>{/* .shop-item */}
              </div>{/* .col-lg-3.col-sm-6 */}
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <a href="#" className="item-link" />
                    <img src="img/shop/th04.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
                    <h3 className="shop-item-title"><a href="#">Alarm Clock</a></h3>
                    <span className="shop-item-price">
                      $178.00
                    </span>
                  </div>
                </div>{/* .shop-item */}
              </div>{/* .col-lg-3.col-sm-6 */}
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <a href="#" className="item-link" />
                    <img src="img/shop/th08.jpg" alt="Shop item" />
                    <div className="shop-item-tools">
                      <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title data-original-title="Wishlist">
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
                    <h3 className="shop-item-title"><a href="#">Hook Basket</a></h3>
                    <span className="shop-item-price">
                      $112.35
                    </span>
                  </div>
                </div>{/* .shop-item */}
              </div>{/* .col-lg-3.col-sm-6 */}
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
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
          </section>{/* .container */}
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