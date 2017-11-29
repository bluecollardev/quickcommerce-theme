import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

export default class Checkout extends Component {        
    render() {
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                {/* Container */}
                <form method="post" className="container padding-top-3x padding-bottom-2x">
                    <h1 className="space-top-half">Checkout</h1>
                    <div className="row padding-top">
                        {/* Checkout Form */}
                        <div className="col-sm-8 padding-bottom">
                          <div className="row">
                            <div className="col-sm-6">
                              <input type="text" className="form-control" name="co_f_name" placeholder="First name" required />
                              <input type="email" className="form-control" name="co_email" placeholder="Email" required />
                              <input type="text" className="form-control" name="co_address1" placeholder="Address 1" required />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control" name="co_l_name" placeholder="Last name" required />
                              <input type="tel" className="form-control" name="co_phone" placeholder="Phone" required />
                              <input type="text" className="form-control" name="co_address2" placeholder="Address 2" />
                            </div>
                          </div>{/* .row */}
                          <input type="text" className="form-control" name="co_company" placeholder="Company" />
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-element form-select">
                                <select className="form-control" name="co_country">
                                  <option value>Country</option>
                                  <option value="australia">Australia</option>
                                  <option value="gb">Great Britain</option>
                                  <option value="poland">Poland</option>
                                  <option value="switzerland">Switzerland</option>
                                  <option value="usa">USA</option>
                                </select>
                              </div>
                              <div className="form-element form-select">
                                <select className="form-control" name="co_city">
                                  <option value>City</option>
                                  <option value="bern">Bern</option>
                                  <option value="london">London</option>
                                  <option value="ny">New York</option>
                                  <option value="warsaw">Warsaw</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-element form-select">
                                <select className="form-control" name="co_state">
                                  <option value>State</option>
                                  <option value={1}>State 1</option>
                                  <option value={2}>State 2</option>
                                  <option value={3}>State 3</option>
                                  <option value={4}>State 4</option>
                                  <option value={5}>State 5</option>
                                </select>
                              </div>
                              <input type="text" className="form-control" name="co_zip" placeholder="ZIP code" required />
                            </div>
                          </div>{/* .row */}
                          <div className="form-group">
                            <label className="radio radio-inline">
                              <input type="radio" name="co_shipping" defaultChecked /> Ship to this address
                            </label>
                            <label className="radio radio-inline">
                              <input type="radio" name="co_shipping" /> Ship to different address
                            </label>
                          </div>{/* .form-group */}
                          <Row>
                            <Col md={12}>
                                <Row>
                                    <CreditCardForm />
                                </Row>
                            </Col>
                          </Row>
                        </div>{/* .col-sm-8 */}
                        {/* Sidebar */}
                        <div className="col-md-3 col-md-offset-1 col-sm-4 padding-bottom">
                          <aside>
                            <h3>Cart total:</h3>
                            <h4>$460.90</h4>
                            <p className="text-sm text-gray">* Note: This amount includes costs for shipping to address you provided.</p>
                            <a href="#/cart" className="btn btn-default btn-ghost icon-left btn-block">
                              {/*<i className="material-icons arrow_back" />*/}
                              Back To Cart
                            </a>
                            <button type="submit" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Checkout</button>
                          </aside>
                        </div>{/* .col-md-3.col-sm-4 */}
                    </div>{/* .row */}
                </form>{/* .container */}
            </main>
        )
    }
}