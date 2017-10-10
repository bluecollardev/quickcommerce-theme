import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div className="row padding-top padding-bottom-3x">
                <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src="img/categories/cat01.jpg" alt="Category" />
                      Clocks
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src="img/categories/cat02.jpg" alt="Category" />
                      Furniture
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src="img/categories/cat03.jpg" alt="Category" />
                      Lightning
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src="img/categories/cat04.jpg" alt="Category" />
                      Bags
                    </a>
                </div>
            </div>
        )
    }
}