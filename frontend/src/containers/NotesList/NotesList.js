import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NoteListItem, SideBar } from '../../components';
import { Editor } from '../index';
import { setEditingNote, setEditorValue } from '../../ducks';
import { getNotes } from '../../selectors';

function NotesList(props) {
    const { notes, onSetEditingNote, onSetEditorValue } = props;
    const [selected, setSelected] = useState(null);
    const handleClick = ({ id, text }) => {
        onSetEditorValue(text);
        onSetEditingNote(id);
        setSelected(id);
    };

    return !notes.isVisible ? null : (
        <SideBar title="Notes" rightSide={notes.editingNote && <Editor />}>
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
    onSetEditingNote: PropTypes.func.isRequired,
    onSetEditorValue: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        notes: getNotes(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Notes Actions
        onSetEditingNote: id => dispatch(setEditingNote(id)),

        // Editor Actions
        onSetEditorValue: text => dispatch(setEditorValue(text))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);
