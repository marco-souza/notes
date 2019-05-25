import { createAction, handleActions } from 'redux-actions';

export const setEditorValue = createAction('SET_EDITOR_VALUE');

const INITIAL_STATE = {
    value: ''
};

export default handleActions(
    {
        [setEditorValue]: (state, { payload }) => ({
            ...state,
            value: payload
        })
    },
    INITIAL_STATE
);
