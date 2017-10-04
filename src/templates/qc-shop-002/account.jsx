import React, { Component } from 'react'

export default class Account extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | User Account</title>
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
                <li className="menu-item-has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home Version 1</a></li>
                    <li><a href="home-v2.html">Home Version 2</a></li>
                    <li><a href="home-v3.html">Home Version 3</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children current-menu-item">
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
                    <li className="current-menu-item"><a href="account.html">User Account Page</a></li>
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
          {/* Featured Image */}
          <div className="featured-image" style={{backgroundImage: 'url(img/featured-image/account.jpg)'}} />
          {/* Content */}
          <section className="container padding-top-3x">
            <h1 className="mobile-center">Howdy, <span className="text-semibold">John</span></h1>
            <div className="row padding-top">
              <div className="col-sm-9 padding-bottom-2x">
                {/* Nav Tabs */}
                <ul className="nav-tabs mobile-center" role="tablist">
                  <li className="active"><a href="#profile" role="tab" data-toggle="tab">
                      <i className="material-icons person" />
                      Profile
                    </a></li>
                  <li><a href="#orders" role="tab" data-toggle="tab">
                      <i className="material-icons shopping_cart" />
                      Orders (3)
                    </a></li>
                  <li><a href="#whishlist" role="tab" data-toggle="tab">
                      <i className="material-icons favorite" />
                      Whishlist (6)
                    </a></li>
                </ul>{/* .nav-tabs */}
                {/* Tab Panes */}
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade scale in active" id="profile">
                    <form method="post">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" className="form-control" defaultValue="John" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" className="form-control" defaultValue="Doe" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="form-control" defaultValue="johndoe@mail.com" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" className="form-control" defaultValue="+1 809 765 350 92" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" defaultValue="abracadabra" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="password_confirm">Confirm Password</label>
                            <input type="password" id="password_confirm" className="form-control" defaultValue="abracadabra" />
                          </div>
                        </div>
                      </div>
                      <div className="form-element">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" className="form-control" defaultValue="33 Bedford Str." />
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="country">Country</label>
                          <div className="form-element form-select">
                            <select className="form-control" id="country">
                              <option value>Country</option>
                              <option value="australia">Australia</option>
                              <option value="gb">Great Britain</option>
                              <option value="poland">Poland</option>
                              <option value="switzerland">Switzerland</option>
                              <option value="usa" selected>USA</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="state">State</label>
                          <div className="form-element form-select">
                            <select className="form-control" id="state">
                              <option value>State</option>
                              <option value={1} selected>New York</option>
                              <option value={2}>State 2</option>
                              <option value={3}>State 3</option>
                              <option value={4}>State 4</option>
                              <option value={5}>State 5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="city">City</label>
                          <div className="form-element form-select">
                            <select className="form-control" id="city">
                              <option value>City</option>
                              <option value="bern">Bern</option>
                              <option value="london">London</option>
                              <option value="ny" selected>New York</option>
                              <option value="warsaw">Warsaw</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-element">
                            <label htmlFor="zip">ZIP Code</label>
                            <input type="text" id="zip" className="form-control" defaultValue={10021} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="checkbox space-top">
                            <input type="checkbox" defaultChecked /> Subscribe me to newsletter
                          </label>
                        </div>
                        <div className="col-sm-6 text-right mobile-center">
                          <button type="submit" className="btn btn-primary waves-effect waves-light">Update Profile</button>
                        </div>
                      </div>
                    </form>
                  </div>{/* .tab-pane#profile */}
                  <div role="tabpanel" className="tab-pane transition fade scale" id="orders">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Order #</th>
                            <th>Date Purchased</th>
                            <th>Status</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="#">31719DA0567</a></td>
                            <td>December 06, 2016</td>
                            <td><span className="text-warning">In Progress</span></td>
                            <td>$1,350.00</td>
                          </tr>
                          <tr>
                            <td><a href="#">22018770CV7</a></td>
                            <td>November 11, 206</td>
                            <td><span className="text-danger">Canceled</span></td>
                            <td>$475.60</td>
                          </tr>
                          <tr>
                            <td><a href="#">4B33FG45520</a></td>
                            <td>September 23, 2016</td>
                            <td><span className="text-success">Delivered</span></td>
                            <td>$2,140.80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>{/* .tab-pane#orders */}
                  <div role="tabpanel" className="tab-pane transition fade scale" id="whishlist">
                    <div className="row">
                      {/* Item */}
                      <div className="col-md-4 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th02.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                      </div>
                      {/* Item */}
                      <div className="col-md-4 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th05.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                      </div>
                      {/* Item */}
                      <div className="col-md-4 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th06.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                      </div>
                      {/* Item */}
                      <div className="col-md-4 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th08.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                      </div>
                      {/* Item */}
                      <div className="col-md-4 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th11.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                            <img src="img/shop/th15.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" title="Remove from wishlist">
                                <i className="material-icons close" />
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
                      </div>
                    </div>
                  </div>{/* .tab-pane#whishlist */}
                </div>{/* .tab-content */}
              </div>{/* .col-sm-8 */}
              {/* Sidebar */}
              <div className="col-sm-3 padding-bottom-2x">
                <aside className="mobile-center">
                  <h3>Your reward points:</h3>
                  <h3><span className="text-semibold">1356</span> <span className="h5">points</span></h3>
                  <p className="text-sm text-gray">You can spend these points on products from our shop catalog, to reduce shipping cost, etc.</p>
                  <a href="shop-boxed-sl.html" className="btn btn-default btn-ghost icon-left btn-block">
                    <i className="material-icons arrow_back" />
                    Go to Shop
                  </a>
                  <a href="#" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Get more points</a>
                </aside>
              </div>{/* .col-sm-4 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Footer */}
          <footer className="footer space-top-2x">
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