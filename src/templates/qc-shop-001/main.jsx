/**
 * The actual QuickCommerce app
 */
import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend        from 'react-dnd-html5-backend'

/* Framework imports */
import SettingActions from 'quickcommerce-react/actions/SettingActions.jsx'

/* Generic imports */
import SiteLogo from '../../js/components/SiteLogo.jsx'
import LanguageSwitcher from '../../js/components/LanguageSwitcher.jsx'
import Toolbar from '../../js/components/Toolbar.jsx'
import Hero from '../../js/components/Hero.jsx'
import GalleryFullwidthWithGap from '../../js/components/gallery/GalleryFullwidthWithGap.jsx'
import GalleryFullwidthNoGap from '../../js/components/gallery/GalleryFullwidthNoGap.jsx'
import GalleryBoxedWithGap from '../../js/components/gallery/GalleryBoxedWithGap.jsx'
import GalleryBoxedNoGap from '../../js/components/gallery/GalleryBoxedNoGap.jsx'
import Categories from '../../js/components/Categories.jsx'
import Menu from '../../js/components/Menu.jsx'
import Products from '../../js/components/Products.jsx'
import Brands from '../../js/components/Brands.jsx'
import Features from '../../js/components/Features.jsx'

/* Site specific imports */
import PagePreloader from '../../js/PagePreloader.jsx'
import Footer from '../../js/Footer.jsx'

import { PosComponent } from 'quickcommerce-react/components/PosComponent.jsx'

/* Copied from PosCompoent */
import DragDropContainer from 'quickcommerce-react/components/cart/DragDropContainer.jsx'
import DragDropCartRow from 'quickcommerce-react/components/cart/DragDropCartRow.jsx'
import CartDropTarget from 'quickcommerce-react/components/cart/CartDropTarget.jsx'
import CartDragItem from 'quickcommerce-react/components/cart/CartDragItem.jsx'
import CatalogRow from 'quickcommerce-react/components/catalog/CatalogRow.jsx'
import CategoryRow1x from '../../js/components/catalog/CategoryRow1x.jsx'
import CategoryRow3x from '../../js/components/catalog/CategoryRow3x.jsx'
import CategoryRow4x from '../../js/components/catalog/CategoryRow4x.jsx'
import CategoryRow5x from '../../js/components/catalog/CategoryRow5x.jsx'
/* Override */
import ProductRow from '../../js/components/catalog/ProductRow.jsx'
import ProductRow1x from '../../js/components/catalog/ProductRow1x.jsx'
import TextMenuRow from '../../js/components/catalog/TextMenuRow.jsx'
import TextMenuRow1x from '../../js/components/catalog/TextMenuRow1x.jsx'
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

import Cart from 'quickcommerce-react/modules/Cart.jsx'
import InternalCartStore from 'quickcommerce-react/modules/CartStore.jsx'

// Dirty global hack to maintain store instance until I refactor 
// this component to use context or switch from flux to redux
window.CartStore = (typeof window.CartStore === 'undefined') ? InternalCartStore : window.CartStore

let CartStore = window.CartStore

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

import config from '../../config.js'
const settings = SettingStore

SettingActions.setConfig(config)

@inject(deps => ({
    authService: deps.authService,
    customerService: deps.customerService,
    checkoutService: deps.checkoutService,
    loginStore: deps.loginStore,
    userStore: deps.userStore,
    customerStore: deps.customerStore,
    checkoutStore: deps.checkoutStore,
    starMicronicsStore: deps.starMicronicsStore,
    productStore: deps.productStore,
    settingStore: deps.settingStore
}))
@observer
export class QcShop001 extends PosComponent {
  componentDidMount() {
    /*let orderButton = document.getElementById('cart-button')
    console.log('order button')
    console.log(orderButton)
    
    orderButton.addEventListener('click', (e) => {
        e.preventDefault()
        
        let scrollDuration = 666
        let scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep)
            } else clearInterval(scrollInterval)
        }, 15)
        
        this.setState({
            cart: 1
        })
    })*/
    
    this.setState({
        showLogin: (typeof this.props.loggedIn !== 'undefined' && this.props.loggedIn === true) ? true : false,
        cart: (typeof this.props.location !== 'undefined' && this.props.location.pathname === '/checkout/cart') ? 1 : 0
    })
    
    // Store our stepper instance
    // Stepper maintains its own state and store
    this.stepper.setSteps(this.configureSteps())
    this.stepper.start()
    
    let settings = SettingStore.getSettings().posSettings

    settings['pinned_category_id'] = 9 // 'New' category
    let categoryId = null
    
    this.menuCategoryBrowser.actions.loadCategories() // Browser load categories via refs
    this.topCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
    
    if (typeof this.props.match !== 'undefined' && 
        typeof this.props.match.params !== 'undefined' && 
        typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
        console.log('load category id: ' + this.props.match.params.cat)
        categoryId = parseInt(this.props.match.params.cat)
    } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
        categoryId = parseInt(settings['pinned_category_id'])
    } else {
        //categoryId = null
        categoryId = 9
    }
    
    // Just load browser products, don't trigger any steps
    this.menuProductBrowser.actions.loadProducts(categoryId)
    
    // Just load browser products, don't trigger any steps
    this.menuDrinksBrowser.actions.loadProducts(11) // Drinks TODO: Make this configurable
  }
  
  configureSteps() {
    // An array of step functions
    return [{
        config: assign({}, CategoryStep, {
            stepId: 'shop',
            indicator: '1',
            title: 'Choose Category'
        }),
        before: (stepId, step) => {
            console.log('load category step...')
            return true
        },
        action: (step, data, done) => {
            this.menuCategoryBrowser.actions.loadCategories()

            if (done) {
                // Process checkout if done
                this.onComplete()
            }
        },
        validate: (stepId, stepDescriptor, data) => {
            console.log('validating current step: ' + stepId)
            console.log(data)
            
            let categoryId = data['category_id'] || null
            
            if (categoryId === null) {
                alert('Please select a category to continue')
                return false
            }
            
            return true
        }
    },
    {
        config: assign({}, ProductStep, {
            stepId: 'cart',
            indicator: '2',
            title: 'Choose Product'
        }),
        before: (stepId, step) => {
            console.log('load product step...')
            return true
        },
        action: (step, data, done) => {
            data = data || null                
            if (data !== null &&
                data.hasOwnProperty('category_id') &&
                !Number.isNaN(data.category_id)) {

                this.menuProductBrowser.actions.loadProducts(data.category_id) // TODO: CONST for prop name?
            } else {
                this.menuProductBrowser.actions.loadProducts()
            }

            if (done) {
                // Process checkout if done
                this.onComplete()
            }
        },
        validate: (stepId, stepDescriptor, data) => {
            console.log('validating current step: ' + stepId)
            console.log(data)
            
            let productId = data['id'] || null
            
            if (productId === null) {
                alert('Please select a product to continue')
                return false
            }
            
            return true
        }
    },
    {
        config: assign({}, ProductOptionStep, {
            stepId: 'options',
            indicator: '3',
            title: 'Customize Product'
        }),
        before: (stepId, step) => {
            console.log('load option step...')
            return true
        },
        action: (step, data, done) => {
            data = data || null
            // Store the selection
            
            if (data !== null &&
                data.hasOwnProperty('id') &&
                !Number.isNaN(data.id)) {

                this.optionBrowser.actions.loadOptions(data) // TODO: CONST for prop name?
            } else {
                // Do nothing - options only correlate to a browser item
                // TODO: This is being triggered when clicking a browser item, but there's no data object...
            }

            if (done) {
                // Process checkout if done
                this.onComplete()
            }
        },
        validate: (stepId, stepDescriptor, data) => {
            console.log('validating current step: ' + stepId)
            console.log(data)
            
            return true
        }
    },
    /*{
        config: {
            stepId: 'checkout',
            indicator: '4',
            title: 'Review Your Order'
        },
        // 'action' must be defined, even if empty
        action: (step, data, done) => {
        }
    },*/
    /*{
        config: {
            stepId: 'confirm',
            indicator: '5',
            title: 'Confirm Order'
        },
        // 'action' must be defined, even if empty
        action: (step, data, done) => {
        }
    }*/]
  }
  
  categoryClicked(e, item) {
    e.preventDefault()
    e.stopPropagation()
    
    //let stepId = 'cart'
    //let stepDescriptor = this.stepper.getStepById(stepId) || null
    
    console.log(item);
    // Just load browser products, don't trigger any steps
    this.menuProductBrowser.actions.loadProducts(item['category_id'])
  }
  
  itemClicked(e, item) {
    e.preventDefault()
    e.stopPropagation()
    
    // If the Quick Add button was clicked
    if (e.target.type === 'button') {
        this.addToCartClicked(e, item)
        
        return
    }
    
    /*let stepId = 'options'
    let stepDescriptor = this.stepper.getStepById(stepId) || null

    if (stepDescriptor !== null) {
        let data = item
        
        let isEnded = false
        // Execute the step handler
        this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
        this.stepper.addItem(item.id, 1, item)
    }*/
  }
  
  render() {
    let steps = this.stepper.getSteps() // Stepper extends store, we're good

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
    }
    
    return (
      <div>
        <div className="parallax-element left condiment condiment-chili"></div>
        <div className="parallax-element left herb green-onions-1"></div>
        <div className="parallax-element right condiment condiment-cilantro"></div>
        <div className="parallax-element left condiment condiment-lime"></div>
        <div className="parallax-element right herb green-onions-2"></div>    
        {/*<div className="parallax-element right condiment condiment-onion"></div>*/}
        {/* Page Preloading */}
        {/* Modernizr */}
        {/* Body */}
        <PagePreloader 
            settings = {settings} />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            <SiteLogo 
                settings = {settings} />
            {/*<LanguageSwitcher 
                settings = {settings} />*/}
            <Toolbar 
                settings = {settings}
                cart = {settings.config.cart} />
          </header>{/* .navbar.navbar-sticky */}
          
          <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
              <Hero
                settings = {settings}
                slides = {settings.config.pages[0].layout.images.heroSlides}
                />
                
              <div className="category-wrapper container-fluid">
                <div className="container">
                  <h3 className="cursive text-center padding-top">~ By Category ~</h3>
                  <Categories
                    ref = {(browser) => this.topCategoryBrowser = browser}
                    settings = {settings}
                    activeStep = 'shop'
                    title = {this.state.title}
                    displayTitle = {false}
                    displayProductFilter = {false}
                    displayCategoryFilter = {false}
                    displayTextFilter = {false}
                    stepper = {this.stepper}
                    steps = {steps}
                    customRowComponent = {CategoryRow4x}
                    results = {this.state.items}
                    resultsPerPage = {4}
                    maxResults = {4}
                    fluxFactory = {fluxFactory}
                    onItemClicked = {this.categoryClicked}
                    onFilterSelected = {this.categoryFilterSelected}
                    onStepClicked = {this.stepClicked}
                    />
                </div>
              </div>
          </section>
          
          {/* Content Wide */}
          {/*<section className="container-fluid main-content">*/}
          {/* Content */}
          <section className="container main-content">
            <div className="parallax-element herb basil"></div>
            {/* Featured Categories */}
            <div className="row padding-top product-section">
              <h3 className="cursive text-center padding-top">~ Our Menu ~</h3>
              <Categories
                ref = {(browser) => this.menuCategoryBrowser = browser}
                settings = {settings}
                //items = {settings.config.catalog.categories}
                activeStep = 'shop'
                title = {this.state.title}
                showPager = {false}
                resultsPerPage = {15}
                maxResults = {5}
                displayTitle = {false}
                displayProductFilter = {false}
                displayCategoryFilter = {false}
                displayTextFilter = {false}
                stepper = {this.stepper}
                steps = {steps}
                customRowComponent = {CategoryRow5x}
                fluxFactory = {fluxFactory}
                onItemClicked = {this.categoryClicked}
                onFilterSelected = {this.categoryFilterSelected}
                onStepClicked = {this.stepClicked}
                //categories = {settings.config.pages[0].layout.images.categories} 
                />
              <div className="col-lg-8 col-md-7">
                <Menu
                    ref = {(browser) => this.menuProductBrowser = browser}
                    settings = {settings}
                    //items = {settings.config.catalog.items}
                    activeStep = 'cart'
                    displayTitle = {false}
                    title = {this.state.title}
                    showPager = {true}
                    resultsPerPage = {24}
                    displayCategoryFilter = {false}
                    displayTextFilter = {false}
                    stepper = {this.stepper}
                    steps = {steps}
                    customRowComponent = {TextMenuRow}
                    fluxFactory = {fluxFactory}
                    onItemClicked = {this.itemClicked}
                    onAddToCartClicked = {this.addToCartClicked}
                    onFilterSelected = {this.categoryFilterSelected}
                    onStepClicked = {this.stepClicked}>
                    {/*<Products
                        settings = {settings}
                        //items = {settings.config.catalog.items}
                        activeStep = 'cart'
                        displayTitle = {false}
                        title = {this.state.title}
                        showPager = {false}
                        displayProductFilter = {false}
                        displayCategoryFilter = {false}
                        displayTextFilter = {false}
                        stepper = {this.stepper}
                        steps = {steps}
                        resultsPerPage = {3}
                        customRowComponent = {ProductRow}
                        fluxFactory = {fluxFactory}
                        onItemClicked = {this.itemClicked}
                        onAddToCartClicked = {this.addToCartClicked}
                        onFilterSelected = {this.categoryFilterSelected}
                        onStepClicked = {this.stepClicked} />*/}
                    <hr />
                </Menu>
              </div>
              <div className="col-lg-4 col-md-5">
                {/*<div className="info-box text-center padding-top-3x">
                    <h2>Special Offer<br /><span className="text-danger">-30%</span></h2>
                    <a href="shop-single.html" className="inline">
                    <img src="img/shop/special-offer.jpg" alt="Special Offer" />
                    </a>
                    <h3 className="lead text-normal space-bottom-half"><a href="shop-single.html" className="link-title">FLOS Outdoor Lightning</a></h3>
                    <span className="lead text-normal text-gray text-crossed">$800.00</span>
                    <span className="h4 text-normal text-danger">$560.00</span>
                    <div className="countdown space-top-half padding-top" data-date-time="07/30/2017 12:00:00">
                    <div className="item">
                      <div className="days">00</div>
                      <span className="days_ref">Days</span>
                    </div>
                    <div className="item">
                      <div className="hours">00</div>
                      <span className="hours_ref">Hours</span>
                    </div>
                    <div className="item">
                      <div className="minutes">00</div>
                      <span className="minutes_ref">Mins</span>
                    </div>
                    <div className="item">
                      <div className="seconds">00</div>
                      <span className="seconds_ref">Secs</span>
                    </div>
                    </div>
                </div>*/}
                <div className="padding-top-2x visible-xs" />
                <h5 className="cursive text-center padding-top">~ Drinks ~</h5>
                <div className="padding-bottom-2x visible-xs" />
                <Products
                    ref = {(browser) => this.menuDrinksBrowser = browser}
                    settings = {settings}
                    //items = {settings.config.catalog.items}
                    activeStep = 'cart'
                    displayTitle = {false}
                    title = {this.state.title}
                    showPager = {false}
                    displayProductFilter = {false}
                    displayCategoryFilter = {false}
                    displayTextFilter = {false}
                    stepper = {this.stepper}
                    steps = {steps}
                    resultsPerPage = {15}
                    customRowComponent = {TextMenuRow1x}
                    fluxFactory = {fluxFactory}
                    onItemClicked = {this.itemClicked}
                    onAddToCartClicked = {this.addToCartClicked}
                    onFilterSelected = {this.categoryFilterSelected}
                onStepClicked = {this.stepClicked} />
                <div className="padding-bottom-2x visible-xs" />
              </div>
            </div>{/* .row */}

            {/*<GalleryFullwidthWithGap />
            <GalleryFullwidthNoGap />

            <GalleryBoxedWithGap />
            <GalleryBoxedNoGap />*/}
          </section>{/* .container-fluid */}
          {/*<Brands 
          settings = {settings} />*/}
          
          {/*<div className="fw-section space-top-2x padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className="container padding-top-3x padding-bottom-3x text-center">
              <div className="space-top-3x space-bottom">
                
                <a href="https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0" className="video-popup-btn">
                  <i className="material-icons play_arrow" />
                </a>
              </div>
              <p className="space-bottom-2x">Quick Commerce - your reliable partner.</p>
            </div>
          </div>*/}
          
          
          
          {/*<Features 
          settings = {settings} />*/}
          <Footer 
            settings = {settings}>
            <div className="parallax-element bottom herb left cilantro"></div>
            <div className="parallax-element bottom herb right mint"></div>
          </Footer>
          <div className="parallax-element fixed bottom right takeout-menu"></div>  
        </div>{/* .page-wrapper */}
        <div className="copyright"><p className="copyright">© 2017 Phobulous. Made with <i className="text-danger material-icons favorite" /> by Firebrand Web Solutions.</p></div>
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
        </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(QcShop001)