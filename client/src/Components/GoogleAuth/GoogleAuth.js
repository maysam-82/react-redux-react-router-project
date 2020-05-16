import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component {
	componentDidMount() {
		// after `client:auth2` has been loaded, callback will be executed
		window.gapi.load('client:auth2', () => {
			// `window.gapi.client.init` will return a promise and we can use it as soon as we return data back.
			window.gapi.client
				.init({
					clientId: process.env.REACT_APP_CLIENT_ID,
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					// `get` method is located in the `__proto__` of `isSignedIn` object.
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isUserSignedIn) => {
		if (isUserSignedIn) {
			// pass google Id of the user to signIn for future use.
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClickedHandler = () => {
		this.auth.signIn();
	};
	onSignOutClickedHandler = () => {
		this.auth.signOut();
	};

	renderAuthButton = () => {
		const { isUserSignedIn } = this.props;
		switch (isUserSignedIn) {
			case false:
				return (
					<button
						className="ui blue google button"
						onClick={this.onSignInClickedHandler}
					>
						<i className="google icon" />
						Signin With Google
					</button>
				);
			case true:
				return (
					<button
						className="ui red google button"
						onClick={this.onSignOutClickedHandler}
					>
						<i className="google icon" />
						Signout
					</button>
				);
			default:
				return null;
		}
	};

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isUserSignedIn: state.auth.isUserSignedIn,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
