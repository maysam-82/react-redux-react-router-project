import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import history from '../../history';
import { fetchStream, deleteStreams } from '../../actions';
class StreamDelete extends Component {
	componentDidMount() {
		// While user directly request or refresh this page, according to react-router component should fetch data again in its scope.
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions = () => {
		const { id } = this.props.match.params;
		// create a JSX Fragment and pass it to modal as a props
		return (
			<Fragment>
				<button
					onClick={() => this.props.deleteStreams(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</Fragment>
		);
	};

	renderContent = () => {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		} else {
			return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`;
		}
	};

	render() {
		return (
			<Modal
				title="Delete an Stream"
				description={this.renderContent()}
				actions={this.renderActions()}
				onDismissed={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStreams })(
	StreamDelete
);
