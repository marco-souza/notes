import { EditorState, ContentState, SelectionState } from 'draft-js';
import { createAction, handleActions } from 'redux-actions';

export const setEditorValue = createAction('SET_EDITOR_VALUE');
export const setEditorState = createAction('SET_EDITOR_STATE');

const INITIAL_STATE = {
    value: EditorState.createEmpty()
};

const textToEditorState = text => EditorState.createWithContent(ContentState.createFromText(text));
const moveSelectionToEnd = editorState => {
    const content = editorState.getCurrentContent();
    const blockMap = content.getBlockMap();

    const key = blockMap.last().getKey();
    const length = blockMap.last().getLength();

    // On Chrome and Safari, calling focus on contenteditable focuses the
    // cursor at the first character. This is something you don't expect when
    // you're clicking on an input element but not directly on a character.
    // Put the cursor back where it was before the blur.
    const selection = new SelectionState({
        anchorKey: key,
        anchorOffset: length,
        focusKey: key,
        focusOffset: length
    });
    return EditorState.forceSelection(editorState, selection);
};

export default handleActions(
    {
        [setEditorValue]: (state, { payload }) => ({
            value: moveSelectionToEnd(textToEditorState(payload))
        }),

        [setEditorState]: (state, { payload }) => ({
            value: moveSelectionToEnd(payload)
        })
    },
    INITIAL_STATE
);
