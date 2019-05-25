import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NoteEditor } from '../../components';
import { setEditorValue } from '../../ducks';
import { getEditor } from '../../selectors';

function Editor(props) {
    const { editor, onSetEditorValue } = props;

    return <NoteEditor value={editor.value} onChange={onSetEditorValue} />;
}

Editor.propTypes = {
    editor: PropTypes.object.isRequired,
    onSetEditorValue: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        editor: getEditor(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Notes Actions
        onSetEditorValue: text => dispatch(setEditorValue(text))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
