import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/FloatingActionButton';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const styles = {
    container: {
        margin: 20
    },
    button: {
        position: 'fixed',
        right: 60,
        bottom: 60,

        '> button': {
            backgroundColor: '#00384f'
        }
    }
};

export default function NoteEditor({ value, onChange, onSave }) {
    let refEditor;
    const setEditorFocus = ref => {
        refEditor = ref;
    };
    useEffect(() => refEditor && refEditor.focusEditor(), [value]);

    return (
        <div style={styles.container}>
            <Editor editorState={value} ref={setEditorFocus} onEditorStateChange={onChange} />
            <Button style={styles.button} onClick={onSave}>
                Save
            </Button>
        </div>
    );
}

NoteEditor.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};
