import React, { Component } from 'react'

import CategoryDragItem from '../cart/CategoryDragItem.jsx'
import { Alert, Table, Grid, Col, Row, Thumbnail, Input, Button, Modal } from 'react-bootstrap'

export default class CategoryRow extends Component {
    static defaultProps = {
        data : {}, 
        onItemClicked: () => {}
    }
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Col xs={6} sm={3}>
                <CategoryDragItem 
                  item = {this.props.data}
                  id = {this.props.data.id}
                  onItemClicked = {this.props.onItemClicked} />
            </Col>
        )
    }
}