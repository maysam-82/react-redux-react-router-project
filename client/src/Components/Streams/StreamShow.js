import React, { Component } from 'react';
import { connect } from 'react-redux';
// flv will download the video stream and convert it to some file that can be played inside normal html video player.
import flv from 'flv.js';
import { fetchStream } from '../../actions/index';

class StreamShow extends Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
		this.buildPlayer();
	}
	componentDidUpdate() {
		// When the component fetch the stream in the future successfully
		this.buildPlayer();
	}

	// clean up video player
	componentWillUnmount() {
		this.player.destroy();
	}
	buildPlayer() {
		if (this.player || !this.props.stream) {
			return;
		}
		const { id } = this.props.match.params;
		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`,
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading....</div>;
		}
		const { title, description } = this.props.stream;

		return (
			<div>
				<video ref={this.videoRef} style={{ width: '100%' }} controls />
				<h1>{title}</h1>
				<h5>{description}</h5>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
