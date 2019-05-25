import { combineReducers } from 'redux-immutable';
import meetings from './meeting';
import notes from './note';
import editor from './editor';

export * from './meeting';
export * from './note';
export * from './editor';

export default combineReducers({
    meetings,
    editor,
    notes
});
