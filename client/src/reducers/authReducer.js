import * as actionTypes from '../actions/actionTypes';

const INIT_STATE = {
	isUserSignedIn: null,
	userId: null,
};
export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case actionTypes.SIGN_IN:
			return { ...state, isUserSignedIn: true, userId: action.payload };
		case actionTypes.SIGN_OUT:
			return { ...state, isUserSignedIn: false, userId: null };
		default:
			return state;
	}
};
