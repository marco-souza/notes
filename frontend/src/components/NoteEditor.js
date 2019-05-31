import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/FloatingActionButton';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme/muiTheme';

const styles = {
    container: {
        margin: 20
    },
    button: {
        position: 'fixed',
        right: 60,
        bottom: 60
    }
};

export default function NoteEditor({ value, onChange }) {
    let refEditor;
    const setEditorFocus = ref => {
        refEditor = ref;
    };
    useEffect(() => refEditor && refEditor.focusEditor(), [value]);

    return (
        <div style={styles.container}>
            <Editor editorState={value} ref={setEditorFocus} onEditorStateChange={onChange} />
            <Button style={styles.button}>Save</Button>

            <MuiThemeProvider theme={theme}>
                <Fab color="primary" aria-label="Edit" style={styles.button}>
                    <AddIcon />
                </Fab>
            </MuiThemeProvider>
        </div>
    );
}

NoteEditor.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};
