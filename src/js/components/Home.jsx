import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend        from 'react-dnd-html5-backend'

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

import { PosComponent } from 'quickcommerce-react/components/PosComponent.jsx'

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
import ProductRow from 'quickcommerce-react/components/catalog/ProductRow.jsx'
import ProductRow1x from 'quickcommerce-react/components/catalog/ProductRow1x.jsx'
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

import ProductDetail from 'quickcommerce-react/components/catalog/ProductDetail.jsx'

export default class Home extends Component {    
    constructor(props) {
        super(props)
        
        this.configureSteps = this.configureSteps.bind(this)
        this.setStep = this.setStep.bind(this)
        this.categoryClicked = this.categoryClicked.bind(this)
        this.itemClicked = this.itemClicked.bind(this)
        this.addToCartClicked = this.addToCartClicked.bind(this)
        this.optionClicked = this.optionClicked.bind(this)
        this.itemDropped = this.itemDropped.bind(this)
        this.stepClicked = this.stepClicked.bind(this)
        
        // Store our stepper instance
        // Stepper maintains its own state and store
        this.stepper = new Stepper()
    }
    
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
        
        let settings = this.props.settingStore.getSettings().posSettings

        settings['pinned_category_id'] = 9 // 'New' category
        let categoryId = null
        
        this.menuCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
        //this.topCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
        
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
        this.menuExtrasBrowser.actions.loadProducts(10) // Extras TODO: Make this configurable
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
    
    setStep(stepId, stepDescriptor, data) {
        data = data || null
        let title = (data !== null && data.hasOwnProperty('name')) ? data.name : ''
        let price = (data !== null && data.hasOwnProperty('price') && !isNaN(data.price)) ? Number(data.price).toFixed(2) : 0.00
        
        this.setState({ 
            step: stepId,
            title: title,
            itemPrice: price,
            item: data
        })
    }
    
    stepClicked(stepProps) {
        // Get the BrowserStepDescriptor instance by stepId (shop|cart|checkout|etc).
        // We can't get it by index because the Step argument for this method is the config prop
        // provided to the Step component, not an instance of BrowserStepDescriptor.
        // Maybe I'll change this later...
        if (this.stepper.getSteps() instanceof Array) {            
            let stepDescriptor = this.stepper.getStepById(stepProps.stepId) || null

            if (stepDescriptor !== null) {
                let data = {}
                let isEnded = false
                // Execute the step handler
                this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepProps.stepId))
                
            }
        }
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
        
        window.location.hash = '#/product'
        
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
    
    itemDropped(item) {
        //let cart = (typeof this.refs.cart.getDecoratedComponentInstance === 'function') ? this.refs.cart.getDecoratedComponentInstance() : this.refs.cart
    }
    
    optionClicked(item) {
        // TODO: Check what type of options etc... I have written code for this just need to port it over from the previous app
        /*let stepId = 'checkout'
        let stepDescriptor = this.stepper.getStepById(stepId) } || null

        if (typeof stepDescriptor !== null) {
            let data = item
            
            let isEnded = false
            // Execute the step handler
            this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
        }*/
        
        console.log('option clicked')
        console.log(item)
        
        let product = this.state.item

        this.stepper.addOption(item['product_option_value_id'], 1, item, product)
        this.forceUpdate() // Redraw, options have changed
    }
    
    categoryFilterSelected(categoryId, e) {
        categoryId = (!Number.isNaN(parseInt(categoryId))) ? parseInt(categoryId) : null // Ensure conversion

        let stepId = 'cart'
        let stepDescriptor = this.stepper.getStepById(stepId) || null

        if (stepDescriptor !== null) {
            let data = {
                category_id: categoryId
            }

            let isEnded = false
            // Execute the step handler
            this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
        }
    }
    
    addToCart(e) {
        e.preventDefault()
        e.stopPropagation()
        
        let quantity = 0
        
        if (this.state.chooseQuantity) {
            // If the keypad popup modal is open, use its value
            quantity = parseFloat(this.popupKeypad.getForm().value)
        } else {
            quantity = parseFloat(this.keypad.getForm().value)
        }
        
        if (!isNaN(quantity) && quantity > 0) {
            let cart = (typeof this.refs.cart.getDecoratedComponentInstance === 'function') ? this.refs.cart.getDecoratedComponentInstance() : this.refs.cart
            let item = this.stepper.getItem(0) // Hardcoded to zero indexed item, should be fine because we explicitly clear the stepper selection
            
            //alert('Adding ' + quantity + 'x ' + item.data.name + '(s) to the order.')
            cart.addItem(item.id, quantity, item)
            this.keypad.component.clear()
            
            this.stepper.start()
            
            let settings = this.props.settingStore.getSettings().posSettings
            if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
                console.log('pinned category, auto select category : ' + settings['pinned_category'])
                this.categoryClicked(null, {
                    category_id: settings['pinned_category_id']
                })
            } else {
                this.setStep('shop')
            }
        } else {
            alert('Please enter the desired quantity.')
        }
    }
    
    quickAddToCart(e) {
        this.addToCart(e) // Add to cart
        this.popupKeypad.component.clear()
        
        // Close quantity keypad popup modal
        this.setState({
            chooseQuantity: false
        })
    }
    
    addToCartClicked(e, item) {
        e.preventDefault()
        e.stopPropagation()
        
        /*let stepId = 'options'
        let stepDescriptor = this.stepper.getStepById(stepId) || null

        if (stepDescriptor !== null) {
            let data = item
            
            let isEnded = false
            // Execute the step handler
            this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
            this.stepper.addItem(item.id, 1, item)
        }*/
        
        this.stepper.addItem(item.id, 0, item) // Don't set a quantity just register the item
        
        this.setState({
            chooseQuantity: true
        })
    }
    
    render() {
        let steps = this.stepper.getSteps() // Stepper extends store, we're good
        
        return (
            <section className="container main-content">
                {/* Featured Categories */}
                <div className="row product-section">
                  
                  <div className="col-md-10 col-md-push-1">
                    <h3 className="cursive text-center padding-top hidden-xs">~ Our Menu ~</h3>
                    <Categories
                        ref = {(browser) => this.menuCategoryBrowser = browser}
                        settings = {this.props.settingStore}
                        //items = {settings.config.catalog.categories}
                        activeStep = 'shop'
                        title = {this.props.title}
                        showPager = {false}
                        resultsPerPage = {8}
                        maxResults = {8}
                        displayTitle = {false}
                        displayProductFilter = {false}
                        displayCategoryFilter = {false}
                        displayTextFilter = {false}
                        stepper = {this.stepper}
                        steps = {steps}
                        customRowComponent = {CategoryRow4x}
                        fluxFactory = {fluxFactory}
                        onItemClicked = {this.categoryClicked}
                        onFilterSelected = {this.categoryFilterSelected}
                        onStepClicked = {this.stepClicked}
                        //categories = {settings.config.pages[0].layout.images.categories} 
                        />
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <Menu
                        ref = {(browser) => this.menuProductBrowser = browser}
                        settings = {this.props.settingStore}
                        //items = {settings.config.catalog.items}
                        activeStep = 'cart'
                        displayTitle = {false}
                        title = {this.props.title}
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
                        <hr />
                        <Products
                            ref = {(browser) => this.menuExtrasBrowser = browser}
                            settings = {this.props.settingStore}
                            //items = {settings.config.catalog.items}
                            activeStep = 'cart'
                            displayTitle = {false}
                            title = {this.props.title}
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
                    </Menu>
                  </div>
                  <div className="col-lg-4 col-md-5">
                    {/*<div className="info-box text-center padding-top-3x">
                        <h2>Special Offer<br /><span className="text-danger">-30%</span></h2>
                        <a href="#/product" className="inline">
                        <img src="img/shop/special-offer.jpg" alt="Special Offer" />
                        </a>
                        <h3 className="lead text-normal space-bottom-half"><a href="#/product" className="link-title">FLOS Outdoor Lightning</a></h3>
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
                        settings = {this.props.settingStore}
                        //items = {settings.config.catalog.items}
                        activeStep = 'cart'
                        displayTitle = {false}
                        title = {this.props.title}
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
                  {/*<Products
                    ref = {(browser) => this.menuExtrasBrowser = browser}
                    settings = {this.props.settingStore}
                    //items = {settings.config.catalog.items}
                    activeStep = 'cart'
                    displayTitle = {false}
                    title = {this.props.title}
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
                  onStepClicked = {this.stepClicked} />*/}
                </div>

                {/*<GalleryFullwidthWithGap />
                <GalleryFullwidthNoGap />

                <GalleryBoxedWithGap />
                <GalleryBoxedNoGap />*/}
            </section>
        )
    }
}