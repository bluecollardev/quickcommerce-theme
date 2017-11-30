/**
 * The actual QuickCommerce app
 */
import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'

import HTML5Backend from 'react-dnd-html5-backend' /* Gfx */
import { TimelineLite } from 'gsap' // Facade for GSAP parallax containers and effects
import { Parallax, ParallaxContainer } from 'react-gsap-parallax' // Facade for GSAP parallax containers and effects

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
import HomePage from '../../js/components/Home.jsx'
import RegisterPage from '../../js/components/Register.jsx'
import AccountPage from '../../js/components/Account.jsx'
import CartPage from '../../js/components/Cart.jsx'
import CheckoutPage from '../../js/components/Checkout.jsx'
import CatalogPage from '../../js/components/Catalog.jsx'
import ProductPage from '../../js/components/Product.jsx'
import AboutPage from 'quickcommerce-react/components/shop/About.jsx'
import ContactPage from 'quickcommerce-react/components/shop/Contact.jsx'
import GalleryPage from '../../js/components/Gallery.jsx'
import Footer from '../../js/Footer.jsx'

import PosContext from 'quickcommerce-react/modules/pos/PosContext.jsx'
import CartContext from 'quickcommerce-react/modules/cart/CartContext.jsx'

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
/* Override */
import ProductRow from '../../js/components/catalog/ProductRow.jsx'
import ProductRow1x from '../../js/components/catalog/ProductRow1x.jsx'
import TextMenuRow from 'quickcommerce-react/components/catalog/TextMenuRow.jsx'
import TextMenuRow1x from 'quickcommerce-react/components/catalog/TextMenuRow1x.jsx'
import ProductOptionRow from 'quickcommerce-react/components/catalog/ProductOptionRow.jsx'

import Stepper from 'quickcommerce-react/components/stepper/BrowserStepper.jsx'
//import BrowserActions from 'quickcommerce-react/actions/BrowserActions.jsx'
import BrowserStore from 'quickcommerce-react/stores/BrowserStore.jsx'

import CheckoutActions from 'quickcommerce-react/actions/CheckoutActions.jsx'
import CheckoutService from 'quickcommerce-react/services/CheckoutService.jsx'

import CustomerActions from 'quickcommerce-react/actions/CustomerActions.jsx'
import CustomerService from 'quickcommerce-react/services/CustomerService.jsx'

import ProductActions from 'quickcommerce-react/actions/ProductActions.jsx'
import ProductBrowser from 'quickcommerce-react/components/browser/ProductBrowser.jsx'
import BrowserMenu from 'quickcommerce-react/components/browser/BrowserMenu.jsx'

import CustomerPicker from 'quickcommerce-react/components/customer/CustomerPicker.jsx'
import SignInForm from 'quickcommerce-react/components/account/SignInForm.jsx'
import CreditCardForm from 'quickcommerce-react/components/payment/CreditCardForm.jsx'
import CustomerProfile from 'quickcommerce-react/components/customer/AuthenticatedCustomerProfile.jsx'

import Keypad from 'quickcommerce-react/components/common/Keypad.jsx'
import Notes from 'quickcommerce-react/components/common/Notes.jsx'

import CartStore from 'quickcommerce-react/modules/cart/CartStore.jsx'

import { bubble as MainMenu, fallDown as CustomerMenu } from 'react-burger-menu'

import StringHelper from 'quickcommerce-react/helpers/String.js'
import ArrayHelper from 'quickcommerce-react/helpers/Array.js'
import JSONHelper from 'quickcommerce-react/helpers/JSON.js'
import UrlHelper from 'quickcommerce-react/helpers/URL.js'

let categories = [] // Empty init containers
let products = [] // Empty init containers

import ProductDetail from 'quickcommerce-react/components/catalog/ProductDetail.jsx'

@inject(deps => ({
    config: deps.config,
    steps: deps.steps,
    homepageSteps: deps.homepageSteps,
    instagramFeed: deps.instagramFeed,
    actions: deps.actions,
	authService: deps.authService,
	customerService: deps.customerService,
    checkoutService: deps.checkoutService,
    settingService: deps.authService,
	loginStore: deps.loginStore,
    userStore: deps.userStore,
    customerStore: deps.customerStore,
    catalogStore: deps.catalogStore,
    checkoutStore: deps.checkoutStore,
    starMicronicsStore: deps.starMicronicsStore,
    productStore: deps.productStore,
	settingStore: deps.settingStore,
	mappings: deps.mappings, // Per component or global scope?
	translations: deps.translations, // i8ln transations
	roles: deps.roles, // App level roles, general authenticated user (not customer!)
	userRoles: deps.userRoles, // Shortcut or implement via HoC?
	user: deps.user // Shortcut or implement via HoC?
}))
@observer
class QcShop003 extends Component {
    constructor(props) {
        super(props)
        
        console.log('CONFIG')
        console.log(props.config)
        props.actions.setting.setConfig(props.config)
        
        props.cartStore.on('change', () => {
            this.forceUpdate() // TODO: This is a bit much! Temporary...
        })
    }
    
    render() {
        /*let steps = this.stepper.getSteps() // Stepper extends store, we're good

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
        if (CheckoutStore.payload.orderTotals instanceof Array && CheckoutStore.payload.orderTotals.length > 0) {
            let orderTotalValue = parseFloat(CheckoutStore.getTotal().value)
            if (!isNaN(orderTotalValue)) {
                orderTotal = orderTotalValue.toFixed(2) 
            }
        }*/
        
        let logo = (this.props.settingStore.config.hasOwnProperty('settings')) ? this.props.settingStore.config.settings.logo : ''
        
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
                <div id="background">
                    <div id="clouds"></div>
                </div>
                <div id="world"></div>
                
                {/*<button id="menu-trigger">Start your flight</button>*/}
                
                <div id="options" style={{visibility: 'hidden'}}>
                    <a href="#" id="closeBtn" className="button" >X</a>
                    <div id="optionsContent">
                        <p>Move the <b>mouse to rotate</b> around and <b>mouse wheel to zoom</b> in and out. Hit <b>space to generate</b> a new cloud. Works on <b>Firefox</b> (faster if Nightly), <b>Chrome</b> and <b>Safari</b>.</p>
                        <div className="actions" >
                            <a className="button" href="#" id="generateBtn" >Generate clouds</a> <a className="button" href="#" id="showTextureControlsBtn" >Show texture controls</a> <a className="button" href="#" id="fullscreenBtn" >Fullscreen</a>
                        </div>
                        <div id="textureControls" >
                            <h2>Texture list</h2>
                            <p>Select one or more textures to create clouds. The more the merrier!</p>
                            <ul id="textureList" >
                            </ul>
                        </div>
                        <h2>Presets</h2>
                        <div className="presets" >
                            <a href="#" className="left button" id="cloudsPreset" >Clouds</a> | 
                            <a href="#" className="middle button" id="stormPreset" >Storm</a> | 
                            <a href="#" className="middle button" id="boomPreset" >Boom</a> | 
                            <a href="#" className="right button" id="bayPreset" >Michael Bay</a>
                        </div>
                    </div>
                </div>
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    {/* Navbar */}
                    <header className="navbar">
                    {/* Navbar Header */}
                    <div className="navbar-header">
                      <SiteLogo 
                        image = {logo} />
                      {/*<br />*/}
                      {/*<LanguageSwitcher 
                      settings = {this.props.settingStore} />*/}
                      {/* Mobile Menu Toggle */}
                      <a href="#" className="mobile-menu-toggle"><i className="material-icons menu" /></a>
                    </div>{/* .navbar-header */}
                    {/* Mobile Menu Wrapper */}
                    <div className="mobile-menu-wrapper">
                      {/* Toolbar */}
                      <div className="toolbar">
                        <a href="#/account"><i className="material-icons person" /></a>
                        <div className="cart-btn">
                          <a href="#/cart">
                            <i>
                              <span className="material-icons shopping_basket" />
                              <span className="count">{this.props.cartStore.getCount()}</span>
                            </i>
                          </a>
                        </div>{/* .cart-btn */}
                        <a href="#/" className="subscribe-btn"><i className="material-icons mail_outline" /></a>
                      </div>{/* .toolbar */}
                      {/* Main Navigation */}
                      <nav className="main-navigation">
                        <ul className="menu">
                          {/*<li className="menu-item-has-children current-menu-item">*/}
                          <li className="menu-item current-menu-item">
                            <a href="#/">Home</a>
                            {/*<ul className="sub-menu">
                              <li className="current-menu-item"><a href="index.html">Home Version 1</a></li>
                              <li><a href="home-v2.html">Home Version 2</a></li>
                              <li><a href="home-v3.html">Home Version 3</a></li>
                            </ul>*/}
                          </li>
                          {/*<li className="menu-item-has-children">*/}
                          <li className="menu-item">
                            <a href="#/shop">ACE Shop</a>
                            {/*<ul className="sub-menu">
                              <li><a href="shop-sidebar-left.html">Shop Sidebar Left</a></li>
                              <li><a href="shop-sidebar-right.html">Shop Sidebar Right</a></li>
                              <li><a href="shop-filters-top.html">Shop Filters Top</a></li>
                              <li><a href="shop-single.html">Single Product</a></li>
                              <li><a href="shopping-cart.html">Shopping Cart</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="login.html">Login / Register Page</a></li>
                              <li><a href="account.html">User Account Page</a></li>
                            </ul>*/}
                          </li>
                          {/*<li><a href="blog.html">Blog</a></li>*/}
                          {/*<li className="menu-item-has-children">*/}
                          <li className="menu-item">
                            <a href="#/gallery">Instagram</a>
                            {/*<ul className="sub-menu">
                              <li><a href="#/gallery">Gallery With Gap</a></li>
                              <li><a href="#/gallery">Gallery No Gap</a></li>
                            </ul>*/}
                          </li>
                          <li><a href="#/about">About Us</a></li>
                          <li><a href="#/contact">Contact</a></li>
                          {/*<li><a href="faq.html">FAQ</a></li>
                          <li><a href="elements.html">Elements</a></li>*/}
                        </ul>{/* .menu */}
                      </nav>{/* .main-navigation */}
                    </div>{/* .mobile-menu-wrapper */}
                    </header>{/* .navbar */}
                    {/* Hero Slider */}
                    {/* Data API:
                    data-loop="true/false" enable/disable looping
                    data-autoplay="true/false" enable/disable carousel autoplay
                    data-interval="3000" autoplay interval timeout in miliseconds
                    Simply add necessary data attribute to the ".hero-carousel" with appropriate value to adjust carousel functionality.
                    */}

                    <HashRouter>
                        <div className='react-app-wrapper'>
                            <Switch>
                                <Route 
                                    exact 
                                    path='/' 
                                    render={() => {
                                        return (
                                            <HomePage 
                                                {...this.props}
                                                stepper = {this.props.stepper}
                                                configureSteps = {this.props.componentConfigureSteps}
                                                categoryFilterSelected = {this.categoryFilterSelected}
                                                categoryClicked = {this.categoryClicked}
                                                itemClicked = {this.itemClicked}
                                                addToCartMode = 'instant'
                                                stepClicked = {this.stepClicked}
                                                />
                                            )
                                    }} />
                                <Route 
                                    path='/filters' 
                                    render={() => {
                                        return (
                                            <CatalogPage 
                                                {...this.props}
                                                stepper = {this.props.stepper}
                                                configureSteps = {this.props.componentConfigureSteps}
                                                categoryFilterSelected = {this.categoryFilterSelected}
                                                categoryClicked = {this.categoryClicked}
                                                itemClicked = {this.itemClicked}
                                                addToCartMode = 'instant'
                                                stepClicked = {this.stepClicked}
                                                />
                                            )
                                    }} />
                                <Route 
                                    path='/shop' 
                                    render={() => {
                                        return (
                                            <CatalogPage 
                                                {...this.props}
                                                stepper = {this.props.stepper}
                                                configureSteps = {this.props.componentConfigureSteps}
                                                categoryFilterSelected = {this.categoryFilterSelected}
                                                categoryClicked = {this.categoryClicked}
                                                itemClicked = {this.itemClicked}
                                                addToCartMode = 'instant'
                                                stepClicked = {this.stepClicked}
                                                />
                                            )
                                    }} />
                                <Route 
                                    path='/product' 
                                    render={() => {
                                        return (
                                            <ProductPage 
                                                {...this.props}
                                                stepper = {this.props.stepper}
                                                configureSteps = {this.props.componentConfigureSteps}
                                                categoryFilterSelected = {this.categoryFilterSelected}
                                                categoryClicked = {this.categoryClicked}
                                                itemClicked = {this.itemClicked}
                                                addToCartMode = 'instant'
                                                stepClicked = {this.stepClicked}
                                                />
                                            )
                                    }} />
                                <Route 
                                    path='/about' 
                                    render={() => <AboutPage {...this.props} /> } />
                                <Route 
                                    path='/register' 
                                    render={() => <RegisterPage {...this.props} /> } />
                                <Route 
                                    path='/account' 
                                    render={() => <AccountPage {...this.props} /> } />
                                <Route 
                                    path='/orders' 
                                    render={() => <AccountPage {...this.props} /> } />
                                <Route 
                                    path='/wishlist' 
                                    render={() => <AccountPage {...this.props} /> } />
                                <Route 
                                    path='/gallery' 
                                    render={() => {
                                        return (
                                            <GalleryPage dataSource={this.props.instagramFeed} {...this.props} />
                                        )
                                    }} />
                            </Switch>
                            <Route path='/contact' render={() => <ContactPage {...this.props} /> } />
                            <Route path='/cart' 
                                render = {() => {
                                    return (
                                        <CartPage  
                                            shoppingCart = {(cart) => this.cart = cart}
                                            {...this.props}
                                            />
                                    )
                                }}
                            />
                            <Route path='/checkout' render={() => <CheckoutPage {...this.props} /> } />
                        </div>
                    </HashRouter>
                </div>{/* .page-wrapper */}
                
                <div className='footer-wrapper'>
                    <Footer
                        settings = {this.props.settingStore}>
                    </Footer>
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
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(PosContext(CartContext(QcShop003)))