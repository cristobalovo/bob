import React from 'react';
import { Button } from 'antd';

// TODO: implement this with bids
const Bid = ({ data }) => {
  const { conditions, company, desc } = data;
  
	return (
		<div className="bid_box flex">
			<div className="bid_content flex">
				<p className="bidconditions">
          { conditions  }
        </p>
				<p className="companyname">
          { company  }
        </p>
				<p className="biddescr">
          { desc }
        </p>
			</div>

			<div className="bid_voters flex">
				<Button>
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
						<g>
							<path className="st0" d="M19.5,33.5l-9.8-9.8c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l7,7l14-14c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8
								L19.5,33.5z"/>
						</g>
					</svg>
				</Button>
				<Button>
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
						<path className="st0" d="M30.4,30l-6.8-6.8l6.8-6.8c0.3-0.3,0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1c-0.6-0.6-1.6-0.6-2.2,0L21.4,21l-6.8-6.8
						c-0.6-0.6-1.6-0.6-2.2,0c-0.3,0.3-0.5,0.7-0.5,1.1c0,0.4,0.2,0.8,0.5,1.1l6.8,6.8L12.4,30c-0.6,0.6-0.6,1.6,0,2.2
						c0.6,0.6,1.6,0.6,2.2,0l6.8-6.8l6.8,6.8c0.6,0.6,1.6,0.6,2.2,0C31,31.6,31,30.6,30.4,30z"/>
					</svg>
				</Button>
			</div>
			<div className="bid_content flex">
				<p className="votessofar">4 of 9 voters accepted this bid, 2 of 9 voters declined.</p>
			</div>
		</div>
	)
}

export default Bid;