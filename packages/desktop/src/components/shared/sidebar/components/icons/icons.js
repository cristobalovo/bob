import React from 'react';
import { useDispatch } from 'react-redux'
import { Button } from 'antd';
import { siteNavigation } from '../../../../../redux/actions/actionCreators/siteNavigation';

const Icons = () => {
	const dispatch = useDispatch();

	const handleChange = (index) => {
		console.log({ index });
		dispatch(siteNavigation(index))
	}

	return (
		<div className="icons flex">
			<Button id="topicsbtn" size="large" onClick={() => handleChange(0)}>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 46.7 36.2">
						<path className="st0" d="M31.4,8.7l-0.4,0v0h-1v0l-11.2,0v6.1l-7.2,0V27h16.2v-6.1H35v-7.3v-1v-0.3L31.4,8.7z M26.8,26H12.7V15.8l6.2,0
						v5h8V26z M31.1,12.5V9.7l2.8,2.8H31.1z M34,13.6v6.3H19.8V9.7l10.2,0v3.9H34z"/>
				</svg>
			</Button>

			<Button id="investbtn" size="large" onClick={() => handleChange(1)}>
					<svg x="0px" y="0px" viewBox="0 0 38.1 36.8">
							<path className="st0" d="M24.3,9.2c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.1l-7.3,7.3L16,14.4l-6.3,6.3c-0.2,0.2-0.2,0.5,0,0.7
									c0.1,0.1,0.2,0.1,0.4,0.1s0.3,0,0.4-0.1l5.6-5.6l3.1,3.1l8-8V13c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V9.2H24.3z"/>
							<path className="st0" d="M10.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-2.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2.5
									C10.6,27.4,10.4,27.6,10.1,27.6z"/>
							<path className="st0" d="M13.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-4.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v4.6
									C13.6,27.4,13.4,27.6,13.1,27.6z"/>
							<path className="st0" d="M16.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-6.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v6.5
									C16.6,27.4,16.4,27.6,16.1,27.6z"/>
							<path className="st0" d="M19.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-4.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v4.5
									C19.6,27.4,19.4,27.6,19.1,27.6z"/>
							<path className="st0" d="M22.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-6.7c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v6.7
									C22.6,27.4,22.4,27.6,22.1,27.6z"/>
							<path className="st0" d="M25.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-9c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v9C25.6,27.4,25.4,27.6,25.1,27.6z
									"/>
							<path className="st0" d="M28.1,27.6c-0.3,0-0.5-0.2-0.5-0.5v-10c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v10
									C28.6,27.4,28.4,27.6,28.1,27.6z"/>
					</svg>
			</Button>

			<Button id="chatbtn" size="large" onClick={() => handleChange(2)}>
					<svg x="0px" y="0px" viewBox="0 0 49 42.6">
							<g id="CHAT" transform="translate(-55 -272)">
									<path className="st0" d="M92,291.9c0-5.2-4.2-9.4-9.4-9.4h-6.1c-5.2,0-9.4,4.2-9.4,9.4c0,5.2,4.2,9.4,9.4,9.4h6.1
											C87.8,301.3,92,297.1,92,291.9z M68,291.9c0-4.6,3.8-8.4,8.4-8.4h6.1c4.6,0,8.4,3.8,8.4,8.4s-3.8,8.4-8.4,8.4h-6.1
											C71.8,300.3,68,296.5,68,291.9z"/>
									<g id="Path_55">
											<polygon className="st0" points="68.9,304.2 68.9,297.5 69.9,297.5 69.9,302.5 74,300.1 74.5,301 		"/>
									</g>
									<g id="Ellipse_18">
											<circle className="st0" cx="76.4" cy="291.9" r="0.8"/>
									</g>
									<g id="Ellipse_19">
											<circle className="st0" cx="79.5" cy="291.9" r="0.8"/>
									</g>
									<g id="Ellipse_20">
											<circle className="st0" cx="82.6" cy="291.9" r="0.8"/>
									</g>
							</g>
					</svg>
			</Button>

			<Button id="bidsbtn" size="large" onClick={() => handleChange(3)}>
					<svg x="0px" y="0px" viewBox="0 0 47 29.6">
							<g>
									<path className="st0" d="M35,11.1c-0.4-0.4-1-0.4-1.4,0l-8.3,8.3l-3.8-3.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.2,5.2l9.7-9.7
											C35.4,12.1,35.4,11.5,35,11.1z"/>
									<polygon className="st0" points="12.8,8.4 31.8,8.4 31.8,9.2 32.8,9.2 32.8,7.4 11.8,7.4 11.8,21.1 20.4,21.1 20.4,20.1 12.8,20.1 	"/>
									<polygon className="st0" points="31.8,20.1 30,20.1 30,21.1 32.8,21.1 32.8,18.1 31.8,18.1 	"/>
							</g>
					</svg>
			</Button>

			<div className="spacer" onClick={() => handleChange(4)}>
			<Button id="userbtn" size="large">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42.5 42.6">
							<path className="st0" d="M21.3,23.3c-4,0-7.2,2.8-7.2,6.2v1.4h14.5v-1.4C28.5,26.1,25.3,23.3,21.3,23.3 M21.3,22.3c4.6,0,8.2,3.2,8.2,7.2v2.4H13
									v-2.4C13,25.5,16.7,22.3,21.3,22.3z"/>
							<path className="st0" d="M21.6,10.6c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1S24.4,10.6,21.6,10.6z M21.6,11.6c2.3,0,4.1,1.8,4.1,4.1
									s-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1S19.3,11.6,21.6,11.6z"/>
					</svg>
			</Button>
			</div>

		</div>
	)
}

export default Icons;