import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { createAction, handleActions } from 'redux-actions';

export const setEditorValue = createAction('SET_EDITOR_VALUE');
export const setEditorState = createAction('SET_EDITOR_STATE');
export const selectionToEnd = createAction('SELECTION_TO_END');

const INITIAL_STATE = {
    value: EditorState.createEmpty()
};

const textToEditorState = text => EditorState.createWithContent(ContentState.createFromText(text));
const htmlToEditorState = text => {
    const blocksFromHTML = convertFromHTML(text);
    const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(content);
};

export default handleActions(
    {
        [setEditorValue]: (state, { payload }) => ({
            value: payload[0] === '<' ? htmlToEditorState(payload) : textToEditorState(payload)
        }),

        [setEditorState]: (state, { payload }) => ({
            value: payload
        })
    },
    INITIAL_STATE
);
