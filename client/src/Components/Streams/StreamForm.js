import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
	// `formProps`  is props which has come from redux-form and container value and event handler such as onChange which we used in React without redux.
	// meta prop object contains error message and some other properties.
	renderInput = ({ input, label, meta }) => {
		// `{...input} will take formProps.input property and take all key value pairs inside this object and add them as properties to the input element `
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label htmlFor="">{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};
	// touched mean user select input and deselect it.
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};
	// `handleSubmit` will take care of event object in Redux-Form.
	// formValues or whatever value exits inside form element inputs.
	onSubmitFormHandler = (formValues) => {
		this.props.onSubmit(formValues);
	};
	render() {
		return (
			// to show errors we need to add Semantic UI error class to the form; otherwise, it will be hidded by default.
			<form
				className="ui form error"
				// `handleSubmit` will take care of event object  in Redux-Form.
				onSubmit={this.props.handleSubmit(this.onSubmitFormHandler)}
			>
				{/* label is an extra prop we add to Field component */}
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

// Form validation with Redux-Form
const validate = (formValues) => {
	const error = {};
	if (!formValues.title) {
		// all properties of error object must be same as name props in Field component inside render function. (title)
		error.title = 'You must enter a title.';
	}
	if (!formValues.description) {
		// all properties of error object must be same as name props in Field component inside render function.(description)
		error.description = 'You must enter a description.';
	}
	return error;
};

export default reduxForm({
	form: 'streamForm',
	validate,
})(StreamForm);
