import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NoteEditor } from '../../components';
import { setEditorState } from '../../ducks';
import { getEditor } from '../../selectors';

function Editor(props) {
    const { editor, onSetEditorState } = props;
    return <NoteEditor value={editor.value} onChange={onSetEditorState} />;
}

Editor.propTypes = {
    editor: PropTypes.object.isRequired,
    onSetEditorState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        editor: getEditor(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Notes Actions
        onSetEditorState: text => dispatch(setEditorState(text))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
