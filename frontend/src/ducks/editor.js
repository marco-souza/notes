import { EditorState, ContentState } from 'draft-js';
import { createAction, handleActions } from 'redux-actions';

export const setEditorValue = createAction('SET_EDITOR_VALUE');
export const setEditorState = createAction('SET_EDITOR_STATE');
export const selectionToEnd = createAction('SELECTION_TO_END');

const INITIAL_STATE = {
    value: EditorState.createEmpty()
};

const textToEditorState = text => EditorState.createWithContent(ContentState.createFromText(text));

export default handleActions(
    {
        [setEditorValue]: (state, { payload }) => ({
            value: textToEditorState(payload)
        }),

        [setEditorState]: (state, { payload }) => ({
            value: payload
        })
    },
    INITIAL_STATE
);
