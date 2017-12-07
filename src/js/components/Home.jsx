import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend from 'react-dnd-html5-backend'

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
import VimeoVideo from '../../js/components/video/VimeoVideo.jsx'
import MainContent from '../../js/components/Home.jsx'

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
import CategoryRow6x from 'quickcommerce-react/components/catalog/CategoryRow6x.jsx'

/* Override */
import ProductRow from './catalog/ProductRow.jsx'
import ProductRow1x from './catalog/ProductRow1x.jsx'
import ProductRow4x from './catalog/ProductRow4x.jsx'
import TextMenuRow from 'quickcommerce-react/components/catalog/TextMenuRow.jsx'
import TextMenuRow1x from 'quickcommerce-react/components/catalog/TextMenuRow1x.jsx'
import ProductOptionRow from 'quickcommerce-react/components/catalog/ProductOptionRow.jsx'

import Stepper from 'quickcommerce-react/components/stepper/BrowserStepper.jsx'
//import BrowserActions from 'quickcommerce-react/actions/BrowserActions.jsx'
import BrowserStore from 'quickcommerce-react/stores/BrowserStore.jsx'

import CheckoutActions from 'quickcommerce-react/actions/CheckoutActions.jsx'

import CustomerActions from 'quickcommerce-react/actions/CustomerActions.jsx'

import ProductActions from 'quickcommerce-react/actions/ProductActions.jsx'
import ProductBrowser from 'quickcommerce-react/components/browser/ProductBrowser.jsx'
import BrowserMenu from 'quickcommerce-react/components/browser/BrowserMenu.jsx'

import CustomerPicker from 'quickcommerce-react/components/customer/CustomerPicker.jsx'
import SignInForm from 'quickcommerce-react/components/account/SignInForm.jsx'
import CreditCardForm from 'quickcommerce-react/components/payment/CreditCardForm.jsx'
import CustomerProfile from 'quickcommerce-react/components/customer/AuthenticatedCustomerProfile.jsx'

import Keypad from 'quickcommerce-react/components/common/Keypad.jsx'
import Notes from 'quickcommerce-react/components/common/Notes.jsx'

import StringHelper from 'quickcommerce-react/helpers/String.js'
import ArrayHelper from 'quickcommerce-react/helpers/Array.js'
import JSONHelper from 'quickcommerce-react/helpers/JSON.js'
import UrlHelper from 'quickcommerce-react/helpers/URL.js'

let categories = [] // Empty init containers
let products = [] // Empty init containers

// Pre-configured step types
import CategoryStep from 'quickcommerce-react/steps/Category.jsx'
import ProductStep from 'quickcommerce-react/steps/Product.jsx'
import ProductOptionStep from 'quickcommerce-react/steps/ProductOption.jsx'

import ProductDetail from 'quickcommerce-react/components/catalog/ProductDetail.jsx'

class Home extends Component {   
    constructor(props) {
        super(props)
        
        this.configureSteps = this.configureSteps.bind(this)
        this.setStep = this.setStep.bind(this)
        this.categoryClicked = this.categoryClicked.bind(this)
        this.itemClicked = this.itemClicked.bind(this)
        this.optionClicked = this.optionClicked.bind(this)
        this.itemDropped = this.itemDropped.bind(this)
        this.stepClicked = this.stepClicked.bind(this)
        
        // Store our stepper instance
        // Stepper maintains its own state and store
        this.stepper = new Stepper()
        this.stepper.setSteps(this.configureSteps())
        
        this.state = {
            blockUi: false,
            chooseQuantity: false,
            settings: {}
        }
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

        settings['pinned_category_id'] = 204 // 'New' category
        let categoryId = null
        
        if (typeof this.topCategoryBrowser !== 'undefined') {
            console.log('TOP CATEGORY BROWSER')
            console.log(this.topCategoryBrowser)
            this.topCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
        }
        
        /*if (typeof this.props.match !== 'undefined' && 
            typeof this.props.match.params !== 'undefined' && 
            typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
            console.log('load category id: ' + this.props.match.params.cat)
            categoryId = parseInt(this.props.match.params.cat)
        } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
            categoryId = parseInt(settings['pinned_category_id'])
        } else {
            //categoryId = null
            categoryId = 204
        }*/
        
        // Just load browser products, don't trigger any steps
        this.currentlyRoastingBrowser.actions.loadProducts(230)
        this.newArrivalsBrowser.actions.loadProducts(232)
        this.specialRoastsBrowser.actions.loadProducts(233)
    }
    
    configureSteps() {
        let steps = [{
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
                //this.topCategoryBrowser.actions.loadCategories()

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
                        
                    this.currentlyRoastingBrowser.actions.loadProducts(data.categoryId)
                    this.specialRoastsBrowser.actions.loadProducts(data.categoryId)
                    this.newArrivalsBrowser.actions.loadProducts(data.categoryId)
                } else {
                    this.currentlyRoastingBrowser.actions.loadProducts()
                    this.specialRoastsBrowser.actions.loadProducts()
                    this.newArrivalsBrowser.actions.loadProducts()
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
        
        return steps
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
        if (this.steps instanceof Array) {            
        // Maybe I'll change this later...
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
        this.currentlyRoastingBrowser.actions.loadProducts(item['category_id'])
        this.specialRoastsBrowser.actions.loadProducts(item['category_id'])
        this.newArrivalsBrowser.actions.loadProducts(item['category_id'])
    }
  
    itemClicked(e, item) {
        // Home Page itemClicked
        e.preventDefault()
        e.stopPropagation()
        
        // If the Quick Add button was clicked
        if (e.target.type === 'button') {
            this.addToCartClicked(e, item)
            
            return
        }
        
        this.props.actions.product.setProduct(item)
        
        // TODO: Leave this in as log if debug mode
        console.log('opening product page for item:')
        console.log(item)
        window.location.hash = '#/product/' + item['product_id'] + '/' + item['name'] // TODO: Use mappings! And use websafe/SEO URL (currently unavailable)
        
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
        //let cart = this.props.getCart()
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
    
    render() {
        let steps = this.stepper.getSteps() // Stepper extends store, we're good
        
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
                    <Hero
                        settings = {this.props.settingStore}
                        slides = {this.props.settingStore.config.pages[0].layout.images.heroSlides}
                        loop = {false}
                        />
                </section>
                <section className="container main-content padding-top-3x padding-bottom">
                    {/* Move this out into a custom module */}
                    <div className='section_wrapper mcb-section-inner'>
                        <div className='wrap mcb-wrap one valign-top clearfix'>
                            <div className='mcb-wrap-inner'>
                                <div className='column mcb-column one-fourth column_icon_box'>
                                    <div className='icon_box icon_position_top no_border'>
                                        <a className='load-checkout' href='#/shop/category/204'>
                                            <div className='icon_wrapper'>
                                                <div className='icon'>
                                                    <i className='icon-cup-line'></i>
                                                </div>
                                            </div>
                                            <div className='desc_wrapper'>
                                                <i className='cursive'><span className='title'>Coffee</span></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='column mcb-column one-fourth column_icon_box'>
                                    <div className='icon_box icon_position_top no_border'>
                                        <a className='load-checkout' href='#/shop/category/223'>
                                            <div className='icon_wrapper'>
                                                <div className='icon'>
                                                    <i className='icon-t-shirt-line'></i>
                                                </div>
                                            </div>
                                            <div className='desc_wrapper'>
                                                <i className='cursive'><span className='title'>Merchandise</span></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='column mcb-column one-fourth column_icon_box'>
                                    <div className='icon_box icon_position_top no_border'>
                                        <a className='load-checkout' href='#/shop/category/88'>
                                            <div className='icon_wrapper'>
                                                <div className='icon'>
                                                    <i className='icon-tag-line'></i>
                                                </div>
                                            </div>
                                            <div className='desc_wrapper'>
                                                <i className='cursive'><span className='title'>Brewing</span></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='column mcb-column one-fourth column_icon_box'>
                                    <div className='icon_box icon_position_top no_border'>
                                        <a className='load-checkout' href='#/shop/category/224'>
                                            <div className='icon_wrapper'>
                                                <div className='icon'>
                                                    <i className='icon-wallet-line'></i>
                                                </div>
                                            </div>
                                            <div className='desc_wrapper'>
                                                <i className='cursive'><span className='title'>Subscriptions</span></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className='column mcb-column one column_divider column-margin-40px'>
                                    <hr className='no_line'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Featured Categories */}
                    {/*<h3 className="text-center padding-top">Categories</h3>
                    <div className="row padding-top padding-bottom-3x">
                        <Categories
                            ref = {(browser) => this.topCategoryBrowser = browser}
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
                            customRowComponent = {CatalogRow}
                            onItemClicked = {this.categoryClicked}
                            onFilterSelected = {this.categoryFilterSelected}
                            onStepClicked = {this.stepClicked}
                            //categories = {settings.config.pages[0].layout.images.categories} 
                            />
                    </div>*/}
                    <div className="row padding-top">
                        {/* Products */}
                        <div className="col-sm-12">
                          {/* Nav Tabs */}
                          <ul className="nav-tabs text-center" role="tablist">
                            <li className="active"><a href="#newcomers" role="tab" data-toggle="tab">Currently Roasting</a></li>
                            <li><a href="#toprated" role="tab" data-toggle="tab">New Arrivals + On Sale</a></li>
                            <li><a href="#onsale" role="tab" data-toggle="tab">Special / Seasonal Roasts (Pre-Order)</a></li>
                          </ul>{/* .nav-tabs */}
                          {/* Tab Panes */}
                          <div className="tab-content">
                            {/* #newcomers */}
                            <div role="tabpanel" className="tab-pane transition fade scale in active" id="newcomers">
                              <div className="row space-top-half">
                                <Products
                                    ref = {(browser) => this.currentlyRoastingBrowser = browser}
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
                                    resultsPerPage = {8}
                                    customRowComponent = {ProductRow4x}
                                    onItemClicked = {this.itemClicked}
                                    onAddToCartClicked = {this.props.addToCartClicked}
                                    onFilterSelected = {this.categoryFilterSelected}
                                    onStepClicked = {this.stepClicked} 
                                    />
                              </div>{/* .row */}
                            </div>{/* .tab-pane#newcomers */}
                            {/* #toprated */}
                            <div role="tabpanel" className="tab-pane transition fade scale" id="toprated">
                              <div className="row">
                                <Products
                                    ref = {(browser) => this.newArrivalsBrowser = browser}
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
                                    resultsPerPage = {12}
                                    customRowComponent = {ProductRow4x}
                                    onItemClicked = {this.itemClicked}
                                    onAddToCartClicked = {this.props.addToCartClicked}
                                    onFilterSelected = {this.categoryFilterSelected}
                                    onStepClicked = {this.stepClicked} 
                                    />
                              </div>{/* .row */}
                            </div>{/* .tab-pane#toprated */}
                            {/* #onsale */}
                            <div role="tabpanel" className="tab-pane transition fade scale" id="onsale">
                              <div className="row">
                                <Products
                                    ref = {(browser) => this.specialRoastsBrowser = browser}
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
                                    resultsPerPage = {4}
                                    customRowComponent = {ProductRow4x}
                                    onItemClicked = {this.itemClicked}
                                    onAddToCartClicked = {this.props.addToCartClicked}
                                    onFilterSelected = {this.categoryFilterSelected}
                                    onStepClicked = {this.stepClicked} 
                                    />
                              </div>{/* .row */}
                            </div>{/* .tab-pane#onsale */}
                          </div>{/* .tab-content */}
                        </div>{/* .col-lg-9.col-md-8 */}
                    </div>
                </section>
                
                {/*<Brands 
                settings = {this.props.settingStore} />*/}
                {/* Video Popup */}
                <VimeoVideo />
                <Features 
                    settings = {this.props.settingStore} />
            </main>
        )
    }
}

export default CartContext(Home)