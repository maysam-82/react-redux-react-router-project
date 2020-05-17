import * as actionTypes from './actionTypes';
import axios from '../axios/axios';
export const signIn = (userId) => {
	return {
		type: actionTypes.SIGN_IN,
		payload: userId,
	};
};
export const signOut = () => {
	return {
		type: actionTypes.SIGN_OUT,
	};
};
export const createStream = (formValues) => async (dispatch) => {
	const response = await axios.post('/streams', formValues);
	dispatch({
		type: actionTypes.CREATE_STREAM,
		payload: response.data,
	});
};
