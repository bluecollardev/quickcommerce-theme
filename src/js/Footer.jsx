import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            
            <footer className="footer">
                <div className="column">
                  <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
                  <div className="social-bar text-center space-bottom">
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
                  </div>
                  <p className="copyright">© 2016. Made with <i className="text-danger material-icons favorite" /> by rokaux.</p>
                </div>
                <div className="column">
                  <h3 className="widget-title">
                    Subscription
                    <small>To receive latest offers and discounts from the shop.</small>
                  </h3>
                  <form action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=1194bb7544" method="post" target="_blank" className="subscribe-form" noValidate>
                    <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                    
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                    <button type="submit"><i className="material-icons send" /></button>
                  </form>
                </div>
                <div className="column">
                  <h3 className="widget-title">
                    Payment Methods
                    <small>We support one of the following payment methods.</small>
                  </h3>
                  <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
                  
                  <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
                </div>
            </footer>
        )
    }
}