/**
 * This file is a wrapper that allows for isomorphic rendering of the application, and is also the main entry point for webpack.
 * You can include any MainComponent. Here, we're including the QuickCommerce app itself.
 */
if (!global.setTimeout) {
    global.setTimeout = function() {};
}

if (!global.setInterval) {
    global.setInterval = function() {};
}

import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';

import MainComponent from './main.jsx'

if ('undefined' !== typeof document) {
    ReactDOM.render(
        <MainComponent />,
        document.getElementById('react-ws')
    )
} else {
    print(renderToString(<MainComponent />));
}