import React, { Component } from 'react'
import {inject, observer, Provider} from 'mobx-react'

import { Alert, Table, Grid, Col, Row, Thumbnail, Input, Button, Modal } from 'react-bootstrap'

import StringHelper from 'quickcommerce-react/helpers/String.js'

@inject(deps => ({
    actions: deps.actions,
    cartStore: deps.cartStore,
    checkoutStore: deps.checkoutStore,
    settingStore: deps.settingStore
}))
@observer
class DragDropCartTable extends Component {
    constructor(props) {
        super(props)
        
        this.doUpdate = this.doUpdate.bind(this)
        this.renderTotals = this.renderTotals.bind(this)
    }
    
    componentDidMount() {
        this.props.checkoutStore.on('set-order', this.doUpdate)
    }
    
    componentWillUnmount() {
        this.props.checkoutStore.removeListener('set-order', this.doUpdate)
    }
    
    doUpdate() {
        this.forceUpdate()
        
        /*try {
            this.forceUpdate()
        } catch (err) {
            console.log(err)
        }*/
    }
    
    renderTotals() {
        let output = []

        // Totals
        let totals = this.props.checkoutStore.getTotals() || []
        let total = this.props.checkoutStore.getTotal() || null

        // Sub-totals
        for (let idx = 0; idx < totals.length; idx++) {
            if (totals[idx].code === total.code) continue

            // Set the total title
            let subTotalTitle = ''
            switch (totals[idx].code) {
                case 'sub_total':
                    subTotalTitle = 'Sub-total'
                    break
                case 'total':
                    subTotalTitle = 'Total'
                    break
                default:
                    subTotalTitle = totals[idx].title
            }

            output.push(
                <tr>
                    <td colSpan={this.props.columns.length} style={{textAlign: 'right'}}>
                        <strong>{subTotalTitle}:</strong>
                    </td>
                    <td colSpan={2}>
                        ${parseFloat(totals[idx].value).toFixed(2)}
                    </td>
                </tr>
            )
        }

        if (total !== null) {
            // Final total
            // Set the total title
            let totalTitle = ''
            switch (total.code) {
                case 'sub_total':
                    totalTitle = 'Sub-total'
                    break
                case 'total':
                    totalTitle = 'Total'
                    break
                default:
                    totalTitle = total.title
            }

            output.push(
                <tr>
                    <td colSpan={this.props.columns.length} style={{textAlign: 'right'}}>
                        <h4>{totalTitle}:
                        <br/>
                        <small>(CAD)</small>
                        </h4>
                        
                    </td>
                    <td colSpan={2}>
                        <h1>${parseFloat(total.value).toFixed(2)}</h1>
                    </td>
                </tr>
            )
            
            output.push(
                <tr>
                    <td colSpan={this.props.columns.length + 1} style={{textAlign: 'center'}}>
                        <small style={{color: 'lightgrey'}}>* All prices in Canadian Dollars (CDN)</small>
                    </td>
                </tr>
            )
        }

        return output
    }
    
    render() {
        let count = this.props.cartStore.getCount()
        
        if (this.props.displayLegacy) {
            return (
                <table className={this.props.tableClassName}>
                    <thead>
                        <tr>
                            <td colSpan={3}>
                                <p className="text-sm">
                                    <span className="text-gray">Currently</span> {count} items
                                    <span className="text-gray"> in cart</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>{'Name'}</th>
                            {this.props.columns.map(column => {
                            return (
                            <th key={column}>{StringHelper.capitalizeFirstLetter(column)}</th>
                            )}
                            )}
                            <th>{'Qty'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.body}
                    </tbody>
                    <tfoot>
                        {this.renderTotals()}
                    </tfoot>
                </table>
            )
        } else {
            return (
                <div className='shopping-cart'>
                    <p className='text-sm'>
                    <span className='text-gray'>Currently</span> {count} items
                    <span className='text-gray'> in cart</span>
                    </p>
                    {this.props.body}
                    {/*<div className="item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item03.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                        <h4 className="item-price">$299.00</h4>
                        <div className="count-input">
                          <a className="incr-btn" data-action="decrease" href="#">–</a>
                          <input className="quantity" type="text" defaultValue={1} />
                          <a className="incr-btn" data-action="increase" href="#">+</a>
                        </div>
                      </div>
                      <a href="#" className="item-remove" data-toggle="tooltip" data-placement="top" title="Remove">
                        <i className="material-icons remove_shopping_cart" />
                      </a>
                    </div>*/}
                </div>
            )
        }
        
    }
}

export default DragDropCartTable