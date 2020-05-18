// Creating Modal with React Portal
import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			className="ui dimmer modals visible active"
			onClick={() => history.push('/')}
		>
			{/* (event)=> event.stopPropagation() to avoid event bubbling called from child to parent and dismiss the form while clicking not on overlay. */}
			<div
				onClick={(event) => event.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">Delete Stream</div>
				<div className="content">Are you sure to delete this stream?</div>
				<div className="actions">
					<button className="ui button negative">Delete</button>
					<button className="ui button">Cancel</button>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
