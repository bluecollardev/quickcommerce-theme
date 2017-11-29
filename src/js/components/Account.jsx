import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend from 'react-dnd-html5-backend'

import { Alert, Table, Grid, Col, Row, Thumbnail, Modal, Accordion, Panel, HelpBlock } from 'react-bootstrap'
import { Tabs, Tab, TabContent, TabContainer, TabPanes } from 'react-bootstrap'
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Button, Checkbox, Radio } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'

/* Generic imports */
import SiteLogo from 'quickcommerce-react/components/common/SiteLogo.jsx'
import LanguageSwitcher from 'quickcommerce-react/components/common/LanguageSwitcher.jsx'
import Toolbar from 'quickcommerce-react/components/common/Toolbar.jsx'
import Hero from 'quickcommerce-react/components/shop/Hero.jsx'
import GalleryFullwidthWithGap from 'quickcommerce-react/components/gallery/GalleryFullwidthWithGap.jsx'
import GalleryFullwidthNoGap from 'quickcommerce-react/components/gallery/GalleryFullwidthNoGap.jsx'
import GalleryBoxedWithGap from 'quickcommerce-react/components/gallery/GalleryBoxedWithGap.jsx'
import GalleryBoxedNoGap from 'quickcommerce-react/components/gallery/GalleryBoxedNoGap.jsx'
import Categories from 'quickcommerce-react/components/shop/Categories.jsx'
import Menu from 'quickcommerce-react/components/shop/Menu.jsx'
import Products from 'quickcommerce-react/components/shop/Products.jsx'
import Brands from 'quickcommerce-react/components/shop/Brands.jsx'
import Features from 'quickcommerce-react/components/shop/Features.jsx'

/* Site specific imports */
import PagePreloader from 'quickcommerce-react/components/common/PagePreloader.jsx'
import Footer from '../../js/Footer.jsx'
//import MainContent from '../../js/components/Product.jsx'
import MainContent from '../../js/components/Home.jsx'

/* Copied from PosCompoent */
import DragDropContainer from 'quickcommerce-react/components/cart/DragDropContainer.jsx'
import DragDropCartRow from 'quickcommerce-react/components/cart/DragDropCartRow.jsx'
import CartDropTarget from 'quickcommerce-react/components/cart/CartDropTarget.jsx'
import CartDragItem from 'quickcommerce-react/components/cart/CartDragItem.jsx'
import CatalogRow from 'quickcommerce-react/components/catalog/CatalogRow.jsx'
import CategoryRow1x from 'quickcommerce-react/components/catalog/CategoryRow1x.jsx'
import CategoryRow3x from 'quickcommerce-react/components/catalog/CategoryRow3x.jsx'
import CategoryRow4x from 'quickcommerce-react/components/catalog/CategoryRow4x.jsx'
import CategoryRow5x from 'quickcommerce-react/components/catalog/CategoryRow5x.jsx'
import CategoryRow6x from 'quickcommerce-react/components/catalog/CategoryRow6x.jsx'

/* Override */
import ProductRow from '../../js/components/catalog/ProductRow.jsx'
import ProductRow1x from '../../js/components/catalog/ProductRow1x.jsx'
import TextMenuRow from 'quickcommerce-react/components/catalog/TextMenuRow.jsx'
import TextMenuRow1x from 'quickcommerce-react/components/catalog/TextMenuRow1x.jsx'
import ProductOptionRow from 'quickcommerce-react/components/catalog/ProductOptionRow.jsx'

import CustomerActions from 'quickcommerce-react/actions/CustomerActions.jsx'
import CustomerService from 'quickcommerce-react/services/CustomerService.jsx'

import BrowserMenu from 'quickcommerce-react/components/browser/BrowserMenu.jsx'

import CustomerPicker from 'quickcommerce-react/components/customer/CustomerPicker.jsx'
import SignInForm from 'quickcommerce-react/components/account/SignInForm.jsx'
import CreditCardForm from 'quickcommerce-react/components/payment/CreditCardForm.jsx'
import CustomerProfile from 'quickcommerce-react/components/customer/AuthenticatedCustomerFullProfile.jsx'

import { bubble as MainMenu, fallDown as CustomerMenu } from 'react-burger-menu'

import Factory from 'quickcommerce-react/factory/Factory.jsx'

import StringHelper from 'quickcommerce-react/helpers/String.js'
import ArrayHelper from 'quickcommerce-react/helpers/Array.js'
import JSONHelper from 'quickcommerce-react/helpers/JSON.js'
import UrlHelper from 'quickcommerce-react/helpers/URL.js'

let fluxFactory = new Factory()

let categories = [] // Empty init containers
let products = [] // Empty init containers

// Pre-configured step types
import CategoryStep from 'quickcommerce-react/steps/Category.jsx'
import ProductStep from 'quickcommerce-react/steps/Product.jsx'
import ProductOptionStep from 'quickcommerce-react/steps/ProductOption.jsx'

import ProductDetail from 'quickcommerce-react/components/catalog/ProductDetail.jsx'
import QcAccountComponent from 'quickcommerce-react/components/AccountComponent.jsx'

// TODO: Qc Lib is f****d after refactoring, this needs to eventually extend AccountComponent
export default class Account extends Component {    
    constructor(props) {
        super(props)
        
        this.doLogin = this.doLogin.bind(this)
        this.doLogout = this.doLogout.bind(this)
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLoginError = this.onLoginError.bind(this)
        this.onCreateSuccess = this.onCreateSuccess.bind(this)
    }
    
    componentWillMount() {
        /*if (this.props.location.pathname === '/account/edit' && !this.props.loggedIn) {
            window.location.hash = '/account/login'
        }
        
        if (this.props.location.pathname === '/account/register' && this.props.loggedIn) {
            window.location.hash = '/account/edit'
        }*/
    }
    
    componentWillUpdate() {
        /*if (this.props.location.pathname === '/account/edit' && !this.props.loggedIn) {
            window.location.hash = '/account/login'
        }
        
        if (this.props.location.pathname === '/account/register' && this.props.loggedIn) {
            window.location.hash = '/account/edit'
        }*/
    }
	
	doLogin(formData, onSuccess, onError) {		
		this.props.authService.login(
			formData['account'], 
			formData['password'], 
			onSuccess,
			onError
		).catch(function(err) {
			console.log('Error logging in', err)
		})
	}
	
	doLogout() {
		try {
            this.props.authService.logout()
        } catch (err) {
            console.log('Error logging out', err)
        }
        
        window.location.hash = '/account/login'
	}
    
    // TODO: Can I move these next group of methods up a level to AuthenticatedComponent?
    onLoginSuccess(response) {
        let actions = this.props.actions
        
        // TODO: Check return - is it response or data object?
        if (response.success || response.status === 200) {
            if (response.hasOwnProperty('data') && response.data.hasOwnProperty('data')) {
                // TODO: This is still using legacy API
                let data = response.data.data                
                
                // Account -> User role
                actions.user.setUser(data)
                // Account -> Customer role
                this.props.customerService.setCustomer(data) 
                
                window.location.hash = '/'
            }
        }
    }
    
    onLoginError() {
        window.location.hash = '/account/login'
    }
    
    onCreateSuccess(response) {
        /*this.props.authService.fetchAccount(data => {
            this.props.actions.login.loginUser(response.data)
            this.props.actions.user.setUser(response.data)
            CustomerService.setCustomer(response.data)
            
            this.onLoginSuccess()
        })*/
    }
    render() {        
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                {/* Featured Image */}
                    {/* TODO: Optional via prop */}
                {/*<div className="featured-image" style={{backgroundImage: 'url(img/featured-image/account.jpg)'}} />*/}
                {/* Content */}
                <section className="container padding-top-3x padding-bottom-2x">
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
                            <li><a href="#wishlist" role="tab" data-toggle="tab">
                                <i className="material-icons favorite" />
                                Wishlist (6)
                              </a></li>
                          </ul>{/* .nav-tabs */}
                          {/* Tab Panes */}
                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane transition fade scale in active" id="profile">
                                <div className='section_wrapper mcb-section-inner'>
                                    <div className='wrap mcb-wrap one valign-top clearfix'>
                                        <div className='mcb-wrap-inner'>
                                            <div className='column mcb-column two-third column_column'
                                                style = {{
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    float: 'none'
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/*<div className='section_wrapper mcb-section-inner full-width-inputs'>
                                    <div className='wrap mcb-wrap one valign-top clearfix'>
                                        <div className='mcb-wrap-inner'>
                                            <div className='column mcb-column one-fourth column_column'
                                                style = {{
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    marginTop: '3rem',
                                                    marginBottom: '2.5rem',
                                                    float: 'none'
                                                }}>
                                                <div className='column_attr clearfix align_center'>
                                                    {!this.props.loggedIn && (
                                                    <SignInForm 
                                                        onLoginSuccess = {this.onLoginSuccess}
                                                        onCreate = {() => {window.location.hash = '/account/register'}}
                                                        />
                                                    )}
                                                    
                                                    {this.props.loggedIn && (
                                                    <SignInForm 
                                                        user = {this.props.customer}
                                                        onLoginSuccess = {this.onLoginSuccess}
                                                        onCreate = {() => {window.location.hash = '/account/register'}}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}

                                {/*<Row>
                                    <CustomerProfile
                                        customer = {this.props.customer}
                                        billingAddress = {this.props.billingAddress}
                                        shippingAddress = {this.props.shippingAddress}
                                        editAccount = {false}
                                        createAccount = {true}
                                        displayProfile = {true}
                                        displayCurrentAddress = {true}
                                        displayBillingAddress = {true}
                                        displayShippingAddress = {true}
                                        onCreateSuccess = {this.onCreateSuccess}
                                        onCancel = {() => {window.location.hash = '/account/login'}}>
                                    </CustomerProfile>
                                </Row>*/}

                                <Row>
                                    <CustomerProfile
                                        customer = {this.props.customer}
                                        billingAddress = {this.props.billingAddress}
                                        shippingAddress = {this.props.shippingAddress}
                                        editAccount = {true}
                                        createAccount = {false}
                                        displayProfile = {true}
                                        displayCurrentAddress = {true}
                                        displayBillingAddress = {true}
                                        displayShippingAddress = {true}
                                        onCreateSuccess = {this.onCreateSuccess}
                                        onCancel = {() => {window.location.hash = '/'}}>
                                    </CustomerProfile>
                                </Row>
                                
                                <form method="post">
                                {/*<div className="row">
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
                                </div>*/}
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
                            <div role="tabpanel" className="tab-pane transition fade scale" id="wishlist">
                              <div className="row">
                                {/* Item */}
                                <div className="col-md-4 col-sm-6">
                                  <div className="shop-item">
                                    <div className="shop-thumbnail">
                                      <a href="shop-single.html" className="item-link" />
                                      <img src="img/shop/th02.jpg" alt="Shop item" />
                                      <div className="shop-item-tools">
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                                        <a href="#" className="add-to-wishlist" data-toggle="tooltip" title="Remove from wishlist">
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
                            </div>{/* .tab-pane#wishlist */}
                          </div>{/* .tab-content */}
                        </div>{/* .col-sm-8 */}
                        {/* Sidebar */}
                        <div className="col-sm-3 padding-bottom-2x padding-top-3x">
                          <aside className="mobile-center customer-reward-points">
                            <h3>Your reward points:</h3>
                            <h3><span className="text-semibold">1356</span> <span className="h5">points</span></h3>
                            <p className="text-sm text-gray">You can spend these points on products from our shop catalog!</p>
                            <a href="shop-sidebar-left.html" className="btn btn-default btn-ghost icon-left btn-block">
                            {/*<i className="material-icons arrow_back" />*/}
                              Go to Shop
                            </a>
                            <a href="#" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Get more points</a>
                          </aside>
                        </div>{/* .col-sm-4 */}
                    </div>{/* .row */}
                </section>{/* .container */}
            </main>
        )
    }
}