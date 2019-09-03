import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { toggleSider, siteNavigation } from '../../../../../redux/actions/actionCreators/siteNavigation';

const Header = ({ index }) => {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(toggleSider(false))
    dispatch(siteNavigation(10))
  }

  return (
    <div className="sidebar_inner_title flex">
      {
        index === 0 &&
        <div className="sidebar_inner_title_icon post_icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 46.7 36.2">
              <path className="st3" d="M31.4,8.7l-0.4,0v0h-1v0l-11.2,0v6.1l-7.2,0V27h16.2v-6.1H35v-7.3v-1v-0.3L31.4,8.7z M26.8,26H12.7V15.8l6.2,0
              v5h8V26z M31.1,12.5V9.7l2.8,2.8H31.1z M34,13.6v6.3H19.8V9.7l10.2,0v3.9H34z"/>
          </svg>
        </div>
      }
      {
        index === 1 &&
        <div className="sidebar_inner_title_icon">
          <svg x="0px" y="0px" viewBox="0 0 38.1 36.8">
                <path className="st3" d="M24.3,9.2c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.1l-7.3,7.3L16,14.4l-6.3,6.3c-0.2,0.2-0.2,0.5,0,0.7
                    c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l5.6-5.6l3.1,3.1l8-8V13c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V9.2H24.3z"/>
                <path className="st3" d="M10.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-2.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2.5
                    C10.6,27.4,10.4,27.6,10.1,27.6z"/>
                <path className="st3" d="M13.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-4.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v4.6
                    C13.6,27.4,13.4,27.6,13.1,27.6z"/>
                <path className="st3" d="M16.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-6.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v6.5
                    C16.6,27.4,16.4,27.6,16.1,27.6z"/>
                <path className="st3" d="M19.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-4.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v4.5
                    C19.6,27.4,19.4,27.6,19.1,27.6z"/>
                <path className="st3" d="M22.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-6.7c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v6.7
                    C22.6,27.4,22.4,27.6,22.1,27.6z"/>
                <path className="st3" d="M25.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-9c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v9C25.6,27.4,25.4,27.6,25.1,27.6z
                    "/>
                <path className="st3" d="M28.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-10c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v10
                    C28.6,27.4,28.4,27.6,28.1,27.6z"/>
            </svg>
        </div>
      }
      {
        index === 3 &&
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
      }
      {
        index === 3 &&  
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
      }
    
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
  )
}
 
export default Header;