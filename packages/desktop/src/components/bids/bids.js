import React from 'react'
import { Button } from 'antd';

const Bids = () => {
  return (
    <div className="sidebar_inner expanded flex">
      <div className="sidebar_inner_title flex">
        <div className="sidebar_inner_title_icon bids_icon">
            <svg x="0px" y="0px" viewBox="0 0 47 29.6">
                <g>
                    <path className="st3" d="M35,11.1c-0.4-0.4-1-0.4-1.4,0l-8.3,8.3l-3.8-3.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.2,5.2l9.7-9.7
                        C35.4,12.1,35.4,11.5,35,11.1z"/>
                    <polygon className="st3" points="12.8,8.4 31.8,8.4 31.8,9.2 32.8,9.2 32.8,7.4 11.8,7.4 11.8,21.1 20.4,21.1 20.4,20.1 12.8,20.1 	"/>
                    <polygon className="st3" points="31.8,20.1 30,20.1 30,21.1 32.8,21.1 32.8,18.1 31.8,18.1 	"/>
                </g>
            </svg>
        </div>
        <div className="spacer"></div>
        <Button size="large" shape="circle">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 38.1 36.8">
          <g>
            <path className="st0" d="M26.5,26.9c-0.3,0-0.5-0.1-0.7-0.3l-15-15c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l15,15c0.4,0.4,0.4,1,0,1.4
              C27,26.8,26.8,26.9,26.5,26.9z"/>
          </g>
          <g>
            <path className="st0" d="M11.6,26.9c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l15-15c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-15,15
              C12.1,26.8,11.8,26.9,11.6,26.9z"/>
          </g>
        </svg>

      </Button>
      </div>
      <section id="no_dao_yet">
        <div className="sidebar_inner_content_msg">
          <h3>Bids be here</h3>
          <p>No bids yet.</p>
        </div>
        <div className="button_box">
            <Button type="primary">Create Bid</Button>
          </div>
      </section>
    </div>
  )
}

export default Bids;
