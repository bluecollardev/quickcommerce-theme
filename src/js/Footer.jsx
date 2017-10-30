import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                {this.props.children}
                {/* TODO: props.children */}
                <div id="contact" className="container">
                    <div className="line5">
                        <div className="container">
                            <div className="row Ama">
                                <div className="col-md-12">
                                    <h3 className="cursive text-center padding-top">~ Questions and Catering ~</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row ftext">
                            <div className="col-md-12">
                                <a id="features" />
                                <p>Double click to close me.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-xs-12 forma">
                                <form>
                                    <input type="text" className="col-md-6 col-xs-12 name" name="name" placeholder="Name *" />
                                    <input type="text" className="col-md-6 col-xs-12 Email" name="Email" placeholder="Email *" />
                                    <input type="text" className="col-md-12 col-xs-12 Subject" name="Subject" placeholder="Subject" />
                                    <textarea type="text" className="col-md-12 col-xs-12 Message" name="Message" placeholder="Message *" defaultValue={ ""} />
                                    <div className="cBtn col-xs-12">
                                        <ul>
                                            <li className="clear">
                                                <a href="#">
                                                    <i className="fa fa-times" />Clear Form
                                                </a>
                                            </li>
                                            <li className="send">
                                                <a href="#">
                                                    <i className="fa fa-share" />Send Message
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 col-xs-12 cont">
                                <ul>
                                    <li>
                                        <i className="fa fa-home" />5512 Lorem Edmonton
                                    </li>
                                    <li>
                                        <i className="fa fa-phone" />+1 800 789 50 1
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-envelope" />info@phobulous.ca
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-skype" />Phobulous (Edmonton)
                                    </li>
                                    {/*<li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square" />Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-dribbble" />Dribbble
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-flickr" />Flickr
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-youtube-play" />YouTube
                                        </a>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="line6">
                        <iframe src="https://maps.google.com/maps?q=phobulous edmonton&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={750} frameBorder={0} style={{border: 0}} />
                    </div>
                    
                </div>
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
            </div>
        )
    }
}