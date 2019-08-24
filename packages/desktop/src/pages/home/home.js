import React, { useEffect }  from 'react'
import Nav from '../../components/shared/nav'
import Sidebar from '../../components/shared/sidebar'
import Browser from '../../components/shared/browser';



const Home = () => {
  return (
    <div class="canvas flex">
      <div class="top">
        <Nav/>
      </div>
      <div class="bottom">
        <Sidebar />
        <Browser />   
      </div>   
    </div>
  )
}

export default Home;
