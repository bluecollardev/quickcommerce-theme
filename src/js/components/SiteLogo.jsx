import React, { Component } from 'react'

export default class SiteLogo extends Component {
    render() {
        return (
            <div className="site-logo-wrapper">
                <a href="index.html" className="site-logo visible-desktop">
                  <span>Phobulous</span>
                </a>
                <a href="index.html" className="site-logo visible-mobile">
                  <span>Phobulous</span>
                </a>
            </div>
        )
    }
}
