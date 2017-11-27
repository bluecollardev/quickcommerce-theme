/**
 * The actual QuickCommerce app
 */
import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { DragDropContext } from 'react-dnd'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HTML5Backend        from 'react-dnd-html5-backend'

/* Gfx */
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
import ProductPage from 'quickcommerce-react/components/shop/Product.jsx'
import AboutPage from 'quickcommerce-react/components/shop/About.jsx'
import ContactPage from 'quickcommerce-react/components/shop/Contact.jsx'
import GalleryPage from '../../js/components/Gallery.jsx'
import Footer from '../../js/Footer.jsx'

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

import config from '../../config.js'
//import instagramStore from '../../config.js'
import instagramFeed from '../../instagram-feed.json'

@inject(deps => ({
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
export class QcShop003 extends PosComponent.wrappedComponent {
    constructor(props) {
        super(props)
        console.log(config)
        props.actions.setting.setConfig(config)

        this.configureSteps = this.configureSteps.bind(this)
        this.setStep = this.setStep.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.quickAddToCart = this.quickAddToCart.bind(this)
        this.onComplete = this.onComplete.bind(this)
        this.updateNotes = this.updateNotes.bind(this)
        this.updatePaymentMethod = this.updatePaymentMethod.bind(this)
        this.updateShippingMethod = this.updateShippingMethod.bind(this)
        this.continueShopping = this.continueShopping.bind(this)
        this.refresh = this.refresh.bind(this)
        this.showNewCustomerForm = this.showNewCustomerForm.bind(this)
        this.hideNewCustomerForm = this.hideNewCustomerForm.bind(this)
        this.showEditCustomerForm = this.showEditCustomerForm.bind(this)
        this.hideEditCustomerForm = this.hideEditCustomerForm.bind(this)
        this.changeCustomer = this.changeCustomer.bind(this)
        this.showLoginForm = this.showLoginForm.bind(this)
        this.hideLoginForm = this.hideLoginForm.bind(this)
        this.showOrder = this.showOrder.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.showScanModal = this.showScanModal.bind(this)
        this.hideScanModal = this.hideScanModal.bind(this)
        this.showCodeModal = this.showCodeModal.bind(this)
        this.showChargeModal = this.showChargeModal.bind(this)
        this.hideChargeModal = this.hideChargeModal.bind(this)
        this.completeOrder = this.completeOrder.bind(this)
        this.showReceiptModal = this.showReceiptModal.bind(this)
        this.hideReceiptModal = this.hideReceiptModal.bind(this)
        this.debugReceipt = this.debugReceipt.bind(this)
        this.debugOrder = this.debugOrder.bind(this)
        this.printReceipt = this.printReceipt.bind(this)
        this.printOrder = this.printOrder.bind(this)
        this.printReport = this.printReport.bind(this)
        this.showCompleteModal = this.showCompleteModal.bind(this)
        this.hideCompleteModal = this.hideCompleteModal.bind(this)
        this.onSaleComplete = this.onSaleComplete.bind(this)
        this.reset = this.reset.bind(this)
        this.categoryClicked = this.categoryClicked.bind(this)
        this.itemClicked = this.itemClicked.bind(this)
        this.addToCartClicked = this.addToCartClicked.bind(this)
        this.optionClicked = this.optionClicked.bind(this)
        this.itemDropped = this.itemDropped.bind(this)
        this.stepClicked = this.stepClicked.bind(this)
        this.selectPaymentMethod = this.selectPaymentMethod.bind(this)
        this.toggleCustomPaymentAmount = this.toggleCustomPaymentAmount.bind(this)
        this.getChangeAmounts = this.getChangeAmounts.bind(this)
        this.getTotal = this.getTotal.bind(this)
        this.categoryFilterSelected = this.categoryFilterSelected.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
        this.calculateChange = this.calculateChange.bind(this)
        this.selectChangePreset = this.selectChangePreset.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
        this.renderPlainTxtOptions = this.renderPlainTxtOptions.bind(this)
        this.renderCashOptions = this.renderCashOptions.bind(this)
        this.renderPaymentOptions = this.renderPaymentOptions.bind(this)
        this.renderEndOfDayReport = this.renderEndOfDayReport.bind(this)
        this.renderPlainTxtOrder = this.renderPlainTxtOrder.bind(this)
        this.renderPlainTxtReceipt = this.renderPlainTxtReceipt.bind(this)

        this.getDefaultSettings = this.getDefaultSettings.bind(this)

        // Store our stepper instance
        // Stepper maintains its own state and store
        this.stepper = new Stepper()

        this.props.actions.setting.fetchStore(8)

        props.settingStore.on('store-info-loaded', (id, payload) => {
            props.checkoutStore.stores[id] = payload
        }) // Load ACE bar store data so we don't have to later

        this.props.actions.setting.fetchSettings()

        props.settingStore.on('settings-loaded', (payload) => {
            props.checkoutStore.settings = payload

            // We only wanna do this once, so stick 'er right up top
            props.checkoutService.createOrder({
                action: 'insert'
                //orderTaxRates: this.orderTaxRates
            })
        })

        // Subscribe to checkout block ui events
        props.checkoutStore.on('block-ui', () => {
            this.setState({
                blockUi: true
            })
        })

        props.checkoutStore.on('unblock-ui', () => {
            this.setState({
                blockUi: false
            })
        })

        props.checkoutStore.on('set-customer', () => {
            console.log('checkout customer change detected')
            console.log(props.customerStore.customer)
            console.log(props.customerStore.billingAddress)
            console.log(props.customerStore.shippingAddress)

            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()

                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') &&
                    props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {

                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'update',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                        // No orderId detected in the payload order, let's try create instead
                    } else {
                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.createOrder(assign({}, props.checkoutStore.payload.order, {
                            action: 'insert',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                    }
                    // Payload order doesn't exist, we're gonna have to create it
                } else {
                    // TODO: Fix me! I'm hardcoded
                    // Change country and zone to customer default address
                    props.checkoutService.createOrder(assign({}, {
                        action: 'insert',
                        defaultSettings: this.getDefaultSettings()
                    }), (payload) => {
                        props.checkoutStore.setOrder(payload)
                        //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                    })
                }
            }
        })

        props.checkoutStore.on('set-order-status', () => {
            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()

                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {

                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'updateOrderStatus',
                            defaultSettings: this.getDefaultSettings(),
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                        // No orderId detected in the payload order, let's try create instead
                    }
                }
            }
        })

        props.checkoutStore.on('set-payment-method', () => {
            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()

                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {

                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'updatePaymentMethod',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                        // No orderId detected in the payload order, let's try create instead
                    }
                }
            }
        })

        props.checkoutStore.on('set-shipping-method', () => {
            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()

                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {

                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'updateShippingMethod',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                        // No orderId detected in the payload order, let's try create instead
                    }
                }
            }
        })

        props.checkoutStore.on('set-notes', () => {
            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()

                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {

                        // TODO: Fix me! I'm hardcoded
                        // Change country and zone to customer default address
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'updateNotes',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                        // No orderId detected in the payload order, let's try create instead
                    }
                }
            }
        })

        /*props.checkoutStore.on('set-order', () => {
            console.log('checkout change detected')
            console.log(props.customerStore.customer)
            console.log(props.customerStore.billingAddress)
            console.log(props.customerStore.shippingAddress)
            
            if (typeof props.customerStore.customer !== 'undefined' && props.customerStore.customer !== null) {
                // Just handle, customer should be set to props.checkoutStore
                props.checkoutStore.setExistingCustomer()
                
                // Payloard order exists
                if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                    // Do we update?
                    if (props.checkoutStore.payload.order.hasOwnProperty('orderId') && 
                        !isNaN(props.checkoutStore.payload.order.orderId) &&
                        props.checkoutStore.payload.order.orderId > 0) {
                        props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, assign({}, props.checkoutStore.payload.order, {
                            action: 'update',
                            defaultSettings: this.getDefaultSettings()
                        }), (payload) => {
                            props.checkoutStore.setOrder(payload)
                            //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                        })
                    }
                }
            }
        })*/

        // We call this data because it's not a complete item, just a POJO
        CartStore.on('item-added', (itemId, quantity, item) => {
            console.log('item added to order')
            console.log(item)

            // TODO: Move this whole chunk of logic to the CartAction, or a Cart ActionCreator
            if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                    !isNaN(props.checkoutStore.payload.order.orderId)) {
                    let orderProduct = assign({}, item.data, {
                        product_id: parseInt(itemId),
                        quantity: quantity
                    })

                    let optionTotal = 0.00
                    // Get the prices off of the selected options and add them to the product price
                    let orderOptions = props.checkoutStore.getOrderOptions(parseInt(itemId)) || null

                    if (typeof orderOptions !== 'undefined' && orderOptions !== null) {
                        // Not sure if I want to finalize this as an array or an object so I'm accounting for either
                        if (Object.keys(orderOptions).length > 0) {
                            //for (let idx = 0; idx < orderOptions.length; idx++) {
                            for (let key in Object.keys(orderOptions)) {
                                let orderOption = orderOptions[key]

                                // Get the product option value using the selected option's productOptionValueId
                                let productOptionId = Number(orderOption.productOptionId)
                                let productOptionValueId = Number(orderOption.productOptionValueId)

                                let productOptions = item.data['options']
                                let selectedOptions = productOptions.filter(option => {
                                    return Number(option['product_option_id']) === productOptionId
                                })

                                if (selectedOptions instanceof Array && selectedOptions.length > 0) {
                                    let selectedOption = selectedOptions[0]
                                    // TODO: Make this method static
                                    let optionPrice = CartStore.getOptionPrice(item.data, selectedOption, productOptionValueId)
                                    optionTotal += (!isNaN(optionPrice)) ? Number(optionPrice) : 0
                                }
                            }
                        }
                    }

                    let orderProductPrice = parseFloat(item.data['price']) + optionTotal

                    let orderTaxRates = props.checkoutStore.getOrderTaxRates()

                    let lineTotal = orderProductPrice * quantity
                    let lineTotalWithTax = props.checkoutStore.calculateWithTaxes(lineTotal, item.data['tax_class_id'])
                    let lineTax = props.checkoutStore.calculateTaxes(lineTotal, item.data['tax_class_id'])

                    // We're mutating the supplied data object by design
                    orderProduct = assign(orderProduct, {
                        price: orderProductPrice,
                        total: lineTotal,
                        tax: lineTax
                    })

                    props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, {
                        action: 'insert',
                        orderProduct: orderProduct,
                        orderProductId: 0,
                        orderOptions: orderOptions, // TODO: If we fix the UI glitch (when tapping first option, item is created) we need to re-enable this
                        productId: parseInt(itemId),
                        orderTaxRates: orderTaxRates,
                        defaultSettings: this.getDefaultSettings()
                    }, (payload) => {
                        let onSuccess = (payload) => {
                            // Format the return payload
                            /* Returned JSON payload
                            "orderProducts": [
                                {
                                    "orderProductId": 4,
                                    "orderId": 198,
                                    "productId": 3381,
                                    "name": "Ceni Subscription",
                                    "model": "Ceni Subscription",
                                    "quantity": 1,
                                    "price": "111.1100",
                                    "total": "111.1100",
                                    "tax": "5.5555",
                                    "reward": 0
                                }
                            ],
                            "orderOptions": [
                                {
                                    "orderOptionId": 2,
                                    "orderId": 198,
                                    "orderProductId": 4,
                                    "productOptionId": "249",
                                    "productOptionValueId": "514",
                                    "name": "Coffee Package Size",
                                    "value": "340g",
                                    "type": "select"
                                }
                            ]*/

                            /*orderProducts.reduce((list, item, index) => {
                                
                            })*/

                            // Update our CartStore
                            //CartStore.updateItem()
                        }

                        props.checkoutStore.setOrder(payload)
                        //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId, onSuccess)
                    })
                } else {
                    // Create a new order
                }
            }
        })

        CartStore.on('item-changed', (item, quantity, oldQuantity) => {
            console.log('item quantity changed')
            console.log(item)
            console.log('qty: ' + quantity)
            console.log('old qty: ' + oldQuantity)

            // TODO: Move this whole chunk of logic to the CartAction, or a Cart ActionCreator
            if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                    !isNaN(props.checkoutStore.payload.order.orderId)) {
                    let orderProductId = 0
                    for (let idx = 0; idx < props.checkoutStore.payload.orderProducts.length; idx++) {
                        if (parseInt(props.checkoutStore.payload.orderProducts[idx].productId) === parseInt(item.data['id'])) {
                            orderProductId = props.checkoutStore.payload.orderProducts[idx].orderProductId
                        }
                    }

                    let orderProduct = assign({}, item.data, {
                        product_id: parseInt(item.data['id']),
                        quantity: quantity
                    })

                    let optionTotal = 0.00
                    // Get the prices off of the selected options and add them to the product price
                    let orderOptions = props.checkoutStore.getOrderOptions(parseInt(item.data['id'])) || null

                    if (typeof orderOptions !== 'undefined' && orderOptions !== null) {
                        // Not sure if I want to finalize this as an array or an object so I'm accounting for either
                        if (Object.keys(orderOptions).length > 0) {
                            //for (let idx = 0; idx < orderOptions.length; idx++) {
                            for (let key in Object.keys(orderOptions)) {
                                let orderOption = orderOptions[key]

                                // Get the product option value using the selected option's productOptionValueId
                                let productOptionId = Number(orderOption.productOptionId)
                                let productOptionValueId = Number(orderOption.productOptionValueId)

                                let productOptions = item.data['options']
                                let selectedOptions = productOptions.filter(option => {
                                    return Number(option['product_option_id']) === productOptionId
                                })

                                if (selectedOptions instanceof Array && selectedOptions.length > 0) {
                                    let selectedOption = selectedOptions[0]

                                    // TODO: Make this method static
                                    let optionPrice = CartStore.getOptionPrice(item.data, selectedOption, productOptionValueId)
                                    optionTotal += (!isNaN(optionPrice)) ? Number(optionPrice) : 0
                                }
                            }
                        }
                    }

                    let orderProductPrice = parseFloat(item.data['price']) + optionTotal

                    let lineTotal = orderProductPrice * quantity
                    let lineTotalWithTax = props.checkoutStore.calculateWithTaxes(lineTotal, item.data['tax_class_id'])
                    let lineTax = props.checkoutStore.calculateTaxes(lineTotal, item.data['tax_class_id'])

                    orderProduct = assign(orderProduct, item.data, {
                        total: lineTotal,
                        tax: lineTax
                    })

                    let orderTaxRates = props.checkoutStore.getOrderTaxRates()
                    //let orderOptions = props.checkoutStore.getOrderOptions()

                    props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, {
                        action: 'modifyQuantity',
                        orderProduct: orderProduct,
                        orderProductId: orderProductId,
                        //orderOptions: orderOptions,
                        quantityBefore: oldQuantity,
                        quantityAfter: quantity,
                        orderTaxRates: orderTaxRates
                    }, (payload) => {
                        props.checkoutStore.setOrder(payload)
                        //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                    })
                }
            }
        })

        CartStore.on('product-options-changed', (item, quantity, product) => {
            console.log('product options changed')
            console.log(item)
            console.log('qty: ' + quantity)

            if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                    !isNaN(props.checkoutStore.payload.order.orderId)) {
                    let lineTotal = item['price'] * quantity
                    let lineTotalWithTax = props.checkoutStore.calculateWithTaxes(lineTotal, item['tax_class_id'])
                    let lineTax = props.checkoutStore.calculateTaxes(lineTotal, item['tax_class_id'])

                    let orderProductId = 0
                    // Grab associated orderProduct
                    let orderProduct = props.checkoutStore.payload.orderProducts.filter(orderProduct => {
                        return orderProduct.productId === parseInt(product['id'])
                    })

                    if (orderProduct instanceof Array && orderProduct.length === 1) {
                        orderProductId = orderProduct[0].orderProductId
                    }

                    /*let orderProduct = assign({}, item, {
                        product_id: parseInt(item['id']),
                        quantity: quantity, // TODO: Inject quantity
                        total: lineTotal,
                        tax: lineTax
                    })*/

                    // TODO: Promises would probably work better here
                    let orderTaxRates = props.checkoutStore.getOrderTaxRates()
                    let orderOptions = props.checkoutStore.getOrderOptions(parseInt(product['id']), orderProductId)

                    props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, {
                        action: 'update',
                        //orderProduct: orderProduct,
                        orderProductId: orderProductId,
                        orderOptions: orderOptions,
                        //quantityBefore: oldQuantity,
                        //quantityAfter: quantity,
                        orderTaxRates: orderTaxRates,
                        defaultSettings: this.getDefaultSettings()
                    }, (payload) => {
                        props.checkoutStore.setOrder(payload)
                        //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                    })
                }
            }
        })

        CartStore.on('item-removed', (item) => {
            console.log('item removed')
            console.log(item)

            if (props.checkoutStore.payload.hasOwnProperty('order') && props.checkoutStore.payload.order !== null) {
                if (props.checkoutStore.payload.order.hasOwnProperty('orderId') &&
                    !isNaN(props.checkoutStore.payload.order.orderId)) {
                    let orderProductId = 0
                    for (let idx = 0; idx < props.checkoutStore.payload.orderProducts.length; idx++) {
                        if (parseInt(props.checkoutStore.payload.orderProducts[idx].productId) === parseInt(item['id'])) {
                            orderProductId = props.checkoutStore.payload.orderProducts[idx].orderProductId
                        }
                    }

                    let data = assign({}, item, {
                        product_id: parseInt(item['id']),
                        quantity: 0
                    })

                    let orderTaxRates = props.checkoutStore.getOrderTaxRates()
                    //let orderOptions = props.checkoutStore.getOrderOptions()

                    props.checkoutService.updateOrder(props.checkoutStore.payload.order.orderId, {
                        action: 'modifyQuantity',
                        orderProduct: data,
                        orderProductId: orderProductId,
                        quantityAfter: 0,
                        orderTaxRates: orderTaxRates,
                        //orderOptions: orderOptions
                    }, (payload) => {
                        props.checkoutStore.setOrder(payload)
                        //props.checkoutService.fetchOrder(props.checkoutStore.payload.order.orderId)
                    })
                }
            }
        })

        CartStore.on('cart-reset', () => {
            console.log('reset checkout store - cart was reset') // TODO: Have clear and reset, they aren't really the same thing

            props.checkoutService.clearOrder()
        })

        CartStore.on('cart-cleared', () => {
            console.log('clearing checkout store - cart was checked-out') // TODO: Have clear and reset, they aren't really the same thing

            // Don't reset, which deletes order, just create a new order
            props.checkoutService.createOrder({
                action: 'insert'
            })
        })

        let categoryData = []
        let productData = []

        for (var key in categories) {
            let item = categories[key]
            if (item.thumbnail) {
                item.id = key
                categoryData.push(item)
            }
        }

        for (var key in products) {
            let item = products[key]
            if (item.thumbnail) {
                item.id = key
                productData.push(item)
            }
        }

        this.state = {
            blockUi: false,
            chooseQuantity: false,
            data: {
                categories: categoryData,
                products: productData
            },
            initialSelection: CartStore.getSelection(),
            canSubmit: false,
            createAccount: false,
            editAccount: false,
            showLogin: (typeof props.loggedIn !== 'undefined' && props.loggedIn === true) ? true : false,
            checkoutMode: 'pos', // [cart|pos]
            step: 'shop', // [shop|cart|checkout|shipping|confirm] Not finalized, subject to change!
            title: '', // [shop|cart|checkout|shipping|confirm] Not finalized, subject to change!
            purchase: null,
            cart: 0,
            changeAmount: 0.00,
            cashAmount: 0.00,
            paymentMethod: 'In Store', // TODO: Don't hardcode
            paymentCode: 'in_store', // TODO: Don't hardcode
            customPaymentAmount: null,
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

        this.setState({
            showLogin: (typeof this.props.loggedIn !== 'undefined' && this.props.loggedIn === true) ? true : false,
            cart: (typeof this.props.location !== 'undefined' && this.props.location.pathname === '/checkout/cart') ? 1 : 0
        })

        // Store our stepper instance
        // Stepper maintains its own state and store
        //this.stepper.setSteps(this.configureSteps())
        //this.stepper.start()

        let settings = this.props.settingStore.getSettings().posSettings

        settings['pinned_category_id'] = 9 // 'New' category
        let categoryId = null

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
        //this.menuProductBrowser.actions.loadProducts(categoryId)

        // Just load browser products, don't trigger any steps
        //this.menuDrinksBrowser.actions.loadProducts(11) // Drinks TODO: Make this configurable
        console.log('LOADING CART')
        console.log(this.cart)

        // Store our stepper instance
        // Stepper maintains its own state and store
        this.stepper.setSteps(this.configureSteps())
        this.stepper.start()



        this.stepper.on('item-added', (item, quantity, oldQuantity) => {
            console.log('browser item added, add it to our cart')
            let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
            console.log(item)
            //cart.addItem(item['product_option_value_id'], 1, item, product)
        })

        this.stepper.on('item-changed', (item, quantity, oldQuantity) => {
            console.log('browser item changed, update the item in our cart')
            let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
            console.log(item)
            //cart.updateItem(item['product_option_value_id'], 1, item, product)
        })
    }

    showOrder() {
        let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
        this.setState({
            purchase: cart.getSelection()
        })
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
                    //this.menuCategoryBrowser.actions.loadCategories()

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

                        //this.menuProductBrowser.actions.loadProducts(data.category_id) // TODO: CONST for prop name?
                    } else {
                        //this.menuProductBrowser.actions.loadProducts()
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

                        //this.optionBrowser.actions.loadOptions(data) // TODO: CONST for prop name?
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
            }*/
        ]
    }

    categoryClicked(e, item) {
        e.preventDefault()
        e.stopPropagation()

        //let stepId = 'cart'
        //let stepDescriptor = this.stepper.getStepById(stepId) || null

        console.log(item);
        // Just load browser products, don't trigger any steps
        //this.menuProductBrowser.actions.loadProducts(item['category_id'])
    }

    itemClicked(e, item) {
        e.preventDefault()
        e.stopPropagation()

        // If the Quick Add button was clicked
        if (e.target.type === 'button') {
            this.addToCartClicked(e, item)

            return
        }

        this.props.actions.product.setProduct(item)

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

    completeOrder() {
        // Grab the total, by completing the order we're gonna wipe out the totals
        let orderTotal = parseFloat(this.props.checkoutStore.getTotal().value)
        // Create the order
        this.props.checkoutService.doCheckout(
            (data) => {
                // onSuccess handler
                if (this.state.customPaymentAmount) {
                    // Get amount
                    let cashAmount = null
                    if (typeof this.customPaymentAmount !== 'undefined' &&
                        this.customPaymentAmount !== null) {
                        cashAmount = parseFloat(this.customPaymentAmount.value)

                        this.setState({
                            charge: null,
                            cashAmount: (cashAmount).toFixed(2),
                            changeAmount: (cashAmount - orderTotal).toFixed(2),
                            prevCheckout: assign({}, this.state.checkout)
                        }, () => {
                            let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
                            cart.clearCart()

                            this.checkoutNotes.component.clear()

                            this.showCompleteModal()
                        })
                    } else {
                        throw new Error('something went wrong with cash amount')
                        // TODO: This is a kind of a stupid error message I can handle this better
                    }
                } else {
                    this.setState({
                        charge: null,
                        prevCheckout: assign({}, this.state.checkout)
                    }, () => {
                        let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
                        cart.clearCart()

                        this.checkoutNotes.component.clear()

                        this.showCompleteModal()
                    })
                }
            },
            (data) => {
                // onError handler
                this.setState({
                    charge: null
                })
            })
    }

    quickAddToCart(e) {
        this.addToCartClicked(e, item)
        this.addToCart(e) // Add to cart
        //this.popupKeypad.component.clear()

        // Close quantity keypad popup modal
        this.setState({
            chooseQuantity: false
        })
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
            let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
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

    refresh() {
        this.keypad.setField('value', 0)

        let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
        this.setState({
            canSubmit: !cart.isEmpty()
        })
    }

    reset() {
        this.keypad.setField('value', 0)

        let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
        cart.emptyCart()

        this.checkoutNotes.component.clear()

        let stepId = 'shop'
        let stepDescriptor = this.stepper.getStepById(stepId) || null

        if (typeof stepDescriptor !== null) {
            let data = {}

            let isEnded = false
            // Execute the step handler
            this.stepper.load(stepDescriptor, data, isEnded, this.setStep.bind(this, stepId))
        }
    }

    getTotal() {
        let total = 0

        if (typeof this.cart !== 'undefined' && this.cart !== null) {
            let cart = (typeof this.cart.getDecoratedComponentInstance === 'function') ? this.cart.getDecoratedComponentInstance() : this.cart
        }

        return total
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
                        image = {this.props.settingStore.config.settings.logo} />
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
                              <span className="count">2</span>
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
                                                steps = {steps}
                                                stepper = {this.stepper}
                                                configureSteps = {this.configureSteps}
                                                categoryFilterSelected = {this.categoryFilterSelected}
                                                categoryClicked = {this.categoryClicked}
                                                itemClicked = {this.itemClicked}
                                                addToCartClicked = {this.quickAddToCart}
                                                stepClicked = {this.stepClicked}
                                                />
                                            )
                                    }} />
                                <Route path='/filters' render={() => <CatalogPage {...this.props} /> } />
                                <Route path='/shop' render={() => <CatalogPage {...this.props} /> } />
                                <Route path='/product' render={() => <ProductPage {...this.props} /> } />
                                <Route path='/about' render={() => <AboutPage {...this.props} /> } />
                                <Route path='/register' render={() => <RegisterPage {...this.props} /> } />
                                <Route path='/account' render={() => <AccountPage {...this.props} /> } />
                                <Route path='/orders' render={() => <AccountPage {...this.props} /> } />
                                <Route path='/wishlist' render={() => <AccountPage {...this.props} /> } />
                                <Route path='/gallery' render={() => <GalleryPage dataSource={instagramFeed} {...this.props} /> } />
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

export default DragDropContext(HTML5Backend)(QcShop003)