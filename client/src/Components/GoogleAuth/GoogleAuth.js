import React, { Component } from 'react';

class GoogleAuth extends Component {
	state = {
		isLoggedIn: null,
	};
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
					this.onAuthChange();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isLoggedIn: this.auth.isSignedIn.get() });
	};

	onSignInHandler = () => {
		this.auth.signIn();
	};
	onSignOutHandler = () => {
		this.auth.signOut();
	};

	renderAuthButton = () => {
		console.log(this.state);
		const { isLoggedIn } = this.state;
		switch (isLoggedIn) {
			case false:
				return (
					<button
						className="ui blue google button"
						onClick={this.onSignInHandler}
					>
						<i className="google icon" />
						Signin With Google
					</button>
				);
			case true:
				return (
					<button
						className="ui red google button"
						onClick={this.onSignOutHandler}
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

export default GoogleAuth;
