import React, { Component } from 'react'

export default class OculusTouch extends Component {
  render() {
    return (

      {/* Content should always be inside "article.order-details". Note hidden inputs with "value" equals to product name being ordered and total cost of purchase. */}
      <article className="order-details">
        <div className="order-totals">
          <div className="product-image">
            <img src="ajax/img/order02.jpg" alt="Oculus Touch" />
          </div>
          <div className="order-totals-detail">
            <h2 className="product-title">Oculus Touch</h2>
            <input type="hidden" name="product_name" defaultValue="Oculus Touch" />
            <div className="order-quantity">
              <div className="count-input">
                <a className="incr-btn" data-action="decrease" href="#">–</a>
                <input className="quantity" type="text" defaultValue={1} />
                <a className="incr-btn" data-action="increase" href="#">+</a>
              </div>
              <span>×</span>
              <span className="price">$<i>199.00</i></span>
            </div>
            <h4 className="total-cost"><span className="text-thin">Total costs:</span> $<i>199.00</i></h4>
            <input type="hidden" name="total_cost" defaultValue="$199.00" />
          </div>
        </div>
        <hr />
        <div className="order-form">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-element">
                <input type="text" className="form-control" name="full_name" placeholder="Full Name" required />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-element">
                <input type="text" className="form-control" name="email" placeholder="Email" required />
              </div>
            </div>
          </div>{/* .row */}
          <div className="row">
            <div className="col-sm-6">
              <div className="form-element form-select">
                <select className="form-control" name="country">
                  <option>Country</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>Great Britain</option>
                  <option>Switzerland</option>
                  <option>USA</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-element form-select">
                <select className="form-control" name="city">
                  <option>City</option>
                  <option>Berlin</option>
                  <option>Geneva</option>
                  <option>London</option>
                  <option>New York</option>
                  <option>Sydney</option>
                </select>
              </div>
            </div>
          </div>{/* .row */}
          <div className="row">
            <div className="col-sm-6">
              <div className="form-element">
                <input type="text" className="form-control" name="address" placeholder="Address" required />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-element">
                <input type="text" className="form-control" name="zip" placeholder="Zip Code" required />
              </div>
            </div>
          </div>{/* .row */}
          <div className="form-element">
            <textarea rows={8} className="form-control" name="additional_info" placeholder="Additional Info" defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-pill btn-primary space-top-none waves-effect waves-light">Place Order</button>
        </div>{/* .order-form */}
      </article>{/* .order-details */}
    )
  }
}