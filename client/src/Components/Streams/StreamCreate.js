import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
	onSubmitFormHandler = (formValues) => {
		this.props.createStream(formValues);
	};
	render() {
		return (
			<div>
				<h3>Create an Stream</h3>
				<StreamForm onSubmit={this.onSubmitFormHandler} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
