import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NoteListItem, NoteEditor, SideBar } from '../../components';
import { setEditingNote } from '../../ducks';
import { getNotes } from '../../selectors';

function NotesList(props) {
    const { notes, onSetEditingNote } = props;
    const [selected, setSelected] = useState(null);
    const handleClick = ({ id }) => {
        onSetEditingNote(id);
        setSelected(id);
    };

    return !notes.isVisible ? null : (
        <SideBar title="Notes" rightSide={notes.editingNote && <NoteEditor />}>
            {notes.notes.map(note => (
                <NoteListItem
                    isSelected={selected === note.id}
                    key={note.id}
                    note={note}
                    onClick={() => handleClick(note)}
                />
            ))}
        </SideBar>
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
