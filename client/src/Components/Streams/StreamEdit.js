import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
class StreamEdit extends Component {
	componentDidMount() {
		// While user directly request this page, according to react-router component should fetch data again in its scope.
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		return <div>Stream Edit</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
