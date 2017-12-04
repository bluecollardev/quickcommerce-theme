import React, { Component } from 'react'

export default class VimeoVideo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='ace-video-wrapper fw-section space-top-2x padding-top-3x'>
                <div className='ace-video'>
                  <div className='container padding-top-3x padding-bottom-3x text-center'>
                    <div className='space-top-3x space-bottom'>
                      {/* Add '.light-skin' class to alter appearance. */}
                      <a href='https://player.vimeo.com/video/245274383?color=77cde3&title=0&byline=0&portrait=0' className='video-popup-btn'>
                        <i className='material-icons play_arrow' />
                      </a>
                      <h3 className='padding-top-2x padding-bottom-2x'>The ACE Coffee Story</h3>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}