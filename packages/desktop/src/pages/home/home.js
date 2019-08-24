import React, { useEffect }  from 'react'
import Nav from '../../components/shared/nav'
import Sidebar from '../../components/shared/sidebar'
import Browser from '../../components/shared/browser';



const Home = () => {
  return (
    <div className="canvas flex">
      <div className="top">
        <Nav/>
      </div>
      <div className="bottom flex">
        <Sidebar />
        <Browser />
      </div>
    </div>
  )
}

export default Home;
