import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends Component {
	componentDidMount() {
		// While user directly request this page, according to react-router component should fetch data again in its scope.
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmitFormHandler = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		return (
			<div>
				<h3>Edit an Stream</h3>
				{/* We can pass initial values to redux-form as an specific props called `initialValues`. Redux-form will take this props and pass it to out StreamForm component as it is a higher-order-component */}
				{this.props.stream ? (
					<StreamForm
						onSubmit={this.onSubmitFormHandler}
						// adding `title` and `description` to `initialValues` props because in StreamForm we create to Field component with name of `title` and `description` and this way will connect this object to those fields.
						// To avoid passing extra properties like userId or id which do not change while editing, we can use `pick` method from lodash.
						initialValues={_.pick(this.props.stream, 'title', 'description')}
					/>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
