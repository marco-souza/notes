import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { Note } from '../models';

export const setNotesVisibility = createAction('SET_NOTES_VISIBILITY');
export const setNotes = createAction('SET_NOTES');
export const setEditingNote = createAction('SET_EDITING_NOTE');

const INITIAL_STATE = {
    isVisible: false,
    notes: Immutable.List(),
    editingNote: null
};

export default handleActions(
    {
        [setNotesVisibility]: (state, { payload }) => ({
            ...state,
            isVisible: payload,
            editingNote: null
        }),

        [setNotes]: (state, { payload }) => ({
            ...state,
            notes: Immutable.List(payload.notes.map(note => new Note(note)))
        }),

        [setEditingNote]: (state, { payload }) => ({
            ...state,
            editingNote: payload
        })
    },
    INITIAL_STATE
);
