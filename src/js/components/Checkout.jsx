import assign from 'object-assign'
 
import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { Alert, Table, Grid, Col, Row, Thumbnail, Input, Button, Modal } from 'react-bootstrap'

import SignInForm from 'quickcommerce-react/components/account/SignInForm.jsx'
import CreditCardForm from 'quickcommerce-react/components/payment/CreditCardForm.jsx'
import CustomerProfile from 'quickcommerce-react/components/customer/AuthenticatedCustomerFullProfile.jsx'

//import { PosComponent } from 'quickcommerce-react/components/PosComponent.jsx'

@inject(deps => ({
    actions: deps.actions,
	authService: deps.authService,
	customerService: deps.customerService,
    checkoutService: deps.checkoutService,
    settingService: deps.authService,
	loginStore: deps.loginStore,
    userStore: deps.userStore,
    customerStore: deps.customerStore,
    checkoutStore: deps.checkoutStore,
    //starMicronicsStore: deps.starMicronicsStore,
    productStore: deps.productStore,
	settingStore: deps.settingStore,
	mappings: deps.mappings, // Per component or global scope?
	translations: deps.translations, // i8ln transations
	roles: deps.roles, // App level roles, general authenticated user (not customer!)
	//userRoles: deps.userRoles, // Shortcut or implement via HoC?
	user: deps.user // Shortcut or implement via HoC?
}))
@observer
export default class Checkout extends Component { //PosComponent.wrappedComponent {
    constructor(props) {
        super(props)
        
        this.renderReceipt = this.renderReceipt.bind(this)
    }
    
    renderReceipt() {        
        return this.props.renderReceipt()
    }
    
    render() {
        let orderTotal = 0.00
        if (this.props.checkoutStore.payload.orderTotals instanceof Array && this.props.checkoutStore.payload.orderTotals.length > 0) {
            let orderTotalValue = parseFloat(this.props.checkoutStore.getTotal().value)
            if (!isNaN(orderTotalValue)) {
                orderTotal = orderTotalValue.toFixed(2) 
            }
        }
        
        let orderSubTotal = 0.00
        if (this.props.checkoutStore.payload.orderTotals instanceof Array && this.props.checkoutStore.payload.orderTotals.length > 0) {
            let orderSubTotalValue = parseFloat(this.props.checkoutStore.getSubTotal().value)
            if (!isNaN(orderSubTotalValue)) {
                orderSubTotal = orderSubTotalValue.toFixed(2) 
            }
        }
        
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                <section className='fw-section slide catalog-slide text-center'>
                    <span className='h1'>
                        <i className="cursive"><strong>Checkout your order.</strong></i>
                    </span>
                </section>
                
                {/* Container */}
                <form method="post" className="container padding-top-3x padding-bottom-2x">
                    <div className="row padding-top">
                        {/* Checkout Form */}
                        <div className="col-sm-7 padding-bottom">
                            <Row>
                                <CustomerProfile
                                    customer = {this.props.customerStore.customer}
                                    displayAddresses = 'single'
                                    billingAddress = {this.props.customerStore.billingAddress}
                                    shippingAddress = {this.props.customerStore.shippingAddress}
                                    editAccount = {true}
                                    createAccount = {false}
                                    displayProfile = {true}
                                    cloneAddressCheckbox = {true}
                                    displayCurrentAddress = {true}
                                    displayBillingAddress = {true}
                                    displayShippingAddress = {true}
                                    onCreateSuccess = {this.onCreateSuccess}
                                    onCancel = {() => {window.location.hash = '/'}}>
                                </CustomerProfile>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <CreditCardForm />
                                    </Row>
                                </Col>
                            </Row>
                        </div>{/* .col-sm-8 */}
                        {/* Sidebar */}
                        <div className="col-md-4 col-md-offset-1 col-sm-4 padding-bottom">
                          <aside>
                            <h3>Cart total:</h3>
                            <h4>${orderTotal}</h4>
                            <p className="text-sm text-gray">* Note: This amount includes shipping, handling, and any applicable provincial and federal sales taxes.</p>
                          </aside>
                          <aside>
                            <div className='receipt box-trim-shadow z0'
                            style={{
                                margin: '0 auto',
                                boxSizing: 'border-box',
                                padding: '18px',
                                border: '1px solid black'
                            }}>
                            {this.renderReceipt()}
                            </div>
                          </aside>
                          <aside>
                            <a href="#/cart" className="btn btn-default btn-ghost icon-left btn-block">
                              {/*<i className="material-icons arrow_back" />*/}
                              Back To Cart
                            </a>
                            <button type="submit" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Confirm</button>
                          </aside>
                        </div>{/* .col-md-3.col-sm-4 */}
                    </div>{/* .row */}
                </form>{/* .container */}
            </main>
        )
    }
}