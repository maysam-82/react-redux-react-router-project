import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';
class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdminElements = (userId, id) => {
		if (userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${id}`} className="ui button primary">
						Edit
					</Link>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	};

	renderStreamList() {
		return this.props.streams.map(({ title, description, id, userId }) => {
			return (
				<div className="item" key={id}>
					{this.renderAdminElements(userId, id)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{title}
						<div className="description">{description}</div>
					</div>
				</div>
			);
		});
	}

	renderCreateButton = () => {
		if (this.props.isUserSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderStreamList()}</div>
				{this.renderCreateButton()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		// Using Object.value to turn object to array of streams
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isUserSignedIn: state.auth.isUserSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
