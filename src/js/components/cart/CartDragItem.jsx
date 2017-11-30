import React          from 'react'
import { DragSource } from 'react-dnd'
import { Thumbnail, Button }  from 'react-bootstrap'

import HtmlHelper from 'quickcommerce-react/helpers/HTML.js'

const mySource = {

    beginDrag(props) {
        return {
            id: props.id
        }
    },

    endDrag(props, monitor, component) {}

}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const CartDragItem = React.createClass({
    getDefaultProps() {
        return {
            item: {},
            onItemClicked: () => {},
            onAddToCartClicked: () => {}
        }
    },
    onClick(e) {
        // onClick handler for CartDragItem
        if (typeof this.props.onItemClicked === 'function') {
            let fn = this.props.onItemClicked
            fn(e, this.props.item)
        }
    },
    onAddToCartClicked(e) {
        // QuickCommerce theme CartDragItem component's onAddToCartClicked handler
        // onAddToCartClicked handler for CartDragItem
        if (typeof this.props.onAddToCartClicked === 'function') {
            let fn = this.props.onAddToCartClicked
            fn(e, this.props.item)
        }
    },
    render() {
        // QuickCommerce Theme CartDragItem.render
        const { id, isDragging, connectDragSource } = this.props
        
        return connectDragSource(
            <div className='shop-item'
                onClick={this.onClick}>
                {this.props.displayLabel && (
                <span className='shop-label text-danger'>Sale</span>
                )}
                {this.props.displayThumbnail && (
                <Thumbnail 
                    className='shop-thumbnail'
                    src={QC_IMAGES_URI + this.props.item.image}>
                    {this.props.children}
                    {this.props.overlayTools && (
                    <div className='shop-item-tools'>
                        <a href='#' className='add-to-wishlist' data-toggle='tooltip' data-placement='top' title='Wishlist'>
                            <i className='material-icons favorite_border' />
                        </a>
                        <Button className='add-to-cart' onClick={this.onAddToCartClicked}>
                            <em>Order Now</em>
                            <svg x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32'>
                                <path strokeDasharray='19.79 19.79' strokeDashoffset='19.79' fill='none' stroke='#FFFFFF' strokeWidth={2} strokeLinecap='square' strokeMiterlimit={10} d='M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11' />
                            </svg>
                        </Button>
                    </div>
                    )}
                </Thumbnail>
                )}

                {/*<div className='shop-item-details'>
                    <h5 className='shop-item-brand'>{this.props.item['manufacturer']}</h5>  
                </div>*/}
                
                {this.props.displayModel && (
                <div className='shop-item-details'>
                    <h5 className='shop-item-title'><a href='#/product'><small><em>'{this.props.item['model']}'</em></small></a></h5>
                </div>
                )}
                
                <div className='shop-item-details'>  
                    <h3 className='shop-item-title'><a href='#/product'><small>{this.props.item['name']}</small></a></h3>
                    {this.props.item.hasOwnProperty('price') && 
                    this.props.item['price'] !== false && 
                    !isNaN(this.props.item['price']) && (
                    <span className='shop-item-price'>
                        <span className='old-price'>N/A</span>
                        {'$' + parseFloat(this.props.item['price']).toFixed(2)}
                    </span>
                    )}
                </div>
                
                {this.props.displayDetails && (
                <p className='shop-item-details' dangerouslySetInnerHTML={{ __html: HtmlHelper.decodeHtmlEntities(this.props.item['description'])}}></p>
                )}
                
                {!this.props.overlayTools && (
                <div className='shop-item-tools'>
                    <a href='#' className='add-to-wishlist' data-toggle='tooltip' data-placement='top' title='Wishlist'>
                        <i className='material-icons favorite_border' />
                    </a>
                    <Button className='add-to-cart' onClick={this.onAddToCartClicked}>
                        <em>Add to Order</em>
                        <svg x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32'>
                            <path strokeDasharray='19.79 19.79' strokeDashoffset='19.79' fill='none' stroke='#FFFFFF' strokeWidth={2} strokeLinecap='square' strokeMiterlimit={10} d='M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11' />
                        </svg>
                    </Button>
                </div>
                )}
            </div>
        )
    }
})

module.exports = DragSource('sprite', mySource, collect)(CartDragItem)
