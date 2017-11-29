import assign from 'object-assign'

import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Tabs, Tab, TabContent, TabContainer, TabPanes } from 'react-bootstrap'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Button, Checkbox, Radio } from 'react-bootstrap'

import DragDropCartTable from './cart/DragDropCartTable.jsx'
import DragDropCartRow from './cart/DragDropCartRow.jsx'
import CartDropTarget from './cart/CartDropTarget.jsx'
import CartDragItem from './cart/CartDragItem.jsx'

import Keypad from 'quickcommerce-react/components/common/Keypad.jsx'

import StringHelper from 'quickcommerce-react/helpers/String.js'
import ArrayHelper from 'quickcommerce-react/helpers/Array.js'
import ObjectHelper from 'quickcommerce-react/helpers/Object.js'
import JSONHelper from 'quickcommerce-react/helpers/JSON.js'
import UrlHelper from 'quickcommerce-react/helpers/URL.js'

import { CartComponent as QcCart } from 'quickcommerce-react/modules/cart/CartComponent.jsx'

class ShoppingCart extends QcCart.wrappedComponent {
    render() {
        let props = this.props
        
        let options = false
        // TODO: This is wrong, should be checking ID or something
        if (this.state.hasOwnProperty('product') && this.state.product !== null && this.state.product.hasOwnProperty('price')) {
            let price = (parseFloat(this.state.product.price)).toFixed(2)
            if (typeof this.state.product.options !== 'undefined' && 
            this.state.product.options instanceof Array && 
            this.state.product.options.length > 0) {
               options = this.state.product.options
            }
        }
        
        let orderTotal = 0.00
        if (this.props.checkoutStore.payload.orderTotals instanceof Array && this.props.checkoutStore.payload.orderTotals.length > 0) {
            let orderTotalValue = parseFloat(this.props.checkoutStore.getTotal().value)
            if (!isNaN(orderTotalValue)) {
                orderTotal = orderTotalValue.toFixed(2) 
            }
        }
        
        const containerComponent = this.props.containerComponent || DragDropCartTable
        const rowComponent = this.props.rowComponent || DragDropCartRow
        
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                {/* Container */}
                <section className="container padding-top-3x padding-bottom">
                  <h1 className="space-top-half">Shopping Cart</h1>
                  <div className="row padding-top">
                    {/* Cart */}
                    <div className="col-sm-8 padding-bottom-2x">
                        <p className="text-sm">
                        <span className="text-gray">Currently</span> 3 items
                        <span className="text-gray"> in cart</span>
                        </p>
                        <div className="shopping-cart">
                        <div className="item">
                          <a href="shop-single.html" className="item-thumb">
                            <img src="img/cart/item01.jpg" alt="Item" />
                          </a>
                          <div className="item-details">
                            <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                            <h4 className="item-price">$85.90</h4>
                            <div className="count-input">
                              <a className="incr-btn" data-action="decrease" href="#">–</a>
                              <input className="quantity" type="text" defaultValue={1} />
                              <a className="incr-btn" data-action="increase" href="#">+</a>
                            </div>
                          </div>
                          <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                            <i className="material-icons remove_shopping_cart" />
                          </a>
                        </div>{/* .item */}
                        {/* Item */}
                        <div className="item">
                          <a href="shop-single.html" className="item-thumb">
                            <img src="img/cart/item02.jpg" alt="Item" />
                          </a>
                          <div className="item-details">
                            <h3 className="item-title"><a href="shop-single.html">Resin Storage Box</a></h3>
                            <h4 className="item-price">$38.00</h4>
                            <div className="count-input">
                              <a className="incr-btn" data-action="decrease" href="#">–</a>
                              <input className="quantity" type="text" defaultValue={2} />
                              <a className="incr-btn" data-action="increase" href="#">+</a>
                            </div>
                          </div>
                          <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                            <i className="material-icons remove_shopping_cart" />
                          </a>
                        </div>{/* .item */}
                        {/* Item */}
                        <div className="item">
                          <a href="shop-single.html" className="item-thumb">
                            <img src="img/cart/item03.jpg" alt="Item" />
                          </a>
                          <div className="item-details">
                            <h3 className="item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                            <h4 className="item-price">$299.00</h4>
                            <div className="count-input">
                              <a className="incr-btn" data-action="decrease" href="#">–</a>
                              <input className="quantity" type="text" defaultValue={1} />
                              <a className="incr-btn" data-action="increase" href="#">+</a>
                            </div>
                          </div>
                          <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                            <i className="material-icons remove_shopping_cart" />
                          </a>
                        </div>{/* .item */}
                        <QcCart
                            ref = {props.shoppingCart} 
                            containerComponent = {containerComponent}
                            rowComponent = {rowComponent}
                            />
                        </div>{/* .shopping-cart */}
                        {/* Coupon */}
                        <div className>
                        <p className="text-gray text-sm">Have discount coupon?</p>
                        <form method="post" className="row">
                          <div className="col-md-8 col-sm-7">
                            <div className="form-element">
                              <input type="text" className="form-control" placeholder="Enter coupon" required />
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-5">
                            <button type="submit" className="btn btn-default btn-ghost btn-block space-top-none space-bottom">Apply Coupon</button>
                          </div>
                        </form>
                        </div>
                    </div>{/* .col-sm-8 */}
                    {/* Sidebar */}
                    <div className="col-md-3 col-md-offset-1 col-sm-4 padding-bottom-2x">
                      <aside>
                        <h3 className="toolbar-title">Cart subtotal:</h3>
                        <h4 className="amount">$460.90</h4>
                        <p className="text-sm text-gray">* Note: This amount does not include costs for international shipping. You will be able to calculate shipping costs on checkout.</p>
                        <a href="#/" className="btn btn-default btn-block waves-effect waves-light">Update Cart</a>
                        <a href="#/checkout" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Checkout</a>
                      </aside>
                    </div>{/* .col-md-3.col-sm-4 */}
                  </div>{/* .row */}
                </section>{/* .container */}
            </main>
        )
    }
    
}

export default ShoppingCart