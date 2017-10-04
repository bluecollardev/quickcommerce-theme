React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>M-Store | Blog</title>
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
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index.html">Home Version 1</a></li>
                      <li><a href="home-v2.html">Home Version 2</a></li>
                      <li><a href="home-v3.html">Home Version 3</a></li>
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
                  <li className="current-menu-item"><a href="blog.html">Blog</a></li>
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
            {/* Featured Image */}
            <div className="featured-image" style={{backgroundImage: 'url(img/featured-image/blog.jpg)'}} />
            {/* Single Post Content */}
            <section className="single-post-wrap">
              {/* Close Btn */}
              <span className="close-btn"><i className="material-icons close" /></span>
              {/* Preloader */}
              <div className="preloader">
                <img src="img/preloader.gif" alt="Preloader" />
              </div>
              <div className="inner">
                <div className="post-content">
                  {/* Content loaded via Ajax goes here */}
                </div>{/* .post-content */}
                <div className="post-share">
                  <span>Share this post:&nbsp;&nbsp;&nbsp;</span>
                  <div className="social-bar">
                    <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title data-original-title="Facebook">
                      <i className="socicon-facebook" />
                    </a>
                    <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title data-original-title="Twitter">
                      <i className="socicon-twitter" />
                    </a>
                    <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                      <i className="socicon-instagram" />
                    </a>
                  </div>
                </div>{/* .post-share */}
              </div>{/* .inner */}
            </section>{/* .single-post-wrap */}
            {/* Single Post Backdrop */}
            <div className="single-post-backdrop" />
            {/* Content */}
            <section className="container padding-top-3x padding-bottom">
              <h1>Blog</h1>
              {/* Post */}
              <div className="row padding-top paddin-bottom">
                <div className="col-md-3 col-sm-4">
                  <div className="blog-post-meta">
                    <div className="column">
                      <span>by </span>
                      <a href="#">Rokaux</a>
                      <span className="divider" />
                      <a href="#">Jul 24</a>
                    </div>
                    <div className="column">
                      <a href="#">
                        <i className="material-icons favorite_border" />
                        13
                      </a>
                    </div>
                  </div>
                  <h2 className="blog-post-title"><a href="blog/single-post01.html" className="ajax-post-link">Post Article Title</a></h2>
                </div>
                <div className="col-md-offset-1 col-sm-8">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                  <div className="blog-post-meta space-top">
                    <div className="column">
                      <span>in </span>
                      <a href="#">Category name</a>
                      <span className="divider" />
                      <a href="#">#tagname</a>
                    </div>
                    <div className="column">
                      <a href="blog/single-post01.html" className="read-more ajax-post-link">Read More</a>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
              <hr />
              {/* Post */}
              <div className="row padding-top paddin-bottom">
                <div className="col-md-3 col-sm-4">
                  <div className="blog-post-meta">
                    <div className="column">
                      <span>by </span>
                      <a href="#">Admin</a>
                      <span className="divider" />
                      <a href="#">May 09</a>
                    </div>
                    <div className="column">
                      <a href="#">
                        <i className="material-icons favorite_border" />
                        7
                      </a>
                    </div>
                  </div>
                  <h2 className="blog-post-title"><a href="blog/single-post02.html" className="ajax-post-link">Long Post Article Title in Two Lines</a></h2>
                </div>
                <div className="col-md-offset-1 col-sm-8">
                  <img src="img/blog/01.jpg" className="space-bottom" alt="Blog Post" />
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                  <div className="blog-post-meta space-top">
                    <div className="column">
                      <span>in </span>
                      <a href="#">Category name</a>
                      <span className="divider" />
                      <a href="#">#tagname</a>
                    </div>
                    <div className="column">
                      <a href="blog/single-post02.html" className="read-more ajax-post-link">Read More</a>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
              <hr />
              {/* Post */}
              <div className="row padding-top paddin-bottom">
                <div className="col-md-3 col-sm-4">
                  <div className="blog-post-meta">
                    <div className="column">
                      <span>by </span>
                      <a href="#">Rokaux</a>
                      <span className="divider" />
                      <a href="#">Apr 18</a>
                    </div>
                    <div className="column">
                      <a href="#">
                        <i className="material-icons favorite_border" />
                        5
                      </a>
                    </div>
                  </div>
                  <h2 className="blog-post-title"><a href="blog/single-post03.html" className="ajax-post-link">Post Article Title</a></h2>
                </div>
                <div className="col-md-offset-1 col-sm-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <div className="blog-post-meta space-top">
                    <div className="column">
                      <span>in </span>
                      <a href="#">Category name</a>
                      <span className="divider" />
                      <a href="#">#tagname</a>
                    </div>
                    <div className="column">
                      <a href="blog/single-post03.html" className="read-more ajax-post-link">Read More</a>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
              <hr />
              {/* Post */}
              <div className="row padding-top paddin-bottom">
                <div className="col-md-3 col-sm-4">
                  <div className="blog-post-meta">
                    <div className="column">
                      <span>by </span>
                      <a href="#">Admin</a>
                      <span className="divider" />
                      <a href="#">Mar 21</a>
                    </div>
                    <div className="column">
                      <a href="#">
                        <i className="material-icons favorite_border" />
                        17
                      </a>
                    </div>
                  </div>
                  <h2 className="blog-post-title"><a href="blog/single-post04.html" className="ajax-post-link">Post Article Featuring Vimeo Video</a></h2>
                </div>
                <div className="col-md-offset-1 col-sm-8">
                  <div className="embed-responsive embed-responsive-16by9 space-bottom">
                    <iframe src="https://player.vimeo.com/video/130541695?color=77cde3&title=0&byline=0&portrait=0" allowFullScreen />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <div className="blog-post-meta space-top">
                    <div className="column">
                      <span>in </span>
                      <a href="#">Category name</a>
                      <span className="divider" />
                      <a href="#">#tagname</a>
                    </div>
                    <div className="column">
                      <a href="blog/single-post04.html" className="read-more ajax-post-link">Read More</a>
                    </div>
                  </div>
                </div>
              </div>{/* .row */}
              <hr />
              {/* Pagination */}
              <div className="pagination space-bottom-2x">
                <div className="page-numbers">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <span className="active">3</span>
                  <a href="#">4</a>
                  <span>...</span>
                  <a href="#">10</a>
                </div>
                <div className="pager">
                  <a href="#">Prev</a>
                  <span>|</span>
                  <a href="#">Next</a>
                </div>
              </div>
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
    );
  }
});