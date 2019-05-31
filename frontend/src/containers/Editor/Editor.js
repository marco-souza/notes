import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stateToHTML } from 'draft-js-export-html';

import { NoteEditor } from '../../components';
import { setEditorState, setEditorValue, saveNote, fetchMeetings } from '../../ducks';
import { getEditor } from '../../selectors';


function Editor(props) {
    const { editor, onSetEditorValue, onSetEditorState, onSaveNote, onFetchMeetings } = props;
    const handleSave = () => {
        onSetEditorValue(stateToHTML(editor.value.getCurrentContent()));
        onSaveNote();
        onFetchMeetings();
    };
    return <NoteEditor value={editor.value} onChange={onSetEditorState} onSave={handleSave} />;
}

Editor.propTypes = {
    editor: PropTypes.object.isRequired,
    onSetEditorState: PropTypes.func.isRequired,
    onSetEditorValue: PropTypes.func.isRequired,
    onFetchMeetings: PropTypes.func.isRequired,
    onSaveNote: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        editor: getEditor(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Notes Actions
        onSetEditorState: text => dispatch(setEditorState(text)),
        onSetEditorValue: text => dispatch(setEditorValue(text)),

        // Note Actions
        onSaveNote: () => dispatch(saveNote()),

        // Meetings Actions
        onFetchMeetings: () => dispatch(fetchMeetings())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
