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
export const fetchStreams = () => async (dispatch) => {
	const response = await axios.get('/streams');
	dispatch({
		type: actionTypes.FETCH_STREAMS,
		payload: response.data,
	});
};
export const fetchStream = (streamId) => async (dispatch) => {
	const response = await axios.get(`/streams/:${streamId}`);
	dispatch({
		type: actionTypes.FETCH_STREAM,
		payload: response.data,
	});
};
export const deleteStreams = (streamId) => async (dispatch) => {
	await axios.get(`/streams/:${streamId}`);
	dispatch({
		type: actionTypes.DELETE_STREAM,
		payload: streamId,
	});
};
export const editStream = (streamId, streamValues) => async (dispatch) => {
	const response = await axios.put(`/streams/:${streamId}`, streamValues);
	dispatch({
		type: actionTypes.EDIT_STREAM,
		payload: response.data,
	});
};
