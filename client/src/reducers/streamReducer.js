import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case actionTypes.CREATE_STREAM:
			// {...state, [action.payload.id]: action.payload} is equivalent to:
			//  const newState = {...state};
			// newState[action.payload.id] = action.payload;
			// return newState
			return { ...state, [action.payload.id]: action.payload };
		case actionTypes.FETCH_STREAMS:
			// using lodash mapKeys method which taks an array and return an object. They key for each object will be set in the argument.
			return { ...state, ..._.mapKeys(action.payload, 'id') };

		case actionTypes.EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case actionTypes.DELETE_STREAM:
			// using omit method which located inside lodash package to delete a property from state with an id
			return _.omit(state, action.payload);
		case actionTypes.FETCH_STREAMS:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
