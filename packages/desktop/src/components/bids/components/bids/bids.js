import React, { Fragment } from 'react';
import Bid from '../bid';
import mockData from './data.json';

const Bids = () => {
  return (
		<Fragment>
			{ 
				mockData && 
				mockData.length > 0 &&
				mockData.map((bidItem, i) => {
					console.log({ bidItem });
					
					return (
						<Bid 
							key={i} // TODO: use unique ID lib
							data={bidItem}
						/>
					)
				})
			}
		</Fragment>
	)
}

export default Bids;