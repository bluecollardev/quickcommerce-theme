import React, { Component } from 'react'

export default class ShopSingle extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Shop Single Product</title>
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
                    <li className="current-menu-item"><a href="shop-single.html">Single Product</a></li>
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
          {/* Pager + Product Gallery */}
          <section className="fw-section bg-gray padding-top-3x">
            {/* Page Navigation */}
            <a href="#" className="page-nav page-prev">
              <span className="page-preview">
                <img src="img/pager/01.jpg" alt="Page" />
              </span>
              — Prev
            </a>
            <a href="#" className="page-nav page-next">
              <span className="page-preview">
                <img src="img/pager/02.jpg" alt="Page" />
              </span>
              Next —
            </a>
            <div className="container padding-top">
              {/* Product Gallery */}
              <div className="product-gallery">
                {/* Preview */}
                <ul className="product-gallery-preview">
                  <li id="preview01"><img src="img/shop/product-gallery/preview01.jpg" alt="Product" /></li>
                  <li id="preview02" className="current"><img src="img/shop/product-gallery/preview02.jpg" alt="Product" /></li>
                  <li id="preview03"><img src="img/shop/product-gallery/preview03.jpg" alt="Product" /></li>
                </ul>{/* .product-gallery-preview */}
                {/* Thumblist */}
                <ul className="product-gallery-thumblist">
                  <li><a href="#preview01">
                      <img src="img/shop/product-gallery/thumb01.jpg" alt="Product" />
                    </a></li>
                  <li className="active"><a href="#preview02">
                      <img src="img/shop/product-gallery/thumb02.jpg" alt="Product" />
                    </a></li>
                  <li><a href="#preview03">
                      <img src="img/shop/product-gallery/thumb03.jpg" alt="Product" />
                    </a></li>
                </ul>{/* .product-gallery-thumblist */}
              </div>{/* .product-gallery */}
            </div>{/* .container */}
          </section>{/* .fw-section.bg-gray */}
          {/* Product Info */}
          <section className="fw-section bg-gray padding-bottom-3x">
            <div className="container">
              <div className="product-info padding-top-2x text-center">
                <h1 className="h2 space-bottom-half">Maharam Shell Chair</h1>
                <h2>$128.00</h2>
                <p className="text-sm text-gray">Quisque rutrum eu sapien in viverra. Quisque id consectetur tellus. Etiam in lacus ut lorem vehicula vehicula non et felis. Integer quis solis.</p>
                <div className="product-meta">
                  <div className="product-sku">
                    <strong>SKU: </strong>
                    <span>146950023</span>
                  </div>
                  <div className="product-category">
                    <strong>Category: </strong>
                    <a href="#">Furniture</a>
                  </div>
                  <span className="product-rating text-warning">
                    <i className="material-icons star" />
                    <i className="material-icons star" />
                    <i className="material-icons star" />
                    <i className="material-icons star" />
                    <i className="material-icons star_border" />
                  </span>
                </div>{/* .product-meta */}
                <div className="product-tools shop-item">
                  <div className="count-input">
                    <a className="incr-btn" data-action="decrease" href="#">–</a>
                    <input className="quantity" type="text" defaultValue={1} />
                    <a className="incr-btn" data-action="increase" href="#">+</a>
                  </div>{/* .count-input */}
                  <div className="form-element">
                    <select className="form-control form-control-sm color-select">
                      <option value="blue" data-image="preview02">Blue</option>
                      <option value="creme" data-image="preview01">Creme</option>
                      <option value="red" data-image="preview03">Red</option>
                    </select>
                  </div>{/* .form-element */}
                  <a href="#" className="add-to-cart">
                    <em>Add to Cart</em>
                    <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                      <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width={2} stroke-linecap="square" stroke-miterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                    </svg>
                  </a>{/* .add-to-cart */}
                </div>{/* .product-tools */}
                <div className="product-share">
                  <span>Share this product: </span>
                  <div className="social-bar">
                    <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                      <i className="socicon-facebook" />
                    </a>
                    <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                      <i className="socicon-twitter" />
                    </a>
                    <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                      <i className="socicon-instagram" />
                    </a>
                  </div>
                </div>{/* .product-share */}
              </div>{/* .product-info */}
            </div>{/* .container */}
          </section>{/* .fw-section.bg-gray */}
          {/* Product Tabs */}
          <section className="container padding-top-2x">
            {/* Nav Tabs */}
            <ul className="nav-tabs text-center" role="tablist">
              <li className="active"><a href="#description" role="tab" data-toggle="tab">Description</a></li>
              <li><a href="#additional" role="tab" data-toggle="tab">Additional Info</a></li>
              <li><a href="#reviews" role="tab" data-toggle="tab">Reviews <sup>3</sup></a></li>
            </ul>{/* .nav-tabs */}
            {/* Tab panes */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane transition fade in active" id="description">
                <div className="row space-top">
                  <div className="col-md-6 space-bottom">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe src="https://player.vimeo.com/video/105829213?color=77cde3&title=0&byline=0&portrait=0" allowFullScreen />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam hic totam, tempore quos dicta voluptate tempora ex voluptatum amet, veniam assumenda magnam eveniet eius reiciendis, ab necessitatibus quis iure libero.</p>
                    <p>Alias commodi aspernatur quo illo dolor voluptatem animi ipsum laudantium similique blanditiis, molestias facilis vitae harum minima obcaecati corrupti quibusdam minus modi.</p>
                  </div>
                </div>
              </div>{/* .tab-pane */}
              <div role="tabpanel" className="tab-pane transition fade" id="additional">
                <div className="row">
                  <div className="col-md-6">
                    <table className="table-no-border">
                      <tbody><tr>
                          <th>Weight</th>
                          <td>2.65 kg</td>
                        </tr>
                        <tr>
                          <th>Dimensions</th>
                          <td>120 x 75 x 90 cm</td>
                        </tr>
                        <tr>
                          <th>Materials</th>
                          <td>40% wood, 37% cotton, 23% plastic</td>
                        </tr>
                      </tbody></table>
                  </div>
                  <div className="col-md-6">
                    <table className="table-no-border">
                      <tbody><tr>
                          <th>Colors</th>
                          <td>Blue, Creme, Orange, Red</td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Norway</td>
                        </tr>
                        <tr>
                          <th>Other Info</th>
                          <td>Repellendus ea laudantium pariatur eum.</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>{/* .tab-pane */}
              <div role="tabpanel" className="tab-pane transition fade" id="reviews">
                {/* Review */}
                <div className="review">
                  <div className="review-author-ava">
                    <img src="img/shop/reviews/01.jpg" alt="Review Author" />
                  </div>
                  <div className="review-body">
                    <div className="review-meta">
                      <div className="column">
                        <h4 className="review-title">Very stylish. Great Deal!</h4>
                      </div>
                      <div className="column">
                        <span className="product-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                        </span>
                      </div>
                    </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    <cite>Jessie James</cite>
                  </div>
                </div>{/* .review */}
                {/* Review */}
                <div className="review">
                  <div className="review-author-ava">
                    <img src="img/shop/reviews/02.jpg" alt="Review Author" />
                  </div>
                  <div className="review-body">
                    <div className="review-meta">
                      <div className="column">
                        <h4 className="review-title">Nice nordic design, afordable price.</h4>
                      </div>
                      <div className="column">
                        <span className="product-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star_border" />
                        </span>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sequi ipsa fugit officia eos! Sapiente laboriosam molestiae praesentium ducimus culpa. Magnam, odit, optio. Possimus similique eligendi explicabo, dolore, beatae sequi.</p>
                    <cite>Susanna Davis</cite>
                  </div>
                </div>{/* .review */}
                {/* Review */}
                <div className="review">
                  <div className="review-author-ava">
                    <img src="img/shop/reviews/03.jpg" alt="Review Author" />
                  </div>
                  <div className="review-body">
                    <div className="review-meta">
                      <div className="column">
                        <h4 className="review-title">Godd value for your money.</h4>
                      </div>
                      <div className="column">
                        <span className="product-rating text-warning">
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star" />
                          <i className="material-icons star_border" />
                        </span>
                      </div>
                    </div>
                    <p>Anuo ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                    <cite>Donald Murphy</cite>
                  </div>
                </div>{/* .review */}
                {/* Reviview Form */}
                <h4 className="padding-top">Leave a review</h4>
                <form method="post" className="row padding-top">
                  <div className="col-sm-4">
                    <div className="form-element">
                      <input type="text" className="form-control" placeholder="Name*" required />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-element">
                      <input type="email" className="form-control" placeholder="Email*" required />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-element form-select">
                      <select className="form-control">
                        <option>5 stars</option>
                        <option>4 stars</option>
                        <option>3 stars</option>
                        <option>2 stars</option>
                        <option>1 star</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-element">
                      <textarea rows={8} className="form-control" placeholder="Review*" required defaultValue={""} />
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-6 col-lg-offset-9 col-md-offset-8 col-sm-offset-6">
                        <button type="submit" className="btn btn-block btn-primary waves-effect waves-light space-top-none space-bottom-none">Leave Review</button>
                      </div>
                    </div>
                  </div>
                </form>{/* .row */}
              </div>{/* .tab-pane */}
            </div>{/* .tab-content */}
          </section>{/* .container */}
          {/* Related Products */}
          <section className="container padding-top padding-bottom">
            <hr />
            <h3 className="padding-top">You May Also Like</h3>
            <div className="row padding-top">
              <div className="col-lg-3 col-sm-6">
                <div className="shop-item">
                  <div className="shop-thumbnail">
                    <span className="shop-label text-danger">Sale</span>
                    <a href="#" className="item-link" />
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
                    <h3 className="shop-item-title"><a href="#">Hook Basket</a></h3>
                    <span className="shop-item-price">
                      $112.35
                    </span>
                  </div>
                </div>{/* .shop-item */}
              </div>{/* .col-lg-3.col-sm-6 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Footer */}
          <footer className="footer space-top-3x">
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