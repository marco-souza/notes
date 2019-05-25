import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { NoteListItem, NoteEditor } from '../../components';
import { setEditingNote } from '../../ducks';
import { getNotes } from '../../selectors';

const styles = {
    container: {
        display: 'flex'
    }
};

function NotesList(props) {
    const { notes, onSetEditingNote } = props;

    return !notes.isVisible ? null : (
        <div style={styles.container}>
            <List style={{ width: 300 }}>
                {/* TODO add icon to view note list */}
                {notes.notes.map(note => (
                    <NoteListItem key={note.id} note={note} onClick={() => onSetEditingNote(note.id)} />
                ))}
            </List>

            {notes.editingNote && <NoteEditor />}
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.object.isRequired,
    onSetEditingNote: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        notes: getNotes(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Notes Actions
        onSetEditingNote: id => dispatch(setEditingNote(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);
