import * as actionTypes from './actionTypes';
import axios from '../axios/axios';
import history from '../history';

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
// redux-thunk can return store object by passing `getState` method. We can use this to get userId from auth object in state.
export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await axios.post('/streams', { ...formValues, userId });
	dispatch({
		type: actionTypes.CREATE_STREAM,
		payload: response.data,
	});
	history.push('/');
};
export const fetchStreams = () => async (dispatch) => {
	const response = await axios.get('/streams');
	dispatch({
		type: actionTypes.FETCH_STREAMS,
		payload: response.data,
	});
};
export const fetchStream = (streamId) => async (dispatch) => {
	const response = await axios.get(`/streams/${streamId}`);
	dispatch({
		type: actionTypes.FETCH_STREAM,
		payload: response.data,
	});
};
export const deleteStreams = (streamId) => async (dispatch) => {
	await axios.delete(`/streams/${streamId}`);
	dispatch({
		type: actionTypes.DELETE_STREAM,
		payload: streamId,
	});
	history.push('/');
};
export const editStream = (streamId, streamValues) => async (dispatch) => {
	console.log(streamId, streamValues);
	// put method overwrites update key value pairs and remove properties that are not in the values payload while patch method only update properties that come from payload and do not remove untouched items.
	const response = await axios.patch(`/streams/${streamId}`, streamValues);
	dispatch({
		type: actionTypes.EDIT_STREAM,
		payload: response.data,
	});
	history.push('/');
};
