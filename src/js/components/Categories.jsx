import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div className="row padding-top padding-bottom-3x">
                <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src={this.props.categories[0].backgroundImage} alt={this.props.categories[0].title} />
                      {this.props.categories[0].title}
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src={this.props.categories[1].backgroundImage} alt={this.props.categories[1].title} />
                      {this.props.categories[1].title}
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src={this.props.categories[2].backgroundImage} alt={this.props.categories[2].title} />
                      {this.props.categories[2].title}
                    </a>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                    <a href="#" className="category-link">
                      <img src={this.props.categories[3].backgroundImage} alt={this.props.categories[3].title} />
                      {this.props.categories[3].title}
                    </a>
                </div>
            </div>
        )
    }
}