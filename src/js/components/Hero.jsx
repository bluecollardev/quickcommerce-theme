import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        /* Data API:
        data-loop="true/false" enable/disable looping
        data-autoplay="true/false" enable/disable carousel autoplay
        data-interval="3000" autoplay interval timeout in miliseconds
        Simply add necessary data attribute to the ".hero-carousel" with appropriate value to adjust carousel functionality.
        */
        return (  
            <div className='superfood-block js-parallax'>
                <div className='inner'> 
                    {this.props.slides.map((slide, idx) => (
                    <div key={idx} className='slide' style={{backgroundImage: 'url(' + slide.backgroundImage + ')'}}>
                        <div className='container'>
                            <div className='absolute from-top' style={{top: '13%'}}>
                                <span className='h1 hidden-xs'>
                                    <i className="cursive">{slide.title}</i>
                                    <br />
                                    {slide.subtitle1}
                                </span>
                            </div>
                            <div className='absolute text-right from-bottom' style={{bottom: '13%', right: 15}}>
                                <span className='h2'>
                                    <span className='text-thin'><i>{slide.subtitle2}</i></span>
                                    <br />
                                    <strong>{slide.subtitle3}</strong>
                                </span>
                                <br />
                                <a href='#' className='btn btn-primary btn-with-icon-right waves-effect waves-light space-top-none'>
                                    {slide.ctaText}
                                    <i className='material-icons arrow_forward' />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                    
                <img className='grass floating-grass floating-element js-parallax' data-ratio='1.9' src='./img/template/phobulous/grass.png' alt style={{transform: 'translateY(109.9px) translateZ(0px)'}} />
                <img className='grass-2 floating-grass-2 floating-element js-parallax' data-ratio='0.6' src='./img/template/phobulous/grass-2.png' alt style={{transform: 'translateY(-109.9px) translateZ(0px)'}} />
                <div className='widget widget-static-block'>
                    {/*<div className='superfood-text'>
                      <img style={{margin: '0 auto', maxWidth: '30%'}} src='img/template/phobulous/logo-text.png' />
                      <h2 className='superfood-heading'>sensational vietnamese cuisine</h2>
                      <p className='superfood-content'>indulge your senses and experience the diverse<br />and intricate flavors of Vietnamese cuisine.</p>
                      <a className='superfood-btn' href='#blog' style={{marginTop: '5rem', paddingLeft: 40, paddingRight: 40}}>explore our menu</a>
                    </div>*/}
                    {/*<div class='superfood-img'><img id='salad' class='js-parallax' data-ratio='0.06' src='./img/template/phobulous/pho-noodles-black-bowl-02.png' alt='' style='transform: translateY(32.97px) translateZ(0px);'>*/}
                    <div className='superfood-img'>
                        {/*<img id='salad' className='js-parallax' data-ratio='0.06' src='./img/template/phobulous/phobulous-hero-01.png' alt style={{transform: 'translateY(32.97px) translateZ(0px)'}} />*/}
                        {/* Herbs */}
                        {/*<img class='floating-element js-parallax herb basil' data-ratio='-0.1' src='./img/template/phobulous/basil.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax herb cilantro' data-ratio='-0.1' src='./img/template/phobulous/cilantro.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax herb mint' data-ratio='-0.1' src='./img/template/phobulous/mint.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax herb onions' data-ratio='-0.1' src='./img/template/phobulous/sliced-green-onions.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>*/}
                        {/* Condiment bowls */}
                        {/*<img class='floating-element js-parallax small-bowl bowl-chili' data-ratio='-0.1' src='./img/template/phobulous/condiment-chili.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax small-bowl bowl-cilantro' data-ratio='-0.1' src='./img/template/phobulous/condiment-cilantro.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax small-bowl bowl-lime' data-ratio='-0.1' src='./img/template/phobulous/condiment-lime.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>
                        <img class='floating-element js-parallax small-bowl bowl-onion' data-ratio='-0.1' src='./img/template/phobulous/condiment-onion.png' alt='' style='transform: translateY(-54.95px) translateZ(0px);'>*/}
                        <img className='floating-element js-parallax leaf' data-ratio='0.5' src='./img/template/phobulous/leaf.png' alt style={{transform: 'translateY(-54.95px) translateZ(0px) rotate(90deg)'}} />
                        {/*<img class='floating-element js-parallax tomato' data-ratio='-2' src='./img/template/phobulous/tomato.png' alt='' style='transform: translateY(-549.5px) translateZ(0px);'>*/}
                        <img className='floating-element js-parallax leaf-3' data-ratio='0.3' src='./img/template/phobulous/leaf-3.png' alt style={{transform: 'translateY(27.475px) translateZ(0px)'}} />
                        <img className='floating-element js-parallax leaf-4' data-ratio='2.1' src='./img/template/phobulous/leaf-4.png' alt style={{transform: 'translateY(-54.95px) translateZ(0px)'}} />
                        <img className='floating-element js-parallax leaf-5' data-ratio='0.8' src='./img/template/phobulous/leaf-5.png' alt style={{transform: 'translateY(-208.81px) translateZ(0px)'}} />
                        <img className='floating-element js-parallax leaf-11' data-ratio='0.8' src='./img/template/phobulous/leaf-11.png' alt style={{transform: 'translateY(-208.81px) translateZ(0px)'}} />
                        <img className='floating-element js-parallax leaf-12' data-ratio='0.4' src='./img/template/phobulous/leaf-12.png' alt style={{transform: 'translateY(-109.9px) translateZ(0px)'}} />
                        <img className='floating-element js-parallax leaf-13' data-ratio='0.15' src='./img/template/phobulous/leaf-13.png' alt style={{transform: 'translateY(-109.9px) translateZ(0px)'}} />
                    </div>
                </div>
            </div>
        )
    }
}