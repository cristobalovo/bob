import React, { Fragment } from 'react'
import NewBid from './components/newBid';
import Bids from './components/bids';

const BidFeed = () => {
  return (
    <Fragment>
      <NewBid />
      <Bids />
    </Fragment>
  )
}

export default BidFeed;
