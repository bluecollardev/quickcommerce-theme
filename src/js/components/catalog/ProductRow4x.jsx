import React, { Component } from 'react'

import { Alert, Table, Grid, Col, Row, Thumbnail, Input, Button, Modal } from 'react-bootstrap'

import CartDragItem from '../cart/CartDragItem.jsx'

export default class ProductRow4x extends Component {
    static defaultProps = {
        data : {}, 
        onItemClicked: () => {},
        onAddToCartClicked: () => {}
    }
    
    constructor(props) {
        super(props)
    }
    
    render() {
        // QuickCommerce Theme ProductRow4x.render
        return (
            <Col xs={12} sm={3}>
                <CartDragItem
                    onItemClicked = {this.props.onItemClicked}
                    onAddToCartClicked = {this.props.onAddToCartClicked}
                    displayLabel = {true}
                    displayThumbnail = {true}
                    displayDetails = {false}
                    overlayTools = {false}
                    item = {this.props.data}
                    id = {this.props.data.id}>
                    <Button block onClick={this.props.onAddToCartClicked}><i className='fa fa-shopping-cart' /> Quick Add</Button>
                </CartDragItem>
            </Col>
        )
    }
}