import assign from 'object-assign'
 
import React, { Component } from 'react'

import QcCatalog from 'quickcommerce-react/components/shop/Catalog.jsx'
import CartContext from 'quickcommerce-react/modules/cart/CartContext.jsx'

import CatalogFilterBar from 'quickcommerce-react/components/common/CatalogFilterBar.jsx'
import Products from 'quickcommerce-react/components/shop/Products.jsx'
import ProductRow4x from './catalog/ProductRow4x.jsx'

class Catalog extends QcCatalog {
    constructor(props) {
        super(props)
        
        this.loadCategory = this.loadCategory.bind(this)
    }
    
    componentDidMount() {       
        this.loadCategory()
    }
    
    componentDidUpdate() {
        this.loadCategory()
    }
    
    loadCategory() {
        let settings = this.props.settingStore.getSettings().posSettings

        settings['pinned_category_id'] = null // 'New' category
        let categoryId = null
        
        // Load categories
        this.props.actions.catalog.loadTopCategories()
        
        /*this.props.catalogStore.addChangeListener(() => {
            this.forceUpdate()
        })*/
        
        // Get matching category
        if (typeof this.props.match !== 'undefined' && 
            typeof this.props.match.params !== 'undefined' && 
            typeof this.props.match.params.cat !== 'undefined' && !isNaN(this.props.match.params.cat)) {
            console.log('load category id: ' + this.props.match.params.cat)
            categoryId = parseInt(this.props.match.params.cat)
        } else if (settings.hasOwnProperty('pinned_category_id') && !isNaN(settings['pinned_category_id'])) {
            categoryId = parseInt(settings['pinned_category_id'])
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
        
        return (
            <main className='content-wrapper'>{/* Main Content Wrapper */}
                {/* Page Title */}
                {/*<section className='container padding-top-3x'>
                  <h1 className='space-top-half tablet-center'>Shop Boxed Filters Top</h1>
                </section>*/}{/* .container-fluid */}
                
                {/* Move this out into a custom module */}
                <section className='hidden-xs container padding-top-3x padding-bottom' style={{ background: 'white', position: 'relative', clear: 'both' }}>
                    <div className='section_wrapper mcb-section-inner'>
                        <div className='wrap mcb-wrap one valign-top clearfix'>
                            <div className='mcb-wrap-inner'>
                                <div className='column mcb-column one-fourth column_icon_box'>
                                    <div className='icon_box icon_position_top no_border'>
                                        <a className='load-checkout' href='#/shop/category/204' onClick={() => {
                                            console.log('catalog-browser')
                                            console.log(document.querySelector('.catalog-browser'))
                                            document.querySelector('.catalog-browser').scrollIntoView() 
                                        }}>
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
                                        <a className='load-checkout' href='#/shop/category/223'onClick={() => {
                                            console.log('catalog-browser')
                                            console.log(document.querySelector('.catalog-browser'))
                                            document.querySelector('.catalog-browser').scrollIntoView() 
                                        }}>
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
                                        <a className='load-checkout' href='#/shop/category/88'onClick={() => {
                                            console.log('catalog-browser')
                                            console.log(document.querySelector('.catalog-browser'))
                                            document.querySelector('.catalog-browser').scrollIntoView() 
                                        }}>
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
                                        <a className='load-checkout' href='#/shop/category/224'onClick={() => {
                                            console.log('catalog-browser')
                                            console.log(document.querySelector('.catalog-browser'))
                                            document.querySelector('.catalog-browser').scrollIntoView() 
                                        }}>
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
                </section>
                
                <section className='fw-section slide catalog-slide text-center'>
                    <span className='h1'>
                        <i className="cursive"><strong>Coffee, merch, devices and more.</strong></i>
                        <br />
                        Welcome to the ACE Online Shop.
                    </span>
                </section>
                
                {/* Move this out into custom module */}
                <section className='entryModule entryModule--saloni triggrParallx'>
                  <div className='box-trim-shadow z1 hidden-xs entryModule__tile entryModule__tile--latter slideUp' style={{transform: 'matrix(1, 0, 0, 1, 0, -30)'}}>
                    <div className='tileBg animateInView animateInView--pix isInView' data-delay='narrow' />
                  </div>
                  {/* entryModule__tile--latter */}
                  <div className='box-trim-shadow z1 hidden-xs entryModule__tile entryModule__tile--former slideDown--slow' style={{transform: 'matrix(1, 0, 0, 1, 0, 100)'}}>
                    <div className='tileBg animateInView animateInView--pix isInView' />
                  </div>
                  {/* entryModule__tile--former */}
                  <div className='entryModule__text slideUp--slow' style={{transform: 'matrix(1, 0, 0, 1, 0, -9.95)'}}>
                    <p>Respecting the science and craft of the past, our team of roasters have developed an evolving portfolio of coffees that reflect our passion, philosophy and commitment to sensible roasting... the end goal - delicious artisan coffee.</p>
                    <div className='btn animateInView isInView'>
                      <span className='btn__bg' />
                      <a className='btn__link' href='#/category'>
                        <span className='buttonText'>BROWSE ALL PRODUCTS
                        </span>
                        {/* buttonText */}
                      </a>
                      {/* a */}
                    </div>
                    {/* btn */}
                  </div>
                  {/* entryModule__text */}
                </section>
                
                <section className='container catalog-filters-wrapper'>
                    <CatalogFilterBar
                        items = {categories}
                        onFilterSelected = {this.categoryFilterSelected}
                        />
                </section>
                
                {/* Shop Catalog */}
                <section className='container main-content padding-bottom-3x'>
                    <div className='row padding-top catalog-browser'>
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
                            onAddToCartClicked = {this.props.addToCartClicked}
                            onFilterSelected = {this.categoryFilterSelected}
                            onStepClicked = {this.stepClicked} 
                            />
                    </div>
                    <hr />
                    {/* Pagination */}
                    <div className='pagination padding-bottom'>
                        <div className='page-numbers'>
                          <a href='#'>1</a>
                          <a href='#'>2</a>
                          <span className='active'>3</span>
                          <a href='#'>4</a>
                          <span>...</span>
                          <a href='#'>10</a>
                        </div>
                        <div className='pager'>
                          <a href='#'>Prev</a>
                          <span>|</span>
                          <a href='#'>Next</a>
                        </div>
                    </div>{/* .pagination */}
                </section>{/* .container */}
            </main>
        )
    }
}

export default CartContext(Catalog)