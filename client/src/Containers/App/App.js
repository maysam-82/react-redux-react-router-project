import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from '../../Components/Streams/StreamList';
import StreamCreate from '../../Components/Streams/StreamCreate';
import StreamDelete from '../../Components/Streams/StreamDelete';
import StreamEdit from '../../Components/Streams/StreamEdit';
import StreamShow from '../../Components/Streams/StreamShow';
import Header from '../../Components/Header/Header';
import history from '../../history';

class App extends Component {
	render() {
		return (
			<div className="ui container">
				{/* To avoid getting error while adding our history object, we should replace BrowserRouter with Plain Router (Router)
				Anytime we pass history props into Router, react-dom will use it instead of default implementation
				*/}
				{/* Important Note: 
				With React-Router, each component needs to be created to work on its own and fetch its own data if needed.
				*/}
				<Router history={history}>
					<div>
						<Header />
						<Switch>
							{/* Switch will look at all following Routes and only show one of them and it will not render other Routes below that one. */}
							<Route path="/" exact component={StreamList}></Route>
							<Route path="/streams/new" exact component={StreamCreate}></Route>
							<Route
								path="/streams/delete/:id"
								exact
								component={StreamDelete}
							></Route>
							<Route
								path="/streams/edit/:id"
								exact
								component={StreamEdit}
							></Route>
							<Route path="/streams/:id" exact component={StreamShow}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
