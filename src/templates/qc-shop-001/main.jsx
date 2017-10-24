import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend        from 'react-dnd-html5-backend'

/* Framework imports */
import SettingStore from 'quickcommerce-react/stores/SettingStore.jsx'
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
import Products from '../../js/components/Products.jsx'
import Brands from '../../js/components/Brands.jsx'
import Features from '../../js/components/Features.jsx'

/* Site specific imports */
import PagePreloader from '../../js/PagePreloader.jsx'
import Footer from '../../js/Footer.jsx'

import config from '../../config.js'
const settings = SettingStore

SettingActions.setConfig(config)

import { PosComponent } from 'quickcommerce-react/components/PosComponent.jsx'

/* Copied from PosCompoent */
import DragDropContainer from 'quickcommerce-react/components/cart/DragDropContainer.jsx'
import DragDropCartRow from 'quickcommerce-react/components/cart/DragDropCartRow.jsx'
import CartDropTarget from 'quickcommerce-react/components/cart/CartDropTarget.jsx'
import CartDragItem from 'quickcommerce-react/components/cart/CartDragItem.jsx'
import CatalogRow from 'quickcommerce-react/components/catalog/CatalogRow.jsx'
import CategoryRow from '../../js/components/catalog/CategoryRow.jsx'
/* Override */
import ProductRow from '../../js/components/catalog/ProductRow.jsx'
import ProductOptionRow from 'quickcommerce-react/components/catalog/ProductOptionRow.jsx'

import Stepper from 'quickcommerce-react/components/stepper/BrowserStepper.jsx'
import BrowserActions from 'quickcommerce-react/actions/BrowserActions.jsx'
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

import StarMicronicsStore from 'quickcommerce-react/stores/StarMicronicsStore.jsx'
import CheckoutStore from 'quickcommerce-react/stores/CheckoutStore.jsx' // Will need for totals and stuff
import ProductStore from 'quickcommerce-react/stores/ProductStore.jsx'

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
    
    let settings = SettingStore.getSettings().posSettings

   let stepId = 'shop'
    let stepDescriptor = this.stepper.getStepById(stepId) || null

    if (stepDescriptor !== null) {
        // Clear existing selections
        if (this.stepper.getSelection().length > 0) {
            this.stepper.clear()
        }
        
        let data = item
        
        let isEnded = false
        // Execute the step handler
        this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
    }

    settings['pinned_category_id'] = 204
    let categoryId = null
    
    if (typeof this.props.match !== 'undefined' && 
        typeof this.props.match.params !== 'undefined' && 
        typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
        console.log('load category id: ' + this.props.match.params.cat)
        categoryId = parseInt(this.props.match.params.cat)
        this.categoryClicked({
            category_id: categoryId
        })
    } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
        console.log('pinned category, auto select category : ' + settings['pinned_category'])
        this.categoryClicked(null, {
            category_id: settings['pinned_category_id']
        })
    }
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
                
              <div className="category-wrapper container">
                  <h3 className="cursive text-center padding-top">~ By Category ~</h3>
                  <Categories
                    settings = {settings}
                    items = {settings.config.catalog.categories}
                    activeStep = 'shop'
                    title = {this.state.title}
                    displayTitle = {false}
                    displayProductFilter = {false}
                    displayCategoryFilter = {false}
                    displayTextFilter = {false}
                    stepper = {this.stepper}
                    steps = {steps}
                    customRowComponent = {CategoryRow}
                    results = {this.state.data.categories}
                    fluxFactory = {fluxFactory}
                    onItemClicked = {this.categoryClicked}
                    onFilterSelected = {this.categoryFilterSelected}
                    onStepClicked = {this.stepClicked}
                    categories = {settings.config.pages[0].layout.images.categories} />
              </div>
          </section>
          
          {/* Content Wide */}
          {/*<section className="container-fluid main-content">*/}
          {/* Content */}
          <section className="container main-content">
            {/* Featured Categories */}
            <div className="row padding-top product-section">
              <h3 className="cursive text-center padding-top">~ Our Menu ~</h3>
              <Products
                settings = {settings}
                items = {settings.config.catalog.items}
                activeStep = 'cart'
                displayTitle = {false}
                title = {this.state.title}
                displayProductFilter = {false}
                displayCategoryFilter = {true}
                displayTextFilter = {true}
                stepper = {this.stepper}
                steps = {steps}
                customRowComponent = {ProductRow}
                results = {this.state.data.products}
                fluxFactory = {fluxFactory}
                onItemClicked = {this.itemClicked}
                onAddToCartClicked = {this.addToCartClicked}
                onFilterSelected = {this.categoryFilterSelected}
                onStepClicked = {this.stepClicked} />
              
            </div>{/* .row */}

            <GalleryFullwidthWithGap />
            <GalleryFullwidthNoGap />

            <GalleryBoxedWithGap />
            <GalleryBoxedNoGap />
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
            settings = {settings} />
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(QcShop001)