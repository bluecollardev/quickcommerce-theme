import assign from 'object-assign'
 
import React, { Component } from 'react'

import QcCatalog from 'quickcommerce-react/components/shop/Catalog.jsx'

import CatalogFilterBar from 'quickcommerce-react/components/common/CatalogFilterBar.jsx'
import Products from 'quickcommerce-react/components/shop/Products.jsx'
import ProductRow4x from './catalog/ProductRow4x.jsx'

export default class Catalog extends QcCatalog {
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
        
        // Load categories
        console.log('LOAD TOP CATEGORIES')
        this.props.actions.catalog.loadTopCategories()
        
        this.props.catalogStore.addChangeListener(() => {
            this.forceUpdate()
        })
        
        /*if (typeof this.topCategoryBrowser !== 'undefined') {
            console.log('TOP CATEGORY BROWSER')
            console.log(this.topCategoryBrowser)
            this.topCategoryBrowser.actions.loadTopCategories() // Browser load categories via refs
        }*/
        
        if (typeof this.props.match !== 'undefined' && 
            typeof this.props.match.params !== 'undefined' && 
            typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
            console.log('load category id: ' + this.props.match.params.cat)
            categoryId = parseInt(this.props.match.params.cat)
        } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
            categoryId = parseInt(settings['pinned_category_id'])
        } else {
            //categoryId = null
            categoryId = 204
        }
        
        // Just load browser products, don't trigger any steps
        this.catalogBrowser.actions.loadProducts(categoryId)
    }
    
    categoryFilterSelected(categoryId) {
        categoryId = (!Number.isNaN(parseInt(categoryId))) ? parseInt(categoryId) : null // Ensure conversion
        // Find me
        // Just load browser products, don't trigger any steps
        this.catalogBrowser.actions.loadProducts(categoryId)
    }
    
    render() {
        let steps = this.stepper.getSteps() // Stepper extends store, we're good
        let categories = this.props.catalogStore.getCategories()
        
        console.log('CATALOG CATEGORIES')
        console.log(categories)
        
        return (
            <main className="content-wrapper">{/* Main Content Wrapper */}
                {/* Page Title */}
                {/*<section className="container padding-top-3x">
                  <h1 className="space-top-half tablet-center">Shop Boxed Filters Top</h1>
                </section>*/}{/* .container-fluid */}
                {/* Move this out into custom module */}
                <section className="entryModule entryModule--saloni triggrParallx">
                  <div className="entryModule__tile entryModule__tile--latter slideUp" style={{transform: 'matrix(1, 0, 0, 1, 0, -30)'}}>
                    <div className="tileBg animateInView animateInView--pix isInView" data-delay="narrow" />
                  </div>
                  {/* entryModule__tile--latter */}
                  <div className="entryModule__tile entryModule__tile--former slideDown--slow" style={{transform: 'matrix(1, 0, 0, 1, 0, 100)'}}>
                    <div className="tileBg animateInView animateInView--pix isInView" />
                  </div>
                  {/* entryModule__tile--former */}
                  <div className="entryModule__text slideUp--slow" style={{transform: 'matrix(1, 0, 0, 1, 0, -9.95)'}}>
                    <h3>
                      <span className="small">
                        <div className="animateInView animateInView--text isInView" data-delay="medium">
                          <span>COFFEE, MERCH  &amp; MORE</span>
                        </div> {/* fieldEntry-text */}
                      </span>{/* small */}
                      <span className="big">
                        <div className="animateInView animateInView--text isInView">
                          <span>ONLINE OUTLET</span>
                        </div> {/* fieldEntry-text */}
                      </span>{/* big */}
                    </h3>
                    <p>Respecting the science and craft of the past, our team of reasters have developed an evolving portfolio of coffees that reflect our passion, philosophy and commitment to sensible roasting... the end goal - delicious artisan coffee.</p>
                    <div className="btn animateInView isInView">
                      <span className="btn__bg" />
                      <a className="btn__link" href="#/category">
                        <span className="buttonText">BROWSE ALL PRODUCTS
                        </span>
                        {/* buttonText */}
                      </a>
                      {/* a */}
                    </div>
                    {/* btn */}
                  </div>
                  {/* entryModule__text */}
                </section>
                
                <CatalogFilterBar
                    items = {categories}
                    onFilterSelected = {this.categoryFilterSelected}
                    />
                
                {/* Shop Catalog */}
                <section className="container main-content padding-bottom-3x">
                    <div className="row padding-top">
                        <Products
                            ref = {(browser) => this.catalogBrowser = browser}
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
                            customRowComponent = {ProductRow4x}
                            onItemClicked = {this.itemClicked}
                            onAddToCartClicked = {this.addToCartClicked}
                            onFilterSelected = {this.categoryFilterSelected}
                            onStepClicked = {this.stepClicked} 
                            />
                    </div>
                    <hr />
                    {/* Pagination */}
                    <div className="pagination padding-bottom">
                        <div className="page-numbers">
                          <a href="#">1</a>
                          <a href="#">2</a>
                          <span className="active">3</span>
                          <a href="#">4</a>
                          <span>...</span>
                          <a href="#">10</a>
                        </div>
                        <div className="pager">
                          <a href="#">Prev</a>
                          <span>|</span>
                          <a href="#">Next</a>
                        </div>
                    </div>{/* .pagination */}
                </section>{/* .container */}
            </main>
        )
    }
}