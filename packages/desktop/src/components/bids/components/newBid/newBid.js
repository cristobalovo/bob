import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;

const NewBid = () => {
  const dispatch = useDispatch();
  const [newBid, openNewBid] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [adDesc, setAdDesc] = useState("");
  const [timePeriod, setTimePeriod] = useState(0);
  const [bidPrice, setBidPrice] = useState("");

  const createNewBid = () => {
    openNewBid(true);
  }

  const submitBid = () => {
    openNewBid(false);
  }

	// TODO: add validation
	const handleChange = (e) => {
		switch(e.target.name) {
			case "company":
				setCompanyName(e.target.value);
				break;
			case "desc":
				setAdDesc(e.target.value);
				break;
			case "days":
				setTimePeriod(e.target.value);
				break;
			case "price":
				setBidPrice(e.target.value);
				break;
			default: console.log('new bid handle change default case');
		}
	}

  return (
    <Fragment>
      {
        !newBid 
  			? <section id="bids_home">
            <div className="button_box">
              <Button 
                type="primary" 
                onClick={() => createNewBid()}>
                + New bid
              </Button>
            </div>
        	</section>
        : <section id="bids_new">
            <div className="newbid">
              <Input 
                placeholder="Company Name"
								onChange={(e) => handleChange(e)}
								name="company"
                 />
              <TextArea
                placeholder="Advertisement Description"
								autosize={{ minRows: 4, maxRows: 10 }}
								onChange={(e) => handleChange(e)}
								name="desc"
              />
              <Input 
                placeholder="Advertising Time Period" 
								suffix="days" 
								onChange={(e) => handleChange(e)}
								name="days"
                />
              <Input 
                placeholder="Bid Price" 
								suffix="ETH" 
								onChange={(e) => handleChange(e)}
								name="price"
                />
            </div>
            <div className="newbid_button_box">
              <Button type="primary">Submit</Button>
            </div>
          </section>
      }
    </Fragment>
  )
}

export default NewBid;
