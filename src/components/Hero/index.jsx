import React from 'react';
import VideoCover from 'react-video-cover';
import { Container, Content, Bg } from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';

class Hero extends React.Component {
	constructor(props) {
		super(props);
		this.clickScroll = this.clickScroll.bind(this);
	}
	clickScroll() {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: window.innerHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	render() {
		const { videosrc, imgfilename, vectorportrait, vectorlandscape, children, nomore, minheight } = this.props;
		const videoOptions = {
			src: videosrc,
			ref: (videoRef) => {
				this.videoRef = videoRef;
			},
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true,
		};
		return (
			<Container minheight={minheight}>
				<Content>
					<div className="wrap">{children}</div>
					{!nomore && (
						<div className="more" onClick={this.clickScroll}>
							Ver Video
							<FontAwesomeIcon className="icon" icon={[ 'far', 'play-circle' ]} />
						</div>
					)}
				</Content>
				<Bg>
					{imgfilename && <Image filename={imgfilename} alt="" />}
				</Bg>
			</Container>
		);
	}
}

export default Hero;
