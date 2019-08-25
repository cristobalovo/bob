import React from 'react'
import { Button } from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;

const Chat = () => {
  return (
<div className="sidebar_inner expanded flex">
      <div className="sidebar_inner_title flex">
          <div className="sidebar_inner_title_icon post_icon">
          <svg x="0px" y="0px" viewBox="0 0 49 42.6">
            <g id="CHAT" transform="translate(-55 -272)">
                <path className="st3" d="M92,291.9c0-5.2-4.2-9.4-9.4-9.4h-6.1c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4h6.1
                    C87.8,301.3,92,297.1,92,291.9z M68,291.9c0-4.6,3.8-8.4,8.4-8.4h6.1c4.6,0,8.4,3.8,8.4,8.4s-3.8,8.4-8.4,8.4h-6.1
                    C71.8,300.3,68,296.5,68,291.9z"/>
                <g id="Path_55">
                    <polygon className="st3" points="68.9,304.2 68.9,297.5 69.9,297.5 69.9,302.5 74,300.1 74.5,301    "/>
                </g>
                <g id="Ellipse_18">
                    <circle className="st3" cx="76.4" cy="291.9" r="0.8"/>
                </g>
                <g id="Ellipse_19">
                    <circle className="st3" cx="79.5" cy="291.9" r="0.8"/>
                </g>
                <g id="Ellipse_20">
                    <circle className="st3" cx="82.6" cy="291.9" r="0.8"/>
                </g>
            </g>
        </svg>
        </div>
        <div className="spacer">
        </div>
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
      <div className="chat_canvas flex">
        <div className="chat_mymsg flex">
          <p className="name">Ben - yesterday, 22:55</p>
          <p className="msg">Just droppin a line here</p>
        </div>
        <div className="chat_mymsg flex">
          <p className="name">Ben - yesterday, 22:55</p>
          <p className="msg">Joooo what's good fam</p>
        </div>
        <div className="chat_theirmsg flex">
          <p className="name">Bob - yesterday, 22:55</p>
          <p className="msg">What's crackin</p>
        </div>
      </div>
      <div className="chat_input flex">
        <TextArea
            placeholder="Your chatmessage"
            autosize={{ minRows: 2, maxRows: 2 }}
          />
        <Button>
          <svg x="0px" y="0px" viewBox="0 0 49 42.6">
            <g id="CHAT" transform="translate(-55 -272)">
                  <path className="st4" d="M92,291.9c0-5.2-4.2-9.4-9.4-9.4h-6.1c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4h6.1
                      C87.8,301.3,92,297.1,92,291.9z M68,291.9c0-4.6,3.8-8.4,8.4-8.4h6.1c4.6,0,8.4,3.8,8.4,8.4s-3.8,8.4-8.4,8.4h-6.1
                      C71.8,300.3,68,296.5,68,291.9z"/>
                  <g id="Path_55">
                      <polygon className="st4" points="68.9,304.2 68.9,297.5 69.9,297.5 69.9,302.5 74,300.1 74.5,301    "/>
                  </g>
                  <g id="Ellipse_18">
                      <circle className="st4" cx="76.4" cy="291.9" r="0.8"/>
                  </g>
                  <g id="Ellipse_19">
                      <circle className="st4" cx="79.5" cy="291.9" r="0.8"/>
                  </g>
                  <g id="Ellipse_20">
                      <circle className="st4" cx="82.6" cy="291.9" r="0.8"/>
                  </g>
              </g>
            </svg>
        </Button>
      </div>
    </div>
  )
}

export default Chat;
