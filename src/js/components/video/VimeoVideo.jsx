import React, { Component } from 'react'

import { Popup } from 'react-magnific-popup'

const popupConfig = {
	type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 500,
    gallery: {
        enabled: true
    }
}

class VimeoVideo extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        /*let videoBtn = document.querySelectorAll('.video-popup-btn, .gallery-video, .video-popup-placeholder .play-btn')
        
        if (videoBtn.length > 0) {
            videoBtn.magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 500,
                gallery: {
                enabled: true
                }
            })
        }*/
    }
    
    render() {
        return (
            <div className='ace-video-wrapper fw-section padding-top-3x'>
                <div className='ace-video'>
                  <div className='container padding-top-3x padding-bottom-3x text-center'>
                    <div className='space-top-3x space-bottom'>
                      {/* Add '.light-skin' class to alter appearance. */}
                      <Popup
                          className='popup-vimeo'
                          href='https://player.vimeo.com/video/245274383?color=77cde3&title=0&byline=0&portrait=0'
                          config={popupConfig}>
                          <a href='https://player.vimeo.com/video/245274383?color=77cde3&title=0&byline=0&portrait=0' className='video-popup-btn'>
                            <i className='material-icons play_arrow' />
                          </a>
                          <h3 className='padding-top-2x padding-bottom-2x'>The ACE Coffee Story</h3>
                      </Popup>
                    </div>
                  </div>
                </div>
                
                
                {/*<p>
                    <Popup 
                      className="popup-youtube" 
                      href="http://www.youtube.com/watch?v=0O2aH4XLbto" 
                      savefrom_lm_index="0" 
                      savefrom_lm="1"
                      config={popupConfig}>
                        Open YouTube video
                    </Popup>
                  </p>
                  <p>
                    <Popup 
                      className="popup-vimeo" 
                      href="https://vimeo.com/45830194"
                      config={popupConfig}
                      >
                        Open Vimeo video
                    </Popup>
                  </p>
                  <p>
                    <Popup 
                      className="popup-gmaps" 
                      config={popupConfig}
                      href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                      >
                        Open Google Map
                    </Popup>
                </p>*/}
            </div>
        )
    }
}

export default VimeoVideo