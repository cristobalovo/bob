import React from 'react'
import Nav from '../../components/shared/nav'
import Browser from '../../components/shared/browser';
import Overlay from '../../components/shared/overlay';

const Home = () => {
  return (
    <div className="canvas flex">
      <div className="top">
        <Nav/>
      </div>
      <div className="bottom flex">
        <Overlay />
        <Browser />
      </div>
    </div>
  )
}

export default Home;
