import React          from 'react'
import { DragSource } from 'react-dnd'
import { Thumbnail, Button }  from 'react-bootstrap'

const mySource = {

    beginDrag(props) {
        return {
            id : props.id
        }
    },

    endDrag(props, monitor, component) {}

}

function collect(connect, monitor) {
    return {
        connectDragSource : connect.dragSource(),
        isDragging        : monitor.isDragging()
    }
}

const CategoryDragItem = React.createClass({
    getDefaultProps() {
        return {
            item : {},
            onItemClicked : () => {}
        }
    },
    onClick(e) {
        // onClick handler for CartDragItem
        if (typeof this.props.onItemClicked === 'function') {
            let fn = this.props.onItemClicked
            fn(e, this.props.item)
        }
    },
    render() {
        const { id, isDragging, connectDragSource } = this.props
        return connectDragSource(
            <a href="#/product" className="category-link"
                onClick={this.onClick}>
                <img src={QC_IMAGES_URI + this.props.item.image} />
                {this.props.item['name']}
            </a>
        )
    }
})

module.exports = DragSource('sprite', mySource, collect)(CategoryDragItem)
