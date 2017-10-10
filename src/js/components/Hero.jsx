import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (          
            <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
            
              {/* Data API:
              data-loop="true/false" enable/disable looping
              data-autoplay="true/false" enable/disable carousel autoplay
              data-interval="3000" autoplay interval timeout in miliseconds
              Simply add necessary data attribute to the ".hero-carousel" with appropriate value to adjust carousel functionality.
            */}
                <div className="inner">
                  <div className="slide" style={{backgroundImage: 'url(' + this.props.slides[0].backgroundImage + ')'}}>
                    <div className="container">
                      <div className="absolute from-top" style={{top: '13%'}}>
                        <span className="h1 hidden-xs"><i>Phobulous</i><br />Soups and Vermicelli Bowls</span>
                      </div>
                      <div className="absolute text-right from-bottom" style={{bottom: '13%', right: 15}}>
                        <span className="h2"><span className="text-thin"><i>First delivery special!</i></span><br /><strong>Save 5% on your order with SkipTheDishes!</strong></span><br />
                        <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light space-top-none">
                          Order Now
                          <i className="material-icons arrow_forward" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="slide" style={{backgroundImage: 'url(' + this.props.slides[1].backgroundImage + ')'}}>
                    <div className="container text-center padding-top-3x">
                      <span className="h1 from-bottom"><i>Fan Favorites</i><br />Spring Rolls, Salad Rolls and More</span><br />
                      <span className="h2 from-bottom"><span className="text-thin">Special offer: </span> <strong>-25%</strong></span><br />
                      <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                        Order Now
                        <i className="material-icons arrow_forward" />
                      </a>
                    </div>
                  </div>
                  <div className="slide" style={{backgroundImage: 'url(' + this.props.slides[2].backgroundImage + ')'}}>
                    <div className="container padding-top-3x">
                      <span className="h1 space-top from-left"><i>Special</i><br />Rice Dishes</span><br />
                      <span className="h2 from-right"><span className="text-thin">Only <span className="hidden-xs">today</span></span> <strong>-30%</strong></span><br />
                      <a href="#" className="btn btn-primary btn-with-icon-right waves-effect waves-light scale-up">
                        Order Now
                        <i className="material-icons arrow_forward" />
                      </a>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}