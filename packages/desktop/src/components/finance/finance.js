import React, { Fragment } from 'react'
import DeployDomain from './components/deployDomain';
import Invested from './components/invested';
import NotInvested from './components/notInvested';

const Finance = () => {
  return (  
    <Fragment>
      <DeployDomain />
      <Invested />
      <NotInvested />
    </Fragment>
  )
}

export default Finance;
