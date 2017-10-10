import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="col-lg-9 col-md-8">
                
                <ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#newcomers" role="tab" data-toggle="tab">New Arrivals</a></li>
                  <li><a href="#toprated" role="tab" data-toggle="tab">Top Rated</a></li>
                  <li><a href="#onsale" role="tab" data-toggle="tab">On Sale</a></li>
                </ul>
                
                <div className="tab-content">
                  
                  <div role="tabpanel" className="tab-pane transition fade scale in active" id="newcomers">
                    <div className="row space-top-half">
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th04.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                    </div>
                    <div className="row">
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div role="tabpanel" className="tab-pane transition fade scale" id="toprated">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th10.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_half" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th11.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                            <img src="img/shop/th12.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Desktop Light</a></h3>
                            <span className="shop-item-price">
                              $245.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
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
                            <img src="img/shop/th13.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
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
                            <img src="img/shop/th15.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="item-rating text-warning">
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star" />
                              <i className="material-icons star_border" />
                              <i className="material-icons star_border" />
                            </span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th16.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div role="tabpanel" className="tab-pane transition fade scale" id="onsale">
                    <div className="row">
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th06.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">LED Lighting</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$155.00</span>
                              $130.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th04.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">Alarm Clock</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$225.00</span>
                              $178.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="#" className="item-link" />
                            <img src="img/shop/th08.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="#">Hook Basket</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$180.00</span>
                              $112.35
                            </span>
                          </div>
                        </div>
                      </div>
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
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
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
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th07.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$122.00</span>
                              $99.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th09.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$160.00</span>
                              $118.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src="img/shop/th02.jpg" alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Add to Cart</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$199.00</span>
                              $125.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}