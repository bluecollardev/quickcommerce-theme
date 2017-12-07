import React, { Component } from 'react'

import Velocity from 'velocity-animate' // Facade for GSAP parallax containers and effects

class Footer extends Component {
    componentDidMount() {
        // Animated Scroll to Top Button
        let scrollTop = document.querySelector('.scroll-to-top-btn')
        
        //if (scrollTop.length > 0) {
            // TODO: Don't forget to detach me!
            window.addEventListener('scroll', () => {
                if (typeof document.documentElement === 'undefined' || 
                    typeof document.documentElement.scrollTop === 'undefined') {
                    return
                }
                
                if (document.documentElement.scrollTop > 600) {
                    scrollTop.classList.add('visible')
                } else {
                    scrollTop.classList.remove('visible')
                }
            })
            
            scrollTop.addEventListener('click', (e) => {
                e.preventDefault()
                
                Velocity(document.documentElement, 'scroll', {
                    offset: 0, 
                    duration: 1000, 
                    easing: 'easeOutExpo', 
                    mobileHA: false 
                })
            })
        //}
    }
    
    render() {
        return (
            <div id="footer">
                <footer className="footer">
                    <div className="column">
                      <h3 className="widget-title">
                        Payment Methods
                        <small>We support the following payment methods.</small>
                      </h3>
                      <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
                      {/*<div className="social-bar text-center space-bottom">
                        <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                          <i className="socicon-skype" />
                        </a>
                        <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                          <i className="socicon-facebook" />
                        </a>
                        <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                          <i className="socicon-googleplus" />
                        </a>
                        <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                          <i className="socicon-twitter" />
                        </a>
                        <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                          <i className="socicon-instagram" />
                        </a>
                      </div>*/}{/* .social-bar */}
                    </div>{/* .column */}
                    <div className="column">
                      <h3 className="widget-title">
                        Subscription
                        <small>To receive latest offers and discounts from the shop.</small>
                      </h3>
                      <form action="" method="post" target="_blank" className="subscribe-form" noValidate>
                        <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                        <button type="submit"><i className="material-icons send" /></button>
                      </form>
                    </div>{/* .column */}
                    <div className="column">
                      <p className="text-sm">Need help? Call <span className="text-primary">(780) 555-5555</span></p>
                      {/* Scroll To Top Button */}
                      <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
                    </div>{/* .column */}
                </footer>
                {this.props.children}
            </div>
        )
    }
}

export default Footer