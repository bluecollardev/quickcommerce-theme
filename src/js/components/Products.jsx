import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <ul className="nav-tabs text-center" role="tablist">
                  <li className="active"><a href="#pho" role="tab" data-toggle="tab">Noodle Soups</a></li>
                  <li><a href="#bun" role="tab" data-toggle="tab">Noodle Bowls</a></li>
                  <li><a href="#rice" role="tab" data-toggle="tab">Rice Dishes</a></li>
                  <li><a href="#appetizers" role="tab" data-toggle="tab">Appetizers</a></li>
                </ul>
                
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane transition fade scale in active" id="pho">
                    <div className="row space-top-half">
                    {this.props.items && this.props.items instanceof Array && this.props.items.map((item, idx) => (
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src={item.image} alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Order Now</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">{item.name}</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$19.00</span>
                              $15.00
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                  
                  <div role="tabpanel" className="tab-pane transition fade scale" id="bun">
                    <div className="row space-top-half">
                    {this.props.items && this.props.items instanceof Array && this.props.items.map((item, idx) => (
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src={item.image} alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Order Now</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">{item.name}</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$19.00</span>
                              $15.00
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                  
                  <div role="tabpanel" className="tab-pane transition fade scale" id="rice">
                    <div className="row space-top-half">
                    {this.props.items && this.props.items instanceof Array && this.props.items.map((item, idx) => (
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src={item.image} alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Order Now</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">{item.name}</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$19.00</span>
                              $15.00
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                  
                  <div role="tabpanel" className="tab-pane transition fade scale" id="appetizers">
                    <div className="row space-top-half">
                    {this.props.items && this.props.items instanceof Array && this.props.items.map((item, idx) => (
                      <div className="col-lg-3 col-sm-6">
                        <div className="shop-item">
                          <div className="shop-thumbnail">
                            <span className="shop-label text-danger">Sale</span>
                            <a href="shop-single.html" className="item-link" />
                            <img src={item.image} alt="Shop item" />
                            <div className="shop-item-tools">
                              <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <i className="material-icons favorite_border" />
                              </a>
                              <a href="#" className="add-to-cart">
                                <em>Order Now</em>
                                <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                                  <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="shop-item-details">
                            <h3 className="shop-item-title"><a href="shop-single.html">{item.name}</a></h3>
                            <span className="shop-item-price">
                              <span className="old-price">$19.00</span>
                              $15.00
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}