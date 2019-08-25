import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
import { toggleSider, siteNavigation  } from '../../redux/actions/actionCreators/siteNavigation';

const Bids = () => {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(toggleSider(false))
    dispatch(siteNavigation(10))
  }

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
        <Button size="large" shape="circle" onClick={() => closeMenu()}>
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


      {/* <section id="no_bids_yet">
        <div className="sidebar_inner_content_msg">
          <h3>Bids be here</h3>
          <p>No bids yet.</p>
        </div>
        <div className="button_box">
            <Button type="primary">Create Bid</Button>
          </div>
      </section> */}

      
      <section id="bids_home">
        <div className="button_box">
          <Button type="primary">+ New bid</Button>
        </div>
      </section>

      <section id="bids_new">
        <div className="newbid">
          <Input placeholder="Company Name" />
          <TextArea
            placeholder="Advertisement Description"
            autosize={{ minRows: 4, maxRows: 10 }}
          />
          <Input placeholder="Advertising Time Period" suffix="days" />
          <Input placeholder="Bid Price" suffix="ETH" />
        </div>
        <div className="newbid_button_box">
          <Button type="primary">Submit</Button>
        </div>
      </section>


        
      <div className="bid_box flex">

      <div className="bid_content flex">
        <p className="bidconditions">57 ETH - 3 days</p>
        <p className="companyname">Company Name</p>
        <p className="biddescr">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent vel ligula purus.
        Etiam vel posuere nisi, sed volutpat lorem. Vivamus tempor
        sem nec purus vestibulum iaculis. </p>
      </div>

      <div className="bid_voters flex">
        <Button>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
            <g>
              <path className="st0" d="M19.5,33.5l-9.8-9.8c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l7,7l14-14c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8
                L19.5,33.5z"/>
            </g>
          </svg>
        </Button>
        <Button>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
            <path className="st0" d="M30.4,30l-6.8-6.8l6.8-6.8c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1c-0.6-0.6-1.6-0.6-2.2,0L21.4,21l-6.8-6.8
            c-0.6-0.6-1.6-0.6-2.2,0c-0.3,0.3-0.5,0.7-0.5,1.1c0,0.4,0.2,0.8,0.5,1.1l6.8,6.8L12.4,30c-0.6,0.6-0.6,1.6,0,2.2
            c0.6,0.6,1.6,0.6,2.2,0l6.8-6.8l6.8,6.8c0.6,0.6,1.6,0.6,2.2,0C31,31.6,31,30.6,30.4,30z"/>
          </svg>

        </Button>
      </div>
      <div className="bid_content flex">
        <p className="votessofar">4 of 9 voters accepted this bid, 2 of 9 voters declined.</p>
      </div>
      </div>

      <div className="bid_box flex">

      <div className="bid_content flex">
      <p className="bidconditions">57 ETH - 3 days</p>
      <p className="companyname">Company Name</p>
      <p className="biddescr">
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent vel ligula purus.
      Etiam vel posuere nisi, sed volutpat lorem. Vivamus tempor
      sem nec purus vestibulum iaculis. </p>
      </div>

      <div className="bid_voters flex">
      <Button>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
          <g>
            <path className="st0" d="M19.5,33.5l-9.8-9.8c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l7,7l14-14c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8
              L19.5,33.5z"/>
          </g>
        </svg>
      </Button>
      <Button>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
          <path className="st0" d="M30.4,30l-6.8-6.8l6.8-6.8c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1c-0.6-0.6-1.6-0.6-2.2,0L21.4,21l-6.8-6.8
          c-0.6-0.6-1.6-0.6-2.2,0c-0.3,0.3-0.5,0.7-0.5,1.1c0,0.4,0.2,0.8,0.5,1.1l6.8,6.8L12.4,30c-0.6,0.6-0.6,1.6,0,2.2
          c0.6,0.6,1.6,0.6,2.2,0l6.8-6.8l6.8,6.8c0.6,0.6,1.6,0.6,2.2,0C31,31.6,31,30.6,30.4,30z"/>
        </svg>

      </Button>
      </div>
      <div className="bid_content flex">
        <p className="votessofar">4 of 9 voters accepted this bid, 2 of 9 voters declined.</p>
      </div>
      </div>


    </div>
  )
}

export default Bids;
