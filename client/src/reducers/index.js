import { combineReducers } from 'redux';
// import default reducer which has been already created by redux-form
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
export default combineReducers({
	auth: authReducer,
	form: formReducer,
});
