import React from 'react'
import { Button } from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;

// NOTE: nothings integrate
const ChatInput = () => {
  return (
		<div className="chat_input flex">
			<TextArea
				placeholder="Your chatmessage"
				autosize={{ minRows: 2, maxRows: 2 }}
			/>
			<Button>
				<svg x="0px" y="0px" viewBox="0 0 49 42.6">
					<g id="CHAT" transform="translate(-55 -272)">
						<path className="st4" d="M92,291.9c0-5.2-4.2-9.4-9.4-9.4h-6.1c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4h6.1
								C87.8,301.3,92,297.1,92,291.9z M68,291.9c0-4.6,3.8-8.4,8.4-8.4h6.1c4.6,0,8.4,3.8,8.4,8.4s-3.8,8.4-8.4,8.4h-6.1
								C71.8,300.3,68,296.5,68,291.9z"/>
						<g id="Path_55">
								<polygon className="st4" points="68.9,304.2 68.9,297.5 69.9,297.5 69.9,302.5 74,300.1 74.5,301    "/>
						</g>
						<g id="Ellipse_18">
								<circle className="st4" cx="76.4" cy="291.9" r="0.8"/>
						</g>
						<g id="Ellipse_19">
								<circle className="st4" cx="79.5" cy="291.9" r="0.8"/>
						</g>
						<g id="Ellipse_20">
								<circle className="st4" cx="82.6" cy="291.9" r="0.8"/>
						</g>
					</g>
				</svg>
			</Button>
		</div>
  )
}

export default ChatInput;
