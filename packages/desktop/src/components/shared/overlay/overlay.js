import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Posts from '../../post';
import Finance from '../../finance';
import Chat from '../../chat';
import Bids from '../../bids';
import Sidebar from '../sidebar';

const Overlay = () => {
	const nav = useSelector(state => state.navigation);
  const { sideNavIndex, siderOpen } = nav;

  const getOverlay = () => {
    if(!siderOpen) return <div></div>;
    if (siderOpen && sideNavIndex === 10 ) return <Sidebar />;
    switch (sideNavIndex) {
      case 0: 
        return <Posts />;
        break;
      case 1: 
        return  <Finance />;
        break;
      case 2:
        return <Chat />;
        break;
      case 3:
       return <Bids />;
       break;
      default: return <div> </div>
    }
	}
	
  return (
		<div>
			 { getOverlay() }
		</div>
	)
}

export default Overlay;