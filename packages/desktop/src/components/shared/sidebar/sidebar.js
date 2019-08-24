import React from 'react'
import { useSelector } from 'react-redux';
import Icons from './components/icons';
import Bids from '../../bids'

const Sidebar = () => {
  const siderOpen = useSelector(state => state.navigation.siderOpen);
  return (
    <div className="sidebar collapsed flex">
        <Icons />
    </div>
  )
}

export default Sidebar;
