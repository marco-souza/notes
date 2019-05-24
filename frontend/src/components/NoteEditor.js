import React, { useState } from 'react';
import Button from 'material-ui/FloatingActionButton';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'

const styles = {
    container: {
        margin: 20
    },
    editor: {
        height: 300
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

export default function NoteEditor() {
    const [value, setValue] = useState('');

    return (
        <div style={styles.container}>
            <HtmlEditor
                autoFocus
                options={options}
                value={value}
                onChange={setValue}
                render={({ editor, view }) => (
                    <div style={styles.editor}>
                        <MenuBar menu={menu} view={view} />
                        {editor}
                    </div>
                )}
            />

            <Button style={styles.button} >
                Save
            </Button>
        </div>
    );
}
