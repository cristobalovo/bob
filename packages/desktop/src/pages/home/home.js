import React, { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux';
import Nav from '../../components/shared/nav'
import Sidebar from '../../components/shared/sidebar'
import Browser from '../../components/shared/browser';
import Finance from '../../components/finance';

const Home = () => {
  const siderOpen = useSelector(state => state.navigation.siderOpen);

  return (
    <div className="canvas flex">
      <div className="top">
        <Nav/>
      </div>
      <div className="bottom flex">
        {
          siderOpen ? <Sidebar /> : <Finance />
        }
        <Browser />
      </div>
    </div>
  )
}

export default Home;
