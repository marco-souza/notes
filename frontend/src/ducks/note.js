import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { Note } from '../models';

export const setNotesVisibility = createAction('SET_NOTES_VISIBILITY');
export const setNotes = createAction('SET_NOTES');
export const setEditingNote = createAction('SET_EDITING_NOTE');

export const saveNote = createAction('SAVE_NOTE');
export const saveNoteCompleted = createAction('SAVE_NOTE_COMPLETED');

const INITIAL_STATE = {
    isVisible: false,
    notes: Immutable.List(),
    meetingId: null,
    editingNote: null
};

const getNewNotes = (notes, newNote) => {
    const position = notes.map(note => note.id).indexOf(newNote.id);
    const item = new Note(newNote);

    if (position >= 0) {
        return notes.map((note, i) => (i === position ? item : note));
    }

    return [item, ...notes];
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
            meetingId: payload.id,
            notes: Immutable.List(payload.notes.map(note => new Note(note)))
        }),

        [setEditingNote]: (state, { payload }) => ({
            ...state,
            editingNote: payload
        }),

        [saveNoteCompleted]: (state, { payload }) => ({
            ...state,
            notes: getNewNotes(state.notes, payload.note),
            editingNote: payload.note.id
        })
    },
    INITIAL_STATE
);
