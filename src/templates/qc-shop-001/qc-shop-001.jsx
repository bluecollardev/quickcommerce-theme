/**
 * This file is a wrapper that allows for isomorphic rendering of the application, and is also the main entry point for webpack.
 * You can include any MainComponent. Here, we're including the QuickCommerce app itself.
 */
if (!global.setTimeout) {
    global.setTimeout = function() {}
}

if (!global.setInterval) {
    global.setInterval = function() {}
}

import React from 'react'
import ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server'

import {inject, observer, Provider} from 'mobx-react'

import AuthService from 'quickcommerce-react/services/AuthService.jsx'
import CustomerService from 'quickcommerce-react/services/CustomerService.jsx'
import CustomerAddressService from 'quickcommerce-react/services/CustomerAddressService.jsx'
import CheckoutService from 'quickcommerce-react/services/CheckoutService.jsx'

import LoginStore from 'quickcommerce-react/stores/LoginStore.jsx'
import UserStore from 'quickcommerce-react/stores/UserStore.jsx'
import CustomerStore from 'quickcommerce-react/stores/CustomerStore.jsx'
import CustomerListStore from 'quickcommerce-react/stores/CustomerListStore.jsx'
import ProductStore from 'quickcommerce-react/stores/ProductStore.jsx'
import CheckoutStore from 'quickcommerce-react/stores/CheckoutStore.jsx'
import SettingStore from 'quickcommerce-react/stores/SettingStore.jsx'
import StarMicronicsStore from 'quickcommerce-react/stores/StarMicronicsStore.jsx'

import MainComponent from './main.jsx'

if ('undefined' !== typeof document) {
    ReactDOM.render(
        <Provider 
            authService = {AuthService}
            customerService = {CustomerService}
            customerAddressService = {CustomerAddressService}
            customerStore = {CustomerStore}
            customerListStore = {CustomerListStore}
            checkoutService = {CheckoutService}
            checkoutStore = {CheckoutStore}
            productStore = {ProductStore}
            loginStore = {LoginStore}
            userStore = {UserStore}
            settingStore = {SettingStore}>
            <MainComponent />
        </Provider>,
        document.getElementById('react-ws')
    )
} else {
    print(renderToString(<MainComponent />))
}