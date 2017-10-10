import React, { Component } from 'react'

export default class SiteLogo extends Component {
    render() {
        return (
            <div className="site-logo-wrapper">
                <a href="index.html" className="site-logo visible-desktop">
                  <span>[</span> M
                  <span className="text-gray">/</span>
                  STORE <span>]</span>
                </a>
                <a href="index.html" className="site-logo visible-mobile">
                  <span>[</span> M <span>]</span>
                </a>
            </div>
        )
    }
}
