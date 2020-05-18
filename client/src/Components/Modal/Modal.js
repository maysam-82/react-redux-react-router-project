// Creating Modal with React Portal
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, description, actions, onDismissed }) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active" onClick={onDismissed}>
			{/* (event)=> event.stopPropagation() to avoid event bubbling called from child to parent and dismiss the form while clicking not on overlay. */}
			<div
				onClick={(event) => event.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">{title}</div>
				<div className="content">{description}</div>
				<div className="actions">{actions}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
