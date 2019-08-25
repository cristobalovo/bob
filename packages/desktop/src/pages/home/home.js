import React, { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux';
import Nav from '../../components/shared/nav'
import Sidebar from '../../components/shared/sidebar'
import Browser from '../../components/shared/browser';
import Finance from '../../components/finance';
import Posts from '../../components/post';
import Chat from '../../components/finance';
import Bids from '../../components/bids';
// import { siteNavigation } from '../../redux/actions/actionCreators/siteNavigation';

const Home = () => {
  const nav = useSelector(state => state.navigation);
  const { sideNavIndex, siderOpen } = nav;

  return (
    <div className="canvas flex">
      <div className="top">
        <Nav/>
      </div>
      <div className="bottom flex">
        <Finance />
        {/* {
          siderOpen ? <Sidebar /> : null
        }
        {
          sideNavIndex === 0 && siderOpen ? <Posts /> : null
        }
        {
          sideNavIndex === 1 && siderOpen ? <Finance /> : null
        }
        {
          sideNavIndex === 2 && siderOpen ? <Chat /> : null
        }
        {
          sideNavIndex === 3 && siderOpen ? <Bids /> : null
        } */}
        <Browser />
      </div>
    </div>
  )
}

export default Home;
