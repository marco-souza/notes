import { combineReducers } from 'redux-immutable';
import meetings from './meeting';
import notes from './note';

export * from './meeting';
export * from './note';

export default combineReducers({
    meetings,
    notes
});
