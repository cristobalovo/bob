import React from 'react'

// NOTE: just map a message component
const Messsages = () => {
  return (
  	<div className="chat_canvas flex">
			<div className="chat_mymsg flex">
				<p className="name">Ben - yesterday, 22:55</p>
				<p className="msg">Just droppin a line here</p>
			</div>
			<div className="chat_mymsg flex">
				<p className="name">Ben - yesterday, 22:55</p>
				<p className="msg">Joooo what's good fam</p>
			</div>
			<div className="chat_theirmsg flex">
				<p className="name">Bob - yesterday, 22:55</p>
				<p className="msg">What's crackin</p>
			</div>
    </div>
  )
}

export default Messsages;
